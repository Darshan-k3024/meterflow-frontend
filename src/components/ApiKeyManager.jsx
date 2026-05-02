
import { useEffect, useState } from "react";
import axios from "axios";

const ApiKeyManager = () => {

  const [keys, setKeys] = useState([]);

  useEffect(() => {
    fetchKeys();
  }, []);

  const fetchKeys = async () => {

    try {

      const res = await axios.get(
        "https://meterflow-backend-zdoe.onrender.com/api/key/keys"
      );

      setKeys(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const revokeKey = async (id) => {

    try {

      await axios.put(
        "https://meterflow-backend-zdoe.onrender.com/api/key/revoke",
        {
          keyId: id
        }
      );

      fetchKeys();

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">

      <h2 className="text-2xl font-bold mb-4">
        API Keys
      </h2>

      {keys.map((key) => (

        <div
          key={key._id}
          className="flex justify-between items-center border-b py-3"
        >

          <div>

            <p className="font-semibold">
              {key.key}
            </p>

            <p className="text-sm text-gray-500">
              {key.status}
            </p>

          </div>

          <button
            onClick={() => revokeKey(key._id)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Revoke
          </button>

        </div>

      ))}

    </div>

  );

};

export default ApiKeyManager;