const mongoose = require('mongoose');
// const { tokenTypes } = require('../config/tokens');

const studioProductsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    categoryStudioProductId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'studioCategories',
      required: true,
    },
    features: {
      type: Number,
      require: true,
    },
    euro: {
      type: Number,
      require: true,
    },
    canadian: {
      type: Number,
      require: true,
    },
    indian: {
      type: Number,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },

    money: [
      {
        name: { type: String },
        price: { type: Number },
      },
    ],

    imgStudioProduct: [
      {
        id: { type: String },
        imgStudioUrl: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json

/**
 * @typedef StudioProducts
 */
const StudioProducts = mongoose.model('StudioProducts', studioProductsSchema);

module.exports = StudioProducts;
