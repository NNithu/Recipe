import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();



app.use(bodyParser.json({ limit: "30mb", extended: false }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: false }));
app.use(cors());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  try {
    res.send("testing");
  } catch (error) {
    console.log("error");
  }
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb+srv://nithu:nithu@cluster0.srt4i.mongodb.net/?retryWrites=true&w=majority", {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, console.log(`connected to port ${PORT}`)))
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
