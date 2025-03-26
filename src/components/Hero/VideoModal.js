import React from "react";

export default function VideoModal({ selectedVideo, setSelectedVideo }) {
    if (!selectedVideo) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="relative w-full max-w-3xl">
                <button
                    className="absolute -top-12 right-[-20px] translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-lg font-bold hover:bg-red-900 transition"
                    onClick={() => setSelectedVideo(null)}
                >
                    ✕
                </button>

                <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&controls=1`}
                    title="Video en reproducción"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="rounded-lg shadow-xl"
                ></iframe>
            </div>
        </div>
    );
}
