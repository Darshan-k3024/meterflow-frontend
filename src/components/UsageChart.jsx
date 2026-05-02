import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const UsageChart = ({ logs }) => {

  const groupedData = {};

  logs.forEach((log) => {

    const date = new Date(
      log.createdAt
    ).toLocaleDateString();

    if (!groupedData[date]) {

      groupedData[date] = 0;

    }

    groupedData[date]++;

  });

  const chartData = Object.keys(groupedData)
    .map((date) => ({

      date,

      requests: groupedData[date]

    }));

    logs.forEach((log) => {

  if (!log.createdAt) return;

  const date = new Date(
    log.createdAt
  ).toLocaleDateString();

  if (!groupedData[date]) {

    groupedData[date] = 0;

  }

  groupedData[date]++;

});
  return (

    <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">

      <h2 className="text-2xl font-bold mb-6">

        Daily API Requests

      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="requests"
            fill="#111827"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

};

export default UsageChart;