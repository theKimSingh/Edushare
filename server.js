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

app.post("/api/submitForm", async (req, res) => {
  try {
    const {
      fullName,
      email,
      states,
      city,
      zip,
      age,
      street,
      resource,
      dateTime,
    } = req.body;

    

    const pool = await sql.connect(dbConfig);

    console.log(`
    INSERT INTO [dbo].[FindSupplies] ([Full Name], [Email], [Age], [Street], [City], [State],  [Zip], [Resource], [Date Added])
    VALUES ('${fullName}', '${email}', '${age}', '${street}',  '${city}', '${states}', '${zip}',  '${resource}', '${dateTime}')
  `);

    await pool.request().query(`
    INSERT INTO [dbo].[FindSupplies] ([Full Name], [Email], [Age], [Street], [City], [State], [Zip], [Resource], [Date Added])
      VALUES ('${fullName}', '${email}', '${age}', '${street}', '${city}', '${states}', '${zip}',   '${resource}', '${dateTime}')
    `);

    res.status(200).json({ message: "Form data inserted successfully" });
  } catch (error) {
    console.error("Error inserting form data:", error);
    res.status(500).json({ message: "Error inserting form data" });
  }
});

app.post("/api/submitDonate", async (req, res) => {
  try {
    const {
      fullName,
      email,
      states,
      city,
      zip,
      age,
      street,
      resource,
      dateTime,
      quantity,
      productName,
    } = req.body;

    const pool = await sql.connect(dbConfig);

    console.log(`
    INSERT INTO [dbo].[DonateResources] ([Full Name], [Email], [Age Group], [Street], [City], [State],  [Zip], [Resource], [Product Name], [Quantity], [Date])
    VALUES ('${fullName}', '${email}', '${age}', '${street}', '${city}', '${states}', '${zip}', '${resource}', '${productName}', '${quantity}', '${dateTime}')
  `);

    await pool.request().query(`
    INSERT INTO [dbo].[DonateResources] ([Full Name], [Email], [Age Group], [Street], [City], [State],  [Zip], [Resource], [Product Name], [Quantity], [Date])
    VALUES ('${fullName}', '${email}', '${age}', '${street}', '${city}', '${states}', '${zip}', '${resource}', '${productName}', '${quantity}', '${dateTime}')
    `);

    res.status(200).json({ message: "Form data inserted successfully" });
  } catch (error) {
    console.error("Error inserting form data:", error);
    res.status(500).json({ message: "Error inserting form data" });
  }
});

// Add more endpoints for CRUD operations

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
