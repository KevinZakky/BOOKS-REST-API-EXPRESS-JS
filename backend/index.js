import express from "express";
import cors from "cors";
import BookRoute from "./routes/BookRoute.js";
import FileUpload from "express-fileupload";

const app = express();
app.use(cors());
app.use(express.json());
app.use(BookRoute);
app.use(FileUpload());

app.listen(5000, () => console.log(`Server up and running...`));
