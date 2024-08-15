import env from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./router/index.js";
import ClientError from "./utils/exceptions/ClientError.js";

const app = express();
env.config();

// MIDDLEWARE
app.use((req, res, next) => {
  // WEBSITE YOU WISH TO ALLOW TO CONNECT
  res.setHeader("Access-Control-Allow-Origin", "*");

  // REQUEST METHODS YOU WISH TO ALLOW
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD",
    "X-Requested-With,content-type"
  );

  // REQUEST HEADERS YOU WISH TO ALLOW
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // COOKIES
  res.setHeader("Access-Control-Allow-Credentials", true);

  // PASS TO NEXT LAYER OF MIDDLEWARE
  next();
});

app.set("trust proxy", false);

app.use(cors());

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
router(app);

app.get("/", function (req, res) {
  return res.send("API Lumi Backend FSW ");
});

// 404 NOT FOUND
app.get("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Halaman tidak ditemukan",
  });
});

// HANDLE ERRORS
app.use((error, req, res, next) => {
  if (error instanceof ClientError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
  return res.status(500).json({
    success: false,
    message: error.message,
  });
});

const PORT = process.env.PORT || 3000;

//		LISTENER
app
  .listen(PORT, () => {
    console.log(`Listen to port ${PORT}`);
  })
  .on("error", (err) => {
    console.error(`Error starting server: ${err.message}`);
  });
