import { NextResponse } from "next/server";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log("API_BASE_URL:", API_BASE_URL);

export async function GET() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/products`);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Failed to fetch submenu",
            },
            { status: 500 }
        );
    }
}
