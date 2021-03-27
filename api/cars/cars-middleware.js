const ExpressError = require('../ExpressError');
const Cars = require('./cars-model');
const vinValidator = require('vin-validator');


const checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id);
    if (car) {
      req.car = car;
      next()
    } else {
      next(new ExpressError(`car with id ${req.params.id} is not found`, 404))
    }
  } catch (err) {
    next(new ExpressError(err, 500))
  }
}

const checkCarPayload = (req, res, next) => {
  try {
    const body = req.body;
    if (!body.vin) {
      next(new ExpressError(`car VIN is missing`, 400))
    } else if (!body.make) {
      next(new ExpressError(`car Make is missing`, 400))
    } else if (!body.model) {
      next(new ExpressError(`car Model is missing`, 400))
    } else if (!body.mileage) {
      next(new ExpressError(`car Mileage is missing`, 400))
    } else if (typeof body.mileage !== 'number') {
      next(new ExpressError('Mileage must be a integer', 400))
    } else {
      next();
    }
  } catch (err) {
    next(new ExpressError(err, 500))
  }
}

const checkVinNumberValid = (req, res, next) => {
  try {
    const vin = req.body.vin;
    if (vinValidator.validate(vin)) {
      next()
    } else {
      next(new ExpressError(`vin ${vin} is invalid`, 400))
    }
  } catch (err) {
    next(new ExpressError(err, 500))
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid
}