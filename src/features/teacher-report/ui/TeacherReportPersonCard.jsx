import React from "react";
import { formatDateDMY } from "@/shared/lib/formatDate";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TeacherReportPersonCard = ({ title, data, color }) => {
  return (
    <div className="bg-white p-5 rounded-xl border border-app-border">
      <h3 className="text-sm font-bold mb-3">{title}</h3>

      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: -20, bottom: 5 }}
          >
            <XAxis
              dataKey="date"
              hide={false}
              tick={{ fontSize: 10, fill: "var(--color-text-muted)" }}
              tickMargin={10}
              tickFormatter={(value) => formatDateDMY(value)}
            />
            <YAxis
              domain={[0, 100]}
              hide={false}
              tick={{ fontSize: 10, fill: "var(--color-text-muted)" }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid var(--color-app-border)",
              }}
              labelFormatter={(value) => formatDateDMY(value)}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke={color}
              strokeWidth={3}
              connectNulls={true}
              dot={{ r: 5, fill: color, strokeWidth: 3, stroke: "#fff" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TeacherReportPersonCard;
