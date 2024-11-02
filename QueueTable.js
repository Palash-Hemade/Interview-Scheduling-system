import React from "react";

const QueueTable = ({ title, queue }) => (
  <div className="p-4 bg-blue-900 text-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
    <table className="table-auto w-full text-center">
      <thead className="bg-blue-800">
        <tr>
          <th className="p-2">Index</th>
          <th className="p-2">Name</th>
          <th className="p-2">Age</th>
          <th className="p-2">Experience</th>
        </tr>
      </thead>
      <tbody className="bg-blue-700">
        {queue.map((candidate, index) => (
          <tr key={index} className="hover:bg-blue-600">
            <td className="p-2">{index + 1}</td>
            <td className="p-2">{candidate.name}</td>
            <td className="p-2">{candidate.age}</td>
            <td className="p-2">{candidate.experience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default QueueTable;
