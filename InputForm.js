import React, { useState } from "react";

const InputForm = ({ onAddCandidate }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCandidate({ name, age, experience });
    setName("");
    setAge("");
    setExperience("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-800 text-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Candidate</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 bg-blue-700 text-white rounded"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="p-2 bg-blue-700 text-white rounded"
          required
        />
        <input
          type="number"
          placeholder="Experience (Years)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="p-2 bg-blue-700 text-white rounded"
          required
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Add Candidate
        </button>
      </div>
    </form>
  );
};

export default InputForm;
