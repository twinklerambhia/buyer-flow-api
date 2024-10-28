const axios = require('axios');
const {testCases}= require('./testConfig'); 
//this testCases is an array for further usage. Make changes in testConfig file as per your API requirements.

const BASE_URL = 'http://localhost:8080';

describe('API Endpoint Tests', () => {
  if(testCases.Length===0) {
    console.log("No tests specified. Please specify the tests.");
    process.exit(1);
  }

  testCases.forEach((testCase) => {
    const { endpoint, method, payload, expectedResponse } = testCase;

    test(`Testing ${method.toUpperCase()} ${endpoint}`, async () => {
      try {
        const response = await axios({
          method,
          url: `${BASE_URL}${endpoint}`,
          data: payload,
        });
        expect(response.status).toBe(expectedResponse.status);

        expect(response.data).toEqual(expectedResponse.body);

      } catch (error) {
        console.error(`Test failed for ${endpoint}:`, error.message);
      }
    });
  });
});
