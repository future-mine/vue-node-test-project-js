import { config } from "dotenv";
config();
import express from "express";
import cors from "cors";
import { initDb } from "./db";
import swaggerJsDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";
import path from "path";

initDb();
export const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

RegisterRoutes(app);
if (process.env.NODE_ENV === "development") {
  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Catchphrases REST API",
        description:
          "A REST API built with Express and MongoDB. This API provides movie catchphrases and the context of the catchphrase in the movie.",
      },
    },
    apis: [__dirname + "/controllers/*"],
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  try {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  } catch (err) {
    console.error("unable to read swagger.json", err);
  }
}
