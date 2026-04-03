const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  const records = await Record.find();

  let income = 0;
  let expense = 0;

  records.forEach(r => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  const balance = income - expense;

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: balance
  });
};

exports.categoryWise = async (req, res) => {
  const data = await Record.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" }
      }
    }
  ]);

  res.json(data);
};