const router = require('express').Router();

const dashboardRoutes = require('./dashboard');
const homeRoutes = require('./home');
const apiRoutes = require('./api');

router.use('/dash', dashboardRoutes);
router.use('/home', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
    }
);

module.exports = router;