const router = require('express').Router();

const apiAuthRouter = require('./api/apiAuth.route');
const apiTransportsRouter = require('./api/apiTransports.route');
const apiCommentsRouter = require('./api/apiComments.route');

router.use('/api/auth', apiAuthRouter);
router.use('/api/transports', apiTransportsRouter);
router.use('/api/comments', apiCommentsRouter);

module.exports = router;
