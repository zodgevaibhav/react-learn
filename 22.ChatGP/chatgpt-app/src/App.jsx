import { useState, useRef, useEffect } from "react";
import './App.css';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ChatGPTReplica() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Show temporary "Thinking..." message
    const aiResponse = { role: "assistant", content: "Thinking..." };
    setMessages((prev) => [...prev, aiResponse]);

    try {
      const response = await fetch("http://192.168.1.5:5400/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();

      // Update the "Thinking..." message with API response
      setMessages((prev) =>
        prev.map((msg) =>
          msg === aiResponse
            ? { ...msg, content: data.result || "No response" }
            : msg
        )
      );
    } catch (error) {
      console.error("Error calling API:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg === aiResponse ? { ...msg, content: "Failed to get response" } : msg
        )
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleNewChat = async () => {
    await fetch("http://192.168.1.5:5400/clear", {
      method: "GET"
    });
    setMessages([])
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">
        <h1 className="text-2xl font-bold p-4">ChatGPT</h1>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-700" onClick={()=>handleNewChat()}>
            New Chat
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white shadow p-4 border-b">
          <h2 className="text-lg font-semibold">Chat</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} `}
            >
              <div
                className={`w-full px-4 py-2 rounded-lg break-words ${
                  msg.role === "user"
                    ? "bg-gray-300 text-black ml-100"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {msg.role === "assistant" ? (
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={oneDark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\n$/, "")}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input Box */}
        <div className="p-4 bg-white border-t flex items-center space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={1}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
