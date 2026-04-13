import React from "react";

const TimeFrameSelector = ({
  timeFrame,
  setTimeFrame,
  options,
  color = "violet",
  style = "default",
}) => {
  const colorClass = {
    violet: "bg-violet-600",
    teal: "bg-violet-600",
    orange: "bg-rose-500",
    cyan: "bg-sky-500",
    green: "bg-emerald-500",
  }[color] || "bg-violet-600";

  const styleClass = {
    default: "flex gap-1 bg-slate-100 p-1 -mx-11 lg:-mx-0 md:-mx-0 rounded-xl border border-slate-200",
    minimal: "flex gap-1",
  }[style];

  return (
    <div className={styleClass}>
      {options.map((frame) => (
        <button
          key={frame}
          onClick={() => setTimeFrame(frame)}
          className={`px-3 py-1.5 text-sm rounded-lg transition-all font-medium ${
            timeFrame === frame
              ? `${colorClass} text-white shadow-sm`
              : "text-slate-500 hover:text-slate-800 hover:bg-white"
          }`}
        >
          {frame.charAt(0).toUpperCase() + frame.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TimeFrameSelector;
