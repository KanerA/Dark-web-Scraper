require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development";
// const MONGO_URI = process.env.MONGO_URI;
const MONGO_URI = 'mongodb://mongo:27017/stronghold-scraper';
const PORT = process.env.PORT || 8080;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`connected to MongoDB`);
    app.listen(PORT, () =>
      console.log(`app listening at http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });
