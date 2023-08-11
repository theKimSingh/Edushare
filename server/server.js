const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sql = require("mssql");

const app = express();
const PORT = 3001;

const dbConfig = {
  server: "edushare0.database.windows.net",
  database: "edushareDB",
  user: "Edushare",
  password: "groupeintern@123",
  options: {
    encrypt: true,
  },
};

app.use(bodyParser.json());

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/api/data", async (req, res) => {
  try {
    const { condition } = req.query;
    const pool = await sql.connect(dbConfig);
    console.log(
      "SELECT * FROM [dbo].[DonateResources] WHERE Resource='" + condition + "'"
    );
    const result = await pool
      .request()
      .query(
        "SELECT * FROM [dbo].[DonateResources] WHERE Resource='" +
          condition +
          "'"
      );
    res.json(result.recordset);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from the database." });
  }
});

// Add more endpoints for CRUD operations

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
