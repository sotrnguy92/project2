const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');

router.use('/auth', authRoutes);
router.use('/api', apiRoutes);

module.exports = router
