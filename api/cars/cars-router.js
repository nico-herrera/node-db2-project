const router = require('express').Router()

const Cars = require('./cars-model');
const Middleware = require('./cars-middleware');
const ExpressError = require('../ExpressError')

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll('cars');
        res.status(200).json(cars);
    } catch (err) {
        next(new ExpressError("error getting fruits: " + err.message, 500));
    }
});

router.get('/:id', Middleware.checkCarId, (req, res, next) => {
    try {
        res.status(200).json(req.car);
    } catch (err) {
        next(new ExpressError("error getting specific car: " + err.message, 500));
    }
});

router.post('/', Middleware.checkCarPayload, Middleware.checkVinNumberValid, async (req, res, next) => {
    try {
        const newCar = await Cars.create(req.body);
        res.status(200).json(req.body)
    } catch (err) {
        next(new ExpressError("error creating new car: " + err.message, 500));
    }
})

router.use((error, req, res) => {
    console.log('error: ', error);
    res.status(error.statusCode || 500).json({ message: error.message, error: error });
  })

module.exports = router;