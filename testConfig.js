const orderTestConfig =require('./controllers/orderControllerIndex');
const logisticTestConfig= require('./controllers/logisticManagerAssignmentControllerIndex');

const testConfig={
    testOrder: true,
    testLogistic:true
}
const testCases = [];
if (testConfig.testOrder) testCases.push(orderTestConfig);
if(testConfig.testLogistic) testCases.push(logisticTestConfig);


module.exports={testConfig, testCases};