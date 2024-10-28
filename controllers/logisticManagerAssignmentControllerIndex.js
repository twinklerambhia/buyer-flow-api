module.exports = {
    endpoint: '/api/orders/assign-logistic-manager',
    method: 'post',
    payload: {
      orderId: 1,
      logisticManagerId: 2
    },
    expectedResponse: {
      status: 200,
      body: {
        message: 'logistic manager assigned successfully'
      }
    }
  };
  