import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

const GaugeCard = ({
  gauge = {},
  colorInfo = {},
  timeFrameLabel = "",
  highlightNegative = false,
}) => {
  const { name = "Metric", value = 0, max = 100 } = gauge;
  const isNegative = value < 0;
  const absValue = Math.abs(value);
  const chartValue = isNegative ? absValue : value;
  const percentage = Math.min((absValue / max) * 100, 100);

  const gradientStart = isNegative ? "#f43f5e" : colorInfo.gradientStart || "#7c3aed";
  const gradientEnd = isNegative ? "#e11d48" : colorInfo.gradientEnd || "#4f46e5";
  const textColor = isNegative ? "text-rose-600" : colorInfo.text || "text-violet-600";
  const percentColor = isNegative ? "text-rose-400" : "text-slate-400";

  return (
    <div className="bg-white rounded-2xl p-5 -mx-3 lg:-mx-0 md:-mx-5 shadow-sm
      flex flex-col items-center border border-slate-100 hover:shadow-md transition-all">
      <h3 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${textColor}`}>{name}</h3>
      <div className="w-full h-44">
        <ResponsiveContainer>
          <RadialBarChart
            data={[{ ...gauge, value: chartValue }]}
            cx="50%"
            cy="60%"
            startAngle={180}
            endAngle={0}
            innerRadius="65%"
            outerRadius="95%"
          >
            <PolarAngleAxis
              type="number"
              domain={[0, max]}
              angleAxisId={0}
              tick={false}
              allowDataOverflow
            />
            <RadialBar
              minAngle={15}
              background={{ fill: "#f1f5f9" }}
              dataKey="value"
              cornerRadius="50%"
              fill={`url(#${name}Gradient)`}
            />
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill={isNegative ? "#f43f5e" : "#1e293b"}
              fontSize="18"
              fontWeight="700"
            >
              {isNegative ? "-" : ""}${Math.round(absValue).toLocaleString()}
            </text>
            <text
              x="50%"
              y="72%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#94a3b8"
              fontSize="12"
            >
              {Math.round(percentage)}%
            </text>
            <defs>
              <linearGradient id={`${name}Gradient`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={gradientStart} />
                <stop offset="100%" stopColor={gradientEnd} />
              </linearGradient>
            </defs>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center mt-1">
        {isNegative && highlightNegative && (
          <p className="text-xs text-rose-500 font-semibold mb-1">Negative savings</p>
        )}
        <p className="text-xs text-slate-400 font-medium">{timeFrameLabel} period</p>
      </div>
    </div>
  );
};

export default GaugeCard;
