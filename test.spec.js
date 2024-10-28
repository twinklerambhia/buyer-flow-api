const axios = require('axios');
const orderTestConfig = require('./controllers/orderControllerIndex');
const logisticTestConfig = require('./controllers/logisticManagerAssignmentControllerIndex');
const testConfig= require('./testConfig');

const testConfigs = [];
if (testConfig.testOrder){
  testConfigs.push(orderTestConfig);
}
if(testConfig.testLogistic){
  testConfigs.push(logisticTestConfig);
}
if(testConfigs.Length===0) {
  process.exit(1);
}
const BASE_URL = 'http://localhost:8080';

describe('API Endpoint Tests', () => {
  testConfigs.forEach((config) => {
    const { endpoint, method, payload, expectedResponse } = config;

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
