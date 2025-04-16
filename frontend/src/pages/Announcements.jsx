import React, { useState } from 'react';
import announcementsData from '../data/announcements';

const Announcements = () => {
  const [announcements] = useState(announcementsData);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">📢 All Club Announcements</h1>

      <div className="space-y-6">
        {announcements.length > 0 ? (
          announcements.map((a) => (
            <div
              key={a.id}
              className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">{a.title}</h3>
              <p className="text-gray-600 mt-2">{a.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mt-3">
                <span>📅 {a.date}</span>
                <span>🏷️ {a.club}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No announcements available.</p>
        )}
      </div>
    </div>
  );
};

export default Announcements;
