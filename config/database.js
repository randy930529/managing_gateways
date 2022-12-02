require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.HOST;

module.exports = () => {
  console.log(uri);
  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("Mongo connect! on", uri))
    .catch((err) => console.error(`Connect to database has error: ${err}`));

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("Mongoose is disconnected");
      process.exit(0);
    });
  });
};
