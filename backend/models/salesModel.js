const mongoose = require("mongoose");

const paymentModeSchema = new mongoose.Schema({
  mode: {
    type: String,
    enum: ["Cash", "Credit", "Bank Transfer", "Settle", "UPI"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const salesSchema = new mongoose.Schema({
  orderItems: [
    {
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        // required: true,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        // required: true,
      },

      membership: {
        type: mongoose.Schema.ObjectId,
        ref: "MembershipPlans",
      },

      saleSGST: {
        type: Number,
      },
      saleCGST: {
        type: Number,
      },
      baseSellingPrice: {
        type: Number,
      },
      saleIGST: {
        type: Number,
      },
      hsn: {
        type: String,
      },
      discountAmt: {
        type: Number,
      },
      originalbaseSellingPrice: {
        type: Number,
      },
    },
  ],

  modeOfPayment: {
    type: [paymentModeSchema],
    required: false
  },

  total: {
    type: Number,
    // required: true,
  },
  party: {
    type: mongoose.Schema.ObjectId,
    ref: "Party",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  invoiceNum: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  reciverName: {
    type: String,
  },
  businessName: {
    type: String,
  },
  businessAddress: {
    type: String,
  },
  gst: {
    type: String,
  },
  kotId: {
    type: String,
  },

  userName: {
    type: String,
  },
  subUserName: {
    type: String,
  }

});

module.exports = mongoose.model("salesModel", salesSchema);
