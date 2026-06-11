import Button from "@/shared/ui/buttons/Button";
import { useNavigate } from "react-router";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const HomeAdminAttendanceChart = ({ attendance = [] }) => {
  const navigate = useNavigate();
  const total_data =
    attendance && Object.values(attendance).reduce((a, b) => a + b);

  const data = [
    { name: "Hadir", value: attendance?.present, color: "#10b981" },
    { name: "Izin", value: attendance?.permission, color: "#34d399" },
    { name: "Sakit", value: attendance?.sick, color: "#6ee7b7" },
    {
      name: "Belum hadir",
      value: attendance?.not_checked_in,
      color: "#1e293b",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-text-heading">Absensi Hari Ini</h3>
        <Button onClick={() => navigate("attendance")} variant="outline">
          Lihat Semua
        </Button>
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
            <span className="text-3xl font-bold text-slate-800">
              {(attendance?.present && attendance?.present / total_data) * 100}%
            </span>
            <span className="text-[10px] text-slate-400 uppercase font-bold">
              Hadir
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-2">
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
