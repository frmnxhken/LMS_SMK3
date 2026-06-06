import Button from "@/shared/ui/buttons/Button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Hadir", value: 300, color: "#10b981" }, // Emerald-500
  { name: "Izin", value: 20, color: "#34d399" }, // Emerald-400
  { name: "Sakit", value: 15, color: "#6ee7b7" }, // Emerald-300
  { name: "Alpha", value: 30, color: "#1e293b" }, // Rose-500
];

const HomeAdminAttendanceChart = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-text-heading">Absensi Hari Ini</h3>
        <Button variant="outline">Lihat Semua</Button>
      </div>
      <div className="bg-white p-6 rounded-xl border border-app-border">
        <div className="h-80 w-full flex items-center justify-center relative mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={120}
                paddingAngle={3}
                dataKey="value"
                label={({ name, value, cx, cy, midAngle, outerRadius }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = outerRadius + 20;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      fill="1e293b"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                      fontSize="13"
                      fontWeight="600"
                    >
                      {`${name}: ${value}`}
                    </text>
                  );
                }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                wrapperStyle={{ zIndex: 50 }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute flex flex-col items-center">
            <span className="text-3xl font-bold text-slate-800">85%</span>
            <span className="text-[10px] text-slate-400 uppercase font-bold">
              Hadir
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-2">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-xs font-medium text-slate-600">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAdminAttendanceChart;
