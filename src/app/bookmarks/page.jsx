"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FiLoader, FiLogOut } from "react-icons/fi"; 

import { isValidUrl, getSummary } from "../../utils/utils.js";
import BookmarkCard from "../../components/bookmarkCard/bookmarkCard.jsx";

export default function Bookmarks() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      const saved = localStorage.getItem("bookmarks");
      if (saved) setBookmarks(JSON.parse(saved));
    }
  }, [router]);

  const saveLink = async () => {
    if (!isValidUrl(url)) {
      toast.error("Invalid URL");
      return;
    }

    const alreadyExists = bookmarks.some((b) => b.url === url);
    if (alreadyExists) {
      toast.error("This URL is already bookmarked.");
      return;
    }

    setLoading(true);

    try {
      const { title, summary } = await getSummary(url);

      const newBookmark = {
        id: Date.now(),
        url,
        title,
        summary,
        createdAt: new Date().toISOString(),
      };

      const updated = [newBookmark, ...bookmarks];
      setBookmarks(updated);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setUrl("");
      toast.success("Bookmark saved!");
    } catch (error) {
      toast.error(error.message || "Failed to fetch summary.");
    } finally {
      setLoading(false);
    }
  };

  const deleteBookmark = (id) => {
    const updated = bookmarks.filter((b) => b.id !== id);
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
    toast.error("Bookmark deleted.");
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-400">AI Bookmark Manager</h1>
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition cursor-pointer"
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a URL to summarize"
          className="flex-1 bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:ring focus:outline-none"
          disabled={loading}
        />
        <button
          onClick={saveLink}
          disabled={loading || !isValidUrl(url)}
          className={`flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition cursor-pointer ${
            loading || !isValidUrl(url) ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin" /> Saving...
            </>
          ) : (
            "Summarize & Save"
          )}
        </button>
      </div>

      <div className="w-full space-y-4">
        {bookmarks.length > 0 ? (
          bookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark.id}
              bookmark={bookmark}
              onDelete={deleteBookmark}
            />
          ))
        ) : (
          <p className="text-gray-400 text-center mt-10">No bookmarks saved yet.</p>
        )}
      </div>
    </div>
  );
}
