const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (request, response) => {
  const newOrder = new Order(request.body);

  try {
    const savedOrder = await newOrder.save();
    response.status(200).json(savedOrder);
  } catch (err) {
    response.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (request, response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedOrder);
  } catch (err) {
    response.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (request, response) => {
  try {
    await Order.findByIdAndDelete(request.params.id);
    response.status(200).json("Order has been deleted...");
  } catch (err) {
    response.status(500).json(err);
  }
});

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async (request, response) => {
  try {
    const orders = await Order.find({ userId: request.params.userId });
    response.status(200).json(orders);
  } catch (err) {
    response.status(500).json(err);
  }
});

// //GET ALL

router.get("/", verifyTokenAndAdmin, async (request, response) => {
  try {
    const orders = await Order.find();
    response.status(200).json(orders);
  } catch (err) {
    response.status(500).json(err);
  }
});



module.exports = router;