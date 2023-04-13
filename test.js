import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';


export const options = {
    scenarios: {
      constant_request_rate: {
        executor: 'constant-arrival-rate',
        rate: 1, // 1 request every 1 second for 1 minute
        timeUnit: '1s',
        duration: '1m',
        preAllocatedVUs: 20,
        maxVUs: 100,
      },
    },
  };

export default function () {

    const url = 'https://reqres.in/api/users';
    const requestBody = {
        name: "morpheus",
        job: "leader"
    };

    const response = http.post(url, requestBody);

    console.log(response.json())
}
