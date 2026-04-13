import React from "react";

const FinancialCard = ({
  icon,
  label,
  value,
  additionalContent,
  borderColor = "",
  bgColor = "bg-white",
}) => (
  <div
    className={`${bgColor} rounded-2xl p-5 lg:-mx-2 lg:p-4 shadow-sm
     border hover:shadow-md border-slate-100 transition-all duration-200 hover:-translate-y-0.5 ${borderColor}`}
  >
    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide flex items-center gap-2">
      {icon}
      {label}
    </div>
    <p className="text-2xl font-bold text-slate-800 mt-2">{value}</p>
    {additionalContent}
  </div>
);

export default FinancialCard;
