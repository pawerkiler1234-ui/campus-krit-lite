import { useState } from "react";

const ComplaintForm = ({ onSubmit }) => {
  const [urgency, setUrgency] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = {
      id: "CK-" + Math.floor(Math.random() * 10000),
      issue: "Electrical issue – broken light",
      priority: urgency === "High" ? 9 : urgency === "Medium" ? 6 : 3,
      department: "Electrical Maintenance",
    };

    onSubmit(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Campus-Krit
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Report campus infrastructure issues instantly
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            className="w-full border border-gray-300 rounded-lg p-2 text-sm"
          />

          <input
            type="text"
            placeholder="Block / Room"
            className="w-full border border-gray-300 rounded-lg p-2"
          />

          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <textarea
            placeholder="Describe the issue"
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-2"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
