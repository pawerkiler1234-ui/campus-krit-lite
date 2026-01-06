import React from "react";

const ComplaintForm = () => {
  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h2>Report Campus Issue</h2>

      <form>
        <div>
          <label>Issue Photo</label><br />
          <input type="file" />
        </div>

        <div>
          <label>Location</label><br />
          <input type="text" placeholder="Block / Room" />
        </div>

        <div>
          <label>Urgency</label><br />
          <select>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div>
          <label>Description</label><br />
          <textarea rows="3" />
        </div>

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;