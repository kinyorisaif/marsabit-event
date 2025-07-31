// app/events/[id]/page.tsx

import { events } from "@/lib/data/events";
import Image from "next/image";
import { notFound } from "next/navigation"; // Optional: Better than manual error message

// Use Next.js App Router typing pattern
type Props = {
  params: {
    id: string;
  };
};

export default function EventPage({ params }: Props) {
  const event = events.find((e) => e.id === params.id);

  if (!event) {
    // You can return custom 404 UI here or redirect
    notFound(); // cleaner: shows Next.js 404 page
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Image
        src={event.images_url[0] || "https://via.placeholder.com/800x400"}
        alt={event.title}
        width={800}
        height={400}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        {event.venue} - {event.address}
      </p>
      <p className="text-gray-700 mb-6">{event.description}</p>

      <div className="mb-4">
        <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
          {event.category}
        </span>
      </div>

      <p className="text-gray-500 text-sm">
        📅 {new Date(event.start_date).toLocaleDateString()} -{" "}
        {new Date(event.end_date).toLocaleDateString()}
      </p>

      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Organizer</h3>
        <p className="text-gray-700">{event.organizer_name}</p>
        <p className="text-gray-700 text-sm">{event.organizer_email}</p>
        <p className="text-gray-700 text-sm">{event.organizer_phone}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {event.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
