// StatCard.jsx

const StatCard = ({
  title,
  value
}) => {

  return (

    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">

      <h2 className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
        {title}
      </h2>

      <p className="text-4xl font-bold mt-4 text-gray-800">
        {value}
      </p>

    </div>

  );

};

export default StatCard;