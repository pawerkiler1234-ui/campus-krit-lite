import { useState } from "react";

const ComplaintForm = ({ onSubmit }) => {
  const [urgency, setUrgency] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 SIMULATED AI + LOGIC
    const issue = "Electrical issue – broken light";
    const priorityMap = { Low: 3, Medium: 6, High: 9 };

    const result = {
      id: "CK-" + Math.floor(Math.random() * 10000),
      issue,
      priority: priorityMap[urgency],
      department: "Electrical Maintenance",
    };

    onSubmit(result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-1">Campus-Krit</h1>
        <p className="text-sm text-gray-500 mb-6">
          Report campus infrastructure issues instantly
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="file" className="w-full border rounded-lg p-2" />

          <input
            type="text"
            placeholder="Block / Room"
            className="w-full border rounded-lg p-2"
          />

          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <textarea
            placeholder="Describe the issue"
            className="w-full border rounded-lg p-2"
            rows="3"
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
