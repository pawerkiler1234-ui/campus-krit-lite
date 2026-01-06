const ResultCard = ({ result, onBack }) => {
  if (!result) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-green-600">
          Complaint Submitted Successfully
        </h2>

        <div className="space-y-2 text-sm">
          <p><b>Issue ID:</b> {result.id}</p>
          <p><b>Detected Issue:</b> {result.issue}</p>
          <p><b>Priority Score:</b> {result.priority}/10</p>
          <p><b>Assigned Department:</b> {result.department}</p>
        </div>

        <button
          onClick={onBack}
          className="mt-6 w-full bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
        >
          Report Another Issue
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
