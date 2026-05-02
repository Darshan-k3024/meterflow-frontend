// LogsTable.jsx

const LogsTable = ({ logs }) => {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-lg mt-8 overflow-x-auto">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold text-gray-800">
          API Logs
        </h2>

        <span className="text-sm text-gray-500">
          Total Logs: {logs.length}
        </span>

      </div>

      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-gray-100 text-gray-700">

            <th className="text-left p-4 rounded-l-xl">
              Endpoint
            </th>

            <th className="text-left p-4">
              Method
            </th>

            <th className="text-left p-4 rounded-r-xl">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {logs.map((log) => (

            <tr
              key={log._id}
              className="border-b hover:bg-gray-50 transition duration-200"
            >

              <td className="p-4 font-medium text-gray-700">
                {log.endpoint}
              </td>

              <td className="p-4">

                <span className={`
                  px-3 py-1 rounded-full text-sm font-semibold
                  ${log.method === "GET" ? "bg-green-100 text-green-700" : ""}
                  ${log.method === "POST" ? "bg-blue-100 text-blue-700" : ""}
                  ${log.method === "PUT" ? "bg-yellow-100 text-yellow-700" : ""}
                  ${log.method === "DELETE" ? "bg-red-100 text-red-700" : ""}
                `}>

                  {log.method}

                </span>

              </td>

              <td className="p-4">

                <span className={`
                  px-3 py-1 rounded-full text-sm font-bold
                  ${log.statusCode >= 200 && log.statusCode < 300
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"}
                `}>

                  {log.statusCode}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default LogsTable;