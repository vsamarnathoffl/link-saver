import ReactMarkdown from "react-markdown";

export default function BookmarkCard({ bookmark, onDelete }) {
  return (
    <div className="w-full border border-gray-700 p-4 rounded bg-gray-800 text-white shadow-sm transition-all hover:shadow-md animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <div className="overflow-hidden">
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-400 hover:underline break-words break-all"
          >
            {bookmark.title}
          </a>
          <p className="text-gray-400 text-sm mt-1 break-words break-all">
            {bookmark.url}
          </p>
        </div>
        <button
          onClick={() => onDelete(bookmark.id)}
          className="text-red-500 hover:underline text-sm ml-2 cursor-pointer"
        >
          Delete
        </button>
      </div>
      <div className="prose prose-invert max-w-none text-gray-300 break-words">
        <ReactMarkdown>{bookmark.summary}</ReactMarkdown>
      </div>
    </div>
  );
}
