import React, { useState } from 'react';
import eventsData from '../data/events';

const Events = () => {
  const [events] = useState(eventsData);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">🎉 Upcoming Club Events</h1>

      <div className="space-y-6">
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mt-3">
                <span>📅 {event.date}</span>
                <span>🏷️ {event.club}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No events scheduled at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
