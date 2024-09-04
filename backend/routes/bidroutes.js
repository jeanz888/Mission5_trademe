// routes/bidRoutes.js
const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');

router.post('/place', bidController.placeBid);
router.get('/user/:userId', bidController.getUserBids);
router.put('/update/:bidId', bidController.updateBidStatus);

module.exports = router;