"use client";
import { events } from "@/lib/data/events";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Galleries() {
  const router = useRouter();
  const eventsData = events;

  const handleClick = (eventId: string) => {
    router.push(`/gallery/${eventId}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-light min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-2 text-center text-primary-blue">
          Event Galleries
        </h1>
        <p className="text-center text-gray-medium text-lg">
          Explore visual memories from Marsabit&apos;s cultural celebrations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event) => {
          const coverImage = event.images_url[0];
          return (
            <div
              key={event.id}
              className="bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl hover:border-primary-green transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleClick(event.id)}
            >
              <Image
                src={coverImage}
                alt={event.title}
                className="w-full h-48 object-cover rounded-t-lg"
                width={400}
                height={250}
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-primary-blue mb-2">
                  {event.title}
                </h2>
                <p className="text-sm text-secondary-green font-medium">
                  📍 {event.venue}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span
                    className={`text-white text-xs font-bold px-3 py-1 rounded-full ${
                      event.category === "Cultural"
                        ? "bg-primary-green"
                        : event.category === "Sports"
                        ? "bg-secondary-blue"
                        : event.category === "Music"
                        ? "bg-accent-red"
                        : event.category === "Art"
                        ? "bg-primary-blue"
                        : "bg-gray-medium"
                    }`}
                  >
                    {event.category}
                  </span>
                  <span className="text-primary-green font-medium text-sm">
                    View Gallery →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
