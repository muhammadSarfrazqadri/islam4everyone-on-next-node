"use client";

interface Props {
  onClick: () => void;
}

export default function ShowMoreButton({ onClick }: Props) {
  return (
    <div className="text-center mt-6">
      <button
        onClick={onClick}
        className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow hover:opacity-90"
      >
        Show More
      </button>
    </div>
  );
}
