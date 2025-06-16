import ProfileImg from "../../assets/profileimage.png";

const customers = [
  { name: "customer1", img: ProfileImg, active: true,online:true },
  { name: "customer2", img: ProfileImg, active: false,online:true },
  { name: "customer3", img: ProfileImg, active: false,online:true },
];

const ChatCustomer = () => {
  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Seller List */}
          <div className="w-full md:w-1/4 bg-white rounded-md shadow p-4 max-h-[400px] overflow-y-auto">
            <h1 className="font-bold text-xl text-blue-700 mb-4">Customers</h1>
            {customers.map((customer, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 py-2 px-2 rounded-md border-b relative ${
                  customer.active
                    ? "bg-blue-100 border-l-4 border-blue-600 font-semibold text-blue-800"
                    : "text-gray-800"
                }`}
              >
                <div className="relative">
                  <img
                    src={customer.img}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border border-blue-500 shadow-sm object-cover"
                  />
                  {customer.online && (
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <p className="text-sm">{customer.name}</p>
              </div>
            ))}
          </div>

          {/* Chat Area */}
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
              <h2 className="font-semibold text-blue-800">customer1</h2>
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

export default ChatCustomer;
