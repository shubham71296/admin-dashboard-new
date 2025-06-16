import ProfileImg from "../../assets/profileimage.png";


const ChatSupport = () => {
  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-3/4 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-2 relative">
              <div className="relative">
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border border-blue-500 shadow-sm object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <h2 className="font-semibold text-blue-800">Support</h2>
            </div>

            {/* Chat Messages */}
            <div className="bg-blue-50 p-4 rounded-md shadow-inner h-[300px] overflow-y-auto space-y-4">
              {/* Incoming Message */}
              <div className="flex items-start gap-2">
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="w-6 h-6 rounded-full border border-blue-500 object-cover"
                />
                <div className="bg-white p-2 rounded-md shadow text-sm">
                  Hello, how are you?
                </div>
              </div>

              {/* Outgoing Message */}
              <div className="flex items-start justify-end gap-2">
                <div className="bg-blue-600 text-white p-2 rounded-md shadow text-sm max-w-xs">
                  Hello, I am fine.
                </div>
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="w-6 h-6 rounded-full border border-blue-500 object-cover"
                />
              </div>
            </div>

            {/* Input Box */}
            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full">
              <input
                type="text"
                className="w-full sm:flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message..."
              />
              <button className="w-full sm:w-auto bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
