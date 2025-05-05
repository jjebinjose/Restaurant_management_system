const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuItem',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: mongoose.Types.Decimal128,
    required: true
  }
});

const OrderSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    required: true,
    maxlength: 100
  },
  customer_phone: {
    type: String,
    maxlength: 20
  },
  order_status: {
    type: String,
    enum: ['pending', 'preparing', 'ready', 'delivered'],
    default: 'pending'
  },
  total_amount: {
    type: mongoose.Types.Decimal128,
    required: true
  },
  items: [OrderItemSchema]  // Embedded subdocuments
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
