"use client";

import React, { useState } from "react";

export default function Home() {
    const [image, setImage] = useState<File | null>(null);
    const [caption, setCaption] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const generateCaption = async () => {
        if (!image) return;
        setLoading(true);
        setCaption(null);

        const formData = new FormData();
        formData.append("image", image);

        try {
            const response = await fetch("/api/caption", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            setCaption(data.caption);
        } catch (error) {
            setCaption("Error generating caption.");
        }

        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <h1 className="text-2xl font-bold">Image Caption Generator</h1>

            <input type="file" accept="image/*" onChange={handleImageChange} />

            {image && <img src={URL.createObjectURL(image)} alt="Preview" className="w-64 h-auto mt-4" />}

            <button
                onClick={generateCaption}
                disabled={!image || loading}
                className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
            >
                {loading ? "Generating..." : "Generate Caption"}
            </button>

            {caption && <p className="mt-4 font-semibold">{caption}</p>}
        </div>
    );
}
