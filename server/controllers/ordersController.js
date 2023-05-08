
// работает, но нет номера заказа
// const { Orders } = require('../models/models');

// class OrdersController {
//   async create(req, res) {
//     const { basketItems } = req.body;
//     const orders = [];
    
//     for (const item of basketItems) {
//       const order = await Orders.create({
//         name: item.name,
//         price: item.price,
//         weight: item.weight,
//         img: item.img,
//       });
//       orders.push(order);
//     }
    
//     return res.json(orders);
//   }
  
//   async getAll(req, res) {
//     const orders = await Orders.findAll();
//     return res.json(orders);
//   }
// }

// module.exports = new OrdersController();


// работает, но нет номера заказа
// const { Orders } = require('../models/models');

// class OrdersController {
//   create = async (req, res) => {
//     const { basketItems } = req.body;
//     const orders = await Orders.bulkCreate(basketItems.map(item => ({...item})));
//     return res.json(orders);
//   };
  
//   getAll = async (req, res) => {
//     const orders = await Orders.findAll();
//     return res.json(orders);
//   };
// }

// module.exports = new OrdersController();


// const { Orders } = require('../models/models');

// class OrdersController {
//   create = async (req, res) => {
//     const { basketItems } = req.body;
//     const orders = [];
//     for (let i = 0; i < basketItems.length; i++) {
//       const item = basketItems[i];
//       const order = await Orders.create(item);
//       orders.push(order);
//     }
//     return res.json(orders);
//   };
  
//   getAll = async (req, res) => {
//     const orders = await Orders.findAll();
//     return res.json(orders);
//   };
// }

// module.exports = new OrdersController();

const { Orders } = require('../models/models');

class OrdersController {
  create = async (req, res) => {
    const { basketItems } = req.body;
    const orders = [];
    for (let i = 0; i < basketItems.length; i++) {
      const item = basketItems[i];
      const order = await Orders.create(item);
      orders.push(order);
    }
    return res.json(orders);
  };
  
  getAll = async (req, res) => {
    const orders = await Orders.findAll();
    return res.json(orders);
  };
}

module.exports = new OrdersController();