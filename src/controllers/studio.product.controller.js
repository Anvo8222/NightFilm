/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stuidoProductService } = require('../services');
const pick = require('../utils/pick');

const getAllStudioProduct = catchAsync(async (req, res) => {
  let perPage = req.query.limit || 6;
  let page = req.query.page || 1;
  let filter = pick(req.query, ['categoryStudioProductId', 'name']);
  let query = {};

  if (filter.categoryStudioProductId) {
    query.categoryStudioProductId = filter.categoryStudioProductId || {};
  }
  if (filter.name) {
    query.name = { $regex: filter.name, $options: 'i' };
  }

  const allProduct = await stuidoProductService.getAllStudioProduct(perPage, page, query);
  res.send(allProduct);
});

const createStudioProduct = catchAsync(async (req, res) => {
  const productImg = [];
  req.files.forEach((item) => {
    const newObj = {
      imgStudioUrl: item.filename,
    };
    productImg.push(newObj);
  });
  const result = { ...req.body, imgStudioProduct: productImg };
  const productStudio = await stuidoProductService.createStudioProduct(result);
  res.send(productStudio);
});

const getStudioProductById = catchAsync(async (req, res) => {
  const product = await stuidoProductService.getStudioProductById(req.params.id);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  res.send(product);
});

module.exports = {
  createStudioProduct,
  getAllStudioProduct,
  getStudioProductById,
};
