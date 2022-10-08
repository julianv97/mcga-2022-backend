import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    maxLength: 100,
  },
  price: {
    type: Number,
    required: true,
    min: 1,
  },
  stock: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ['computers', 'phones', 'accesories'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model('Products', ProductSchema);

export default Product;
