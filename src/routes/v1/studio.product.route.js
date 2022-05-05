const express = require('express');
const validate = require('../../middlewares/validate');
const studioProductController = require('../../controllers/studio.product.controller');
const productStudioValidation = require('../../validations/product.studio.validation');
const { uploadFileStudio } = require('../../middlewares/uploadfile');

const router = express.Router();
router.post('/', uploadFileStudio, studioProductController.createStudioProduct);

router.get('/:id', studioProductController.getStudioProductById);
router.get('/', validate(productStudioValidation.getAllProduct), studioProductController.getAllStudioProduct);

module.exports = router;
