import { NextResponse } from "next/server";
import axios from "axios";

const API_URL = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base";
const HF_API_KEY = process.env.NEXT_PUBLIC_HF_TOKEN as string;

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const file = formData.get("image") as Blob | null;

        if (!file) {
            return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const response = await axios.post(API_URL, buffer, {
            headers: {
                Authorization: `Bearer ${HF_API_KEY}`,
                "Content-Type": "application/octet-stream",
            },
        });

        return NextResponse.json({ caption: response.data[0]?.generated_text || "No caption generated" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to generate caption" }, { status: 500 });
    }
}
