import "dotenv/config";
import express from 'express';
import cors from "cors";
import connetcDatabase from './src/database/database.js';
import routes from "./src/routes/router.js";

const app = express();
const port = process.env.PORT || 3000;

connetcDatabase();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
