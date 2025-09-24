// src/app/dashboard/assistant/page.tsx
"use client";
import { useState } from "react";

export default function AssistantPage() {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    // TODO: connect to AI API
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: "This is a dummy AI response." }]);
    }, 500);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">AI Farm Assistant</h2>
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow h-96 flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg max-w-xs ${
                m.role === "user" ? "bg-green-200 self-end" : "bg-gray-200 self-start"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSend} className="mt-2 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded-lg p-2"
            placeholder="Ask about your farm..."
          />
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg">Send</button>
        </form>
      </div>
    </div>
  );
}
