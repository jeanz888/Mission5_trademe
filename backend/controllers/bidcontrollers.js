// controllers/bidController.js
const Bid = require('../models/Bid'); // Import the Bid model

/**
 * Place a new bid
 * @route POST /api/bids
 */
exports.placeBid = async (req, res) => {
  try {
    // Create a new bid with data from the request body
    const newBid = new Bid(req.body);
    
    // Save the new bid to the database
    await newBid.save();
    
    // Respond with a success message and the placed bid
    res.status(201).json({ message: 'Bid placed successfully', bid: newBid });
  } catch (error) {
    // Respond with an error message in case of failure
    res.status(400).json({ message: 'Error placing bid', error: error.message });
  }
};

/**
 * Get bids placed by a specific user
 * @route GET /api/bids/user/:userId
 */
exports.getUserBids = async (req, res) => {
  try {
    // Find bids by userId provided in the request parameters
    const bids = await Bid.find({ userId: req.params.userId });
    
    // Respond with the found bids
    res.status(200).json(bids);
  } catch (error) {
    // Respond with an error message in case of failure
    res.status(400).json({ message: 'Error fetching bids', error: error.message });
  }
};

/**
 * Update the status of an existing bid
 * @route PUT /api/bids/:bidId
 */
exports.updateBidStatus = async (req, res) => {
  try {
    // Find the bid by bidId and update its status with the data from the request body
    const updatedBid = await Bid.findByIdAndUpdate(
      req.params.bidId,
      { status: req.body.status },
      { new: true } // Return the updated document
    );
    
    // Respond with the updated bid
    res.status(200).json(updatedBid);
  } catch (error) {
    // Respond with an error message in case of failure
    res.status(400).json({ message: 'Error updating bid status', error: error.message });
  }
};