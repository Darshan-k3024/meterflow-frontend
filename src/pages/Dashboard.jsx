import { useEffect, useState } from "react";
import axios from "axios";
import LogsTable from "../components/LogsTable";
import StatCard from "../components/StatCard";
import UsageChart from "../components/UsageChart";
import ApiKeyManager from "../components/ApiKeyManager";
const Dashboard = () => {

  const [logs, setLogs] = useState([]);

  const [stats, setStats] = useState({

    totalRequests: 0,
    totalBill: 0

  });

  useEffect(() => {

    fetchStats();
    fetchLogs();

  }, []);

  const fetchStats = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/billing/usage"
      );

      setStats(res.data);

    }

    catch (err) {

      console.log(err);

    }

  };

  // fetch logs
  const fetchLogs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/logs"
      );

      setLogs(res.data);

    }

    catch (err) {

      console.log(err);

    }

  };
  console.log(logs)


  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-extrabold text-gray-800">

            MeterFlow Dashboard

          </h1>

          <p className="text-gray-500 mt-2">

            Monitor API usage, billing and logs

          </p>

        </div>

      <button
  onClick={() => {
    fetchStats();
    fetchLogs();
  }}
  
  className="bg-black text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-gray-800 transition duration-300 shadow-md"
>
  Refresh Data
</button>

      </div>

      {/* Stats Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <StatCard
          title="Total Requests"
          value={stats.totalRequests}
        />

        <StatCard
          title="Revenue"
          value={`₹${stats.totalBill}`}
        />

        <StatCard
          title="Total Logs"
          value={logs.length}
        />

      </div>

      {/* Logs Table */}

      <div className="mt-8">
<UsageChart logs={logs} />
        <LogsTable logs={logs} />
        <ApiKeyManager />

      </div>

    </div>

  );

};

export default Dashboard;