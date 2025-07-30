"use client";
import { useState } from "react";
import { events as initialEvents } from "@/lib/data/events";
import { Pencil, Trash2 } from "lucide-react";

export default function ManageEventsPage() {
  const [events, setEvents] = useState(initialEvents);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  const handleEdit = (id: string) => {
    alert(`Edit functionality for event ID: ${id} goes here.`);
    // You can redirect to an edit page or open a modal here
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Events</h1>
      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Start Date</th>
              <th className="p-3 border">End Date</th>
              <th className="p-3 border">Venue</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="p-3 border">{event.title}</td>
                <td className="p-3 border">{event.category}</td>
                <td className="p-3 border">
                  {new Date(event.start_date).toLocaleDateString()}
                </td>
                <td className="p-3 border">
                  {new Date(event.end_date).toLocaleDateString()}
                </td>
                <td className="p-3 border">{event.venue}</td>
                <td className="p-3 border text-center flex gap-2">
                  <button
                    onClick={() => handleEdit(event.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 inline-flex items-center"
                  >
                    <Pencil size={16} className="mr-1" /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 inline-flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  No events available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
