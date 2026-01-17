import { useState } from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { BsEmojiSmile, BsPaperclip } from "react-icons/bs";

const MessageIcon = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can I help you today?" },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, { from: "user", text: message }]);
    setMessage("");

    // 🔮 AI reply placeholder
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks for your message! 😊" },
      ]);
    }, 1000);
  };

   const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Message Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <BiMessageAltDetail size={26} className="text-black" />
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-[480px] bg-white rounded-2xl shadow-xl flex flex-col z-50">
          
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">WeDu</h3>
              <p className="text-xs text-green-600">
                ● We’ll reply as soon as we can
              </p>
            </div>
            <button onClick={() => setOpen(false)}>
              <IoClose size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-100 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[70%] px-3 py-2 rounded-lg text-sm ${
                  msg.from === "user"
                    ? "ml-auto bg-yellow-400 text-black"
                    : "bg-white text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex items-center gap-2">
            <button className="text-gray-500 hover:text-black">
              <BsEmojiSmile />
            </button>

            <button className="text-gray-500 hover:text-black">
              <BsPaperclip />
            </button>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Write your message..."
              className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none"
            />

            <button
              onClick={sendMessage}
              className="bg-yellow-400 px-3 py-2 rounded text-sm font-semibold hover:bg-yellow-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageIcon;





















// import { BiMessageAltDetail } from "react-icons/bi";

// const MessageIcon = () => {
//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <button id="contact" className="w-14 h-14 rounded-full cursor-pointer bg-yellow-400 flex items-center justify-center shadow-lg hover:scale-110 transition">
//         <BiMessageAltDetail size={24} className="text-black" />
//       </button>
//     </div>
//   );
// };

// export default MessageIcon;
