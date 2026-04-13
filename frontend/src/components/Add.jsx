import React from "react";
import { modalStyles } from "../assets/dummyStyles";
import { ArrowDown, ArrowUp, X } from "lucide-react";

const AddTransactionModal = ({
  showModal,
  setShowModal,
  newTransaction,
  setNewTransaction,
  handleAddTransaction,
  loading = false,
  type = "both",
  title = "Add Transaction",
  buttonText = "Add Transaction",
  categories = [
    "Food", "Housing", "Transport", "Shopping", "Entertainment",
    "Utilities", "Healthcare", "Salary", "Freelance", "Investments", "Bonus", "Other",
  ],
  color = "teal",
}) => {
  if (!showModal) return null;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentDate = today.toISOString().split("T")[0];
  const minDate = `${currentYear}-01-01`;

  const colorClass = modalStyles.colorClasses[color];
  const isIncome = newTransaction.type === "income";

  return (
    <div className={modalStyles.overlay}>
      <div className={modalStyles.modalContainer}>
        {/* Header */}
        <div className={modalStyles.modalHeader}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${isIncome ? "bg-emerald-100" : "bg-rose-100"}`}>
              {isIncome
                ? <ArrowUp size={18} className="text-emerald-600" />
                : <ArrowDown size={18} className="text-rose-600" />
              }
            </div>
            <h3 className={modalStyles.modalTitle}>{title}</h3>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className={modalStyles.closeButton}
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTransaction();
          }}
        >
          <div className={modalStyles.form}>
            <div>
              <label className={modalStyles.label}>Description</label>
              <input
                type="text"
                value={newTransaction.description}
                onChange={(e) =>
                  setNewTransaction((prev) => ({ ...prev, description: e.target.value }))
                }
                className={modalStyles.input(colorClass.ring)}
                placeholder={type === "both" ? "e.g., Salary, Groceries..." : "e.g., Groceries, Rent..."}
                required
              />
            </div>

            <div>
              <label className={modalStyles.label}>Amount ($)</label>
              <input
                type="number"
                value={newTransaction.amount}
                onChange={(e) =>
                  setNewTransaction((prev) => ({ ...prev, amount: e.target.value }))
                }
                className={modalStyles.input(colorClass.ring)}
                placeholder="0.00"
                min="0.01"
                step="0.01"
                required
              />
            </div>

            {type === "both" && (
              <div>
                <label className={modalStyles.label}>Type</label>
                <div className={modalStyles.typeButtonContainer}>
                  <button
                    type="button"
                    className={modalStyles.typeButton(
                      newTransaction.type === "income",
                      "bg-emerald-500",
                    )}
                    onClick={() =>
                      setNewTransaction((prev) => ({ ...prev, type: "income", category: "Salary" }))
                    }
                  >
                    <ArrowUp size={14} className="inline mr-1" />
                    Income
                  </button>
                  <button
                    type="button"
                    className={modalStyles.typeButton(
                      newTransaction.type === "expense",
                      "bg-rose-500",
                    )}
                    onClick={() =>
                      setNewTransaction((prev) => ({ ...prev, type: "expense", category: "Food" }))
                    }
                  >
                    <ArrowDown size={14} className="inline mr-1" />
                    Expense
                  </button>
                </div>
              </div>
            )}

            <div>
              <label className={modalStyles.label}>Category</label>
              <select
                value={newTransaction.category}
                onChange={(e) =>
                  setNewTransaction((prev) => ({ ...prev, category: e.target.value }))
                }
                className={modalStyles.input(colorClass.ring)}
              >
                {categories.map((cat) => (
                  <option value={cat} key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={modalStyles.label}>Date</label>
              <input
                type="date"
                value={newTransaction.date}
                onChange={(e) =>
                  setNewTransaction((prev) => ({ ...prev, date: e.target.value }))
                }
                className={modalStyles.input(colorClass.ring)}
                min={minDate}
                max={currentDate}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`${modalStyles.submitButton(colorClass.button)} ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving...
                </span>
              ) : buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
