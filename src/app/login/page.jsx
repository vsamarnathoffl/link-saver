"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/bookmarks");
    }
  }, [router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const demoEmail = "demo@test.com";
    const demoPassword = "password123";

    if (email === demoEmail && password === demoPassword) {
      localStorage.setItem("token", "demo-token");
      toast.success("Successfully Logged In!");
      router.push("/bookmarks");
    } else {
      toast.error("Invaild username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded shadow-md w-full max-w-sm text-white"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-400">Sign In</h1>
        {error && <div className="text-red-400 mb-3 text-center">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 bg-gray-800 border border-gray-700 rounded text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
