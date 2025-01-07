import sendRequest from "@/lib/langflow-client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await sendRequest(body.inputValue);

    return NextResponse.json(
      {
        message: "Success",
        data: {
          response,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
