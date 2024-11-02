import React, { useState } from "react";
import InputForm from "./InputForm";
import QueueTable from "./QueueTable";
import Panel from "./Panel";

const QueueManagement = () => {
  const [linearQueue, setLinearQueue] = useState([]);
  const [priorityQueue, setPriorityQueue] = useState([]);
  const [circularQueue, setCircularQueue] = useState(Array(5).fill([]));
  const maxLinearQueueSize = 50;
  const maxPriorityQueueSize = 50;
  const maxPanelQueueSize = 5;

  const moveAllToPriorityQueue = () => {
    const availableSpace = maxPriorityQueueSize - priorityQueue.length;

    // Alert if the priority queue is already full
    if (availableSpace <= 0) {
      alert("Priority queue is full! Cannot add more candidates.");
      return;
    }

    const candidatesToMove = linearQueue.slice(0, availableSpace);

    const updatedPriorityQueue = [...priorityQueue, ...candidatesToMove].sort((a, b) => b.experience - a.experience);
    setPriorityQueue(updatedPriorityQueue);

    // Remove moved candidates from the linear queue
    setLinearQueue(linearQueue.slice(candidatesToMove.length));
  };

  const assignToCircularQueue = (panelIndex) => {
    if (priorityQueue.length === 0) return;
    if (circularQueue[panelIndex].length >= maxPanelQueueSize) {
      alert("Panel queue is full!");
      return;
    }

    const candidate = priorityQueue.shift();
    if (window.confirm("Verify documents for " + candidate.name + "?")) {
      const updatedQueue = [...circularQueue];
      updatedQueue[panelIndex] = [...updatedQueue[panelIndex], candidate];
      setCircularQueue(updatedQueue);
    } else {
      setPriorityQueue([...priorityQueue, candidate]);
    }
  };

  const dequeueFromPanel = (panelIndex) => {
    if (circularQueue[panelIndex].length === 0) return;
    const updatedQueue = [...circularQueue];
    const dequeuedCandidate = updatedQueue[panelIndex].shift();
    setCircularQueue(updatedQueue);
    alert(`${dequeuedCandidate.name} is dequeued from the queue and has gone for the interview.`);
  };

  return (
    <div className="container mx-auto p-6 bg-black min-h-screen text-white">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-400">Queue Management System</h1>
      </div>
      <div className="mb-6">
        <InputForm onAddCandidate={(candidate) => setLinearQueue([...linearQueue, candidate])} />
        <button 
          onClick={moveAllToPriorityQueue} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
        >
          Add All to Priority Queue
        </button>
      </div>
      <QueueTable title="Linear Queue" queue={linearQueue} />
      <QueueTable title="Priority Queue" queue={priorityQueue} />
      <div className="flex justify-around mt-8 space-x-4">
        {[...Array(5)].map((_, index) => (
          <Panel
            key={index}
            panelIndex={index + 1} // 1-based index display
            queue={circularQueue[index] || []}
            assignToPanel={() => assignToCircularQueue(index)}
            onDequeue={() => dequeueFromPanel(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QueueManagement;
