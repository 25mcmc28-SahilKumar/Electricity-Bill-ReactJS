const db = require("../config/db");

const addCustomer = (req, res) => {
  const { name, address } = req.body;

  const sql = `
    INSERT INTO customers (name, address)
    VALUES (?, ?)
  `;

  db.query(sql, [name, address], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "Customer added successfully",
      customerId: result.insertId,
    });
  });
};

const getCustomers = (req, res) => {
  const sql = "SELECT * FROM customers ORDER BY customer_id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json(result);
  });
};

module.exports = {
  addCustomer,
  getCustomers,
};