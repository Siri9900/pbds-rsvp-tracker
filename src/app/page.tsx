import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto mt-20 text-center">
      <h1 className="text-6xl font-bold mb-4 text-white-900">
        Welcome to PBDS
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Your platform for organizing events and tracking RSVPs with clarity and ease.
      </p>
      <div className="flex justify-center space-x-6">
        <Link
          href="/About"
          className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
        About Us
        </Link>
        <Link
          href="/events"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View Events
        </Link>
        <Link
          href="/rsvp"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Track RSVPs
        </Link>
      </div>
    </div>
  );
}
