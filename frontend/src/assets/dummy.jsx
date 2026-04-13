// dummy.jsx — sample data for development/testing

// Gauge Data
export const gaugeData = [
  { name: 'Income', value: 4500, history: [3200, 4000, 5000, 6000, 5500] },
  { name: 'Expenses', value: 3200, history: [1800, 1900, 2100, 2400, 3000] },
  { name: 'Savings', value: 1800, history: [1000, 1200, 900, 1500, 1800] },
];

const categories = ['Food', 'Housing', 'Transport', 'Shopping', 'Entertainment', 'Utilities', 'Healthcare'];

const randomDate = () => {
  const end = new Date();
  const start = new Date();
  start.setDate(start.getDate() - 30);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString().split('T')[0];
};

export const dummyTransactions = Array.from({ length: 20 }, (_, i) => {
  const isExpense = Math.random() > 0.3;
  const amount = (Math.random() * 500 + 10).toFixed(2);
  const category = categories[Math.floor(Math.random() * categories.length)];
  return {
    id: `dummy-${i}`,
    type: isExpense ? 'expense' : 'income',
    amount,
    description: `${isExpense ? 'Payment for' : 'Income from'} ${category.toLowerCase()}`,
    category,
    date: randomDate(),
  };
});

export const financialOverviewData = [
  { name: 'Food', value: 780.50 },
  { name: 'Housing', value: 1200.00 },
  { name: 'Transport', value: 350.25 },
  { name: 'Shopping', value: 420.75 },
  { name: 'Entertainment', value: 230.50 },
  { name: 'Utilities', value: 180.00 },
  { name: 'Healthcare', value: 150.00 },
];

export const COLORS = ['#7c3aed', '#4f46e5', '#0ea5e9', '#10b981', '#f43f5e', '#f59e0b', '#8b5cf6'];
