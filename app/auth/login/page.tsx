"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "adminpass") {
      setError("");
      localStorage.setItem("isLoggedIn", "true");
      router.push("/dashboard/manage/events"); // redirect to dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary-blue">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl border-t-4 border-primary-green">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary-blue mb-2">
            Marsabit Cultural Events
          </h1>
          <h2 className="text-xl font-semibold text-gray-dark">
            Administrator Login
          </h2>
        </div>

        {error && (
          <div className="bg-red-50 border border-accent-red text-accent-red text-sm p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-dark mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-dark mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-green text-white py-3 rounded-lg font-semibold hover:bg-secondary-green transition-colors duration-200 shadow-lg"
          >
            Sign In to Dashboard
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-medium">
            Demo credentials: admin@gmail.com / adminpass
          </p>
        </div>
      </div>
    </div>
  );
}
