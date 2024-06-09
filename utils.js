// Function to get array of consecutive dates between a given start and end date (source: https://stackoverflow.com/a/50398144)

const getDaysArray = function (s, e) {
  const dateArr = [];
  for (
    const date = new Date(s);
    date <= new Date(e);
    date.setDate(date.getDate() + 1)
  ) {
    dateArr.push(new Date(date));
  }
  return dateArr;
};

const flattenExpenses = function (expenses) {
  const processed = expenses.map((transaction) => {
    return {
      id: transaction.id,
      dates: getDaysArray(transaction.date_start, transaction.date_end),
      income_expense: transaction.income_expense,
      amount: transaction.amount,
      category_id: transaction.category_id,
    };
  });
  const processed2 = processed.flatMap((transaction2) => {
    return transaction2.dates.map((date) => {
      return {
        date: date,
        id: transaction2.id,
        income_expense: transaction2.income_expense,
        amount: transaction2.amount / transaction2.dates.length,
        category_id: transaction2.category_id,
      };
    });
  });

  const processed3 = processed2.reduce((acc, expense) => {
    const { date, income_expense, amount } = expense;
    if (!acc[date]) {
      acc[date] = {
        expenses: [],
        total: 0,
      };
    }
    acc[date].expenses.push(expense);
    acc[date].total += income_expense == "income" ? amount : -amount;
    return acc;
  }, []);

  return processed3;
};

module.exports = flattenExpenses;
