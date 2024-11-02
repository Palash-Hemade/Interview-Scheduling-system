import React from "react";

const Panel = ({ panelIndex, queue, assignToPanel, onDequeue }) => (
  <div className="panel p-4 bg-blue-800 text-white rounded-lg shadow-md">
    <h3 className="text-xl font-bold text-blue-300">Panel {panelIndex}</h3>
    {queue.length > 0 ? (
      <div>
        {queue.map((candidate, idx) => (
          <div key={idx} className="mb-2 text-blue-200">
            <p>Name: {candidate.name}</p>
            <p>Age: {candidate.age}</p>
            <p>Experience: {candidate.experience}</p>
            <p>Position in Queue: {idx + 1}</p>
          </div>
        ))}
        <button onClick={onDequeue} className="btn btn-danger bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-2">
          Dequeue
        </button>
      </div>
    ) : (
      <p className="text-gray-400">No candidates assigned.</p>
    )}
    {queue.length < 5 && (
      <button onClick={assignToPanel} className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-2">
        Assign Candidate
      </button>
    )}
  </div>
);

export default Panel;
