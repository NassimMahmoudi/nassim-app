import { NextRequest, NextResponse } from "next/server";
import { app } from "@/lib/langgraph";
import { HumanMessage } from "@langchain/core/messages";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    const result = await app.invoke({
      messages: [new HumanMessage(lastMessage.content)],
    });

    const aiMessage = result.messages[result.messages.length - 1];

    return NextResponse.json({
      content: aiMessage.content,
    });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
