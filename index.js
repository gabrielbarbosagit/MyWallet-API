import express from "express";
import cors from "cors";



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());
app.use(router);

app.listen(PORT, () =>  console.log(`Server listening on ${PORT}`));