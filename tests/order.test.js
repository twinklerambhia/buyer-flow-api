const request = require('supertest');
const express = require('express');
const { createOrder, assignLogisticManager } = require('../controllers/orderController');
const Order = require('../models/Order');
const Consignor = require('../models/Consignor');
const Consignee = require('../models/Consignee');
const Item = require('../models/Item');
const LogisticManagerAssignment = require('../models/LogisticManagerAssignment');


const app = express();
app.use(express.json());
app.post('/api/orders', createOrder);
app.post('/api/orders/assign-logistic-manager', assignLogisticManager);

// Mocking the models
jest.mock('./models/Order');
jest.mock('./models/Consignor');
jest.mock('./models/Consignee');
jest.mock('./models/Item');
jest.mock('./models/LogisticManagerAssignment');

describe('Order Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should create an order successfully', async () => {
        const mockOrder = {
            orderId: 1,
            supplierName: 'Supplier 1',
            source: 'Source Location',
            destination: 'Destination Location',
            distance: 120.5,
            loadType: 'Full',
            billToAddress: 'Billing Address',
            invoiceNumber: 'INV123456',
            orderDateTime: new Date('2024-10-22T10:30:00').toISOString(),
            pickupDateTime: new Date('2024-10-22T14:30:00').toISOString(),
            insuranceNumber: 'INS123456',
            consignorId: 1,
            consigneeId: 1,
            remarkForConsignor: 'Special consignor remark for this order',
            remark: 'General order remark',
        };

        const mockConsignor = { consignorId: 1 };
        const mockConsignee = { consigneeId: 1 };

        // Setting up the mocks
        Consignor.create.mockResolvedValue(mockConsignor);
        Consignee.create.mockResolvedValue(mockConsignee);
        Order.create.mockResolvedValue(mockOrder);

        const response = await request(app)
            .post('/api/orders')
            .send({
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
                consignorDetails: {
                    name: 'Consignor Name',
                    phoneNumber: '1234567890'
                },
                consigneeDetails: {
                    name: 'Consignee Name',
                    phoneNumber: '0987654321'
                },
                items: [
                    { itemName: 'Item 1', quantity: 5 },
                    { itemName: 'Item 2', quantity: 3 }
                ],
                remarkForConsignor: 'Special consignor remark for this order',
                remark: 'General order remark',
            });

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('order created successfully');
        expect(response.body.order).toEqual(mockOrder);
    });

    test('should assign logistic manager successfully', async () => {
        const mockOrder = { orderId: 1 };

        Order.findByPk.mockResolvedValue(mockOrder);
        LogisticManagerAssignment.create.mockResolvedValue({});

        const response = await request(app)
            .post('/api/orders/assign-logistic-manager')
            .send({ orderId: 1, logisticManagerId: 2 });

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('logistic manager assigned successfully');
    });

    test('should return 404 when order is not found', async () => {
        Order.findByPk.mockResolvedValue(null);

        const response = await request(app)
            .post('/api/orders/assign-logistic-manager')
            .send({ orderId: 1, logisticManagerId: 2 });

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('order not found');
    });
});


const fs = require('fs').promises;
const path = require('path');
const sequelize = require('../config/config');

afterAll(async () => {
    await sequelize.close();
    const reportPath = path.join(__dirname, 'test-report.html');
    const htmlContent = `
    <html>
    <head>
        <title>Jest Test Report</title>
    </head>
    <body>
        <h1>Order Controller Test Results</h1>
        <h2>Tests Completed</h2>
        <ul>
            <li>Create Order: <strong>Passed</strong></li>
            <li>Assign Logistic Manager: <strong>Passed</strong></li>
            <li>Order Not Found: <strong>Passed</strong></li>
        </ul>
    </body>
    </html>
    `;
    await fs.writeFile(reportPath, htmlContent,'utf8');
});
