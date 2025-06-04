import ProfileImg from "../../assets/profileimage.png";

const products = Array(7).fill({
  name: "Long t-shirt",
  brand: "Easy",
  quantity: 2,
  status: "Pending",
  img: ProfileImg,
});

const OrderDetails = () => {
  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <h1 className="font-bold text-xl text-blue-700">Order Details</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
          {/* Order Summary */}
          <div className="bg-blue-100 p-4 rounded-lg">
            <ul className="text-sm text-gray-800 space-y-2">
              <li>Order ID: <strong>#4545545</strong> | Date: 3 Dec 2024</li>
              <li><strong>Deliver To:</strong> Shivam</li>
              <li>2504 Ilvins Avenue, Egg Harbor Township, NJ 08234, USA</li>
              <li><strong>Payment Status:</strong> <span className="text-green-600 font-medium">Paid</span></li>
              <li><strong>Total Price:</strong> <span className="text-green-600 font-medium">$5343</span></li>
            </ul>

            <div className="mt-4 max-h-60 overflow-y-auto space-y-2 pr-2">
              {products.slice(0, 5).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-blue-300 p-2 rounded-lg hover:shadow transition"
                >
                  <img src={item.img} className="w-10 h-10 rounded border object-cover" />
                  <div className="ml-3">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs">
                      Brand: {item.brand} | Qty: {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seller Orders */}
          <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-blue-700 mb-4">Seller Orders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[420px] overflow-y-auto pr-2">
              {products.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-blue-100 p-3 rounded-lg hover:shadow-md transition space-y-2"
                >
                  <p className="text-sm font-medium text-gray-700">
                    <strong>Seller {idx + 1} Order:</strong> {item.status}
                  </p>
                  <div className="flex items-center gap-3">
                    <img src={item.img} className="w-10 h-10 border border-blue-600 rounded object-cover" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-gray-600">
                        Brand: {item.brand} | Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
