// controllers/bidController.js
const Bid = require('../models/Bid');

exports.placeBid = async (req, res) => {
  try {
    const newBid = new Bid(req.body);
    await newBid.save();
    res.status(201).json({ message: 'Bid placed successfully', bid: newBid });
  } catch (error) {
    res.status(400).json({ message: 'Error placing bid', error: error.message });
  }
};

exports.getUserBids = async (req, res) => {
  try {
    const bids = await Bid.find({ userId: req.params.userId });
    res.status(200).json(bids);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching bids', error: error.message });
  }
};

exports.updateBidStatus = async (req, res) => {
  try {
    const updatedBid = await Bid.findByIdAndUpdate(req.params.bidId, { status: req.body.status }, { new: true });
    res.status(200).json(updatedBid);
  } catch (error) {
    res.status(400).json({ message: 'Error updating bid status', error: error.message });
  }
};