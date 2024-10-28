module.exports = {
    endpoint: '/api/orders',  // Define the endpoint path
    method: 'post',           // HTTP method for this endpoint (POST, GET, etc.)
    payload: {                // Define the request payload
      supplierName: 'Supplier 1',
      source: 'Source Location',
      destination: 'Destination Location',
      distance: 120.5,
      loadType: 'Full',
      billToAddress: 'Billing Address',
      invoiceNumber: 'INV123456',
      orderDateTime: '2024-10-22T10:30:00',
      pickupDateTime: '2024-10-22T14:30:00',
      insuranceNumber: 'INS123456',
      consignorDetails: { name: 'Consignor Name', phoneNumber: '1234567890' },
      consigneeDetails: { name: 'Consignee Name', phoneNumber: '0987654321' },
      items: [{ itemName: 'Item 1', quantity: 5 }, { itemName: 'Item 2', quantity: 3 }],
      remarkForConsignor: 'Special consignor remark for this order',
      remark: 'General order remark'
    },
    expectedResponse: {       // Define expected response structure and data
      status: 201,
      body: {
        message: 'order created successfully',
        order: expect.objectContaining({
          orderId: expect.any(Number),
          supplierName: 'Supplier 1',
          source:'Source Location',
          destination: 'Destination Location',
          distance:120.5,
          loadType:'Full',
          billToAddress:'Billing Address',
          invoiceNumber:'INV123456',
          orderDateTime:expect.any(String),
          pickupDateTime: expect.any(String),
          insuranceNumber: 'INS123456',
          consignorId: expect.any(Number),
          consigneeId: expect.any(Number),
          remarkForConsignor: "Special consignor remark for this order",
          remark: "General order remark",
          updatedAt: expect.any(String),
          createdAt: expect.any(String)
        })
      }
    }
  };
  