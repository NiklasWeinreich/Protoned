const express = require("express");
const cors = require("cors");
const bodyparser = require("bodyparser");

const app = express();
app(express.static)("public");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors({ origin: true, credentials: true}));

const stripe = require("stripe")("sk_test_51MawfMFFxCTt81aXVC5LLXg1nzTYwEQLM20LidrDRVjR3FDF3SKhazAzDgaR9871rABLvbotyuLA14hjqYmboS2x00ujPqdm9F");

app.post("/checkout", async (req, res, next) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => ({
        price_data: {
          currency: "DKK",
          product_data: {
            name: item.name,

            images: [item.product]
        },
        unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      succes_url: "http://localhost:4242/success.html",
      succes_url: "http://localhost:4242/cancel.html",
    });

    res.statusCode(200).json(session);
  } catch (error) {
      next(error);
  }
});

app.listen(4242, () => console.log('app is running on 4242'));
