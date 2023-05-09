import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";
import expensesRoutes from './routes/expense';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

//Setar os headers para resolver erro de CORS
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



app.get("/", async (req, res) => {
  res.json({ message: "Please visit /countries to view all the countries" });
});

app.use("/expenses", expensesRoutes);

app.use("/countries", countryRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
