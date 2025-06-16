import React from "react";
import { FixedSizeList as List } from "react-window";
import type { ListChildComponentProps } from "react-window";

interface PaymentsProps {
  id: number;
  amount: number;
  status: "pending" | "approved" | "rejected";
  date: string;
}

const paymentsData: PaymentsProps[] = [
  { id: 1, amount: 5000, status: "pending", date: "2025-06-01" },
  { id: 2, amount: 1200, status: "approved", date: "2025-05-30" },
  { id: 3, amount: 3400, status: "rejected", date: "2025-05-29" },
  { id: 4, amount: 7600, status: "pending", date: "2025-05-28" },
  { id: 5, amount: 1100, status: "approved", date: "2025-05-25" },
  { id: 6, amount: 5000, status: "pending", date: "2025-06-01" },
  { id: 7, amount: 1200, status: "approved", date: "2025-05-30" },
  { id: 8, amount: 3400, status: "rejected", date: "2025-05-29" },
  { id: 9, amount: 7600, status: "pending", date: "2025-05-28" },
  { id: 10, amount: 1100, status: "approved", date: "2025-05-25" },
  { id: 11, amount: 5000, status: "pending", date: "2025-06-01" },
  { id: 12, amount: 1200, status: "approved", date: "2025-05-30" },
  { id: 13, amount: 3400, status: "rejected", date: "2025-05-29" },
  { id: 14, amount: 7600, status: "pending", date: "2025-05-28" },
  { id: 15, amount: 1100, status: "approved", date: "2025-05-25" },
];

const Row =
  (data: PaymentsProps[]) =>
  ({ index, style }: ListChildComponentProps) => {
    const item = data[index];
    return (
      <div
        style={style}
        className="flex px-4 py-2 border-b bg-white hover:bg-blue-50 text-sm items-center min-w-[640px]"
      >
        <div className="w-[20%]">{item.id}</div>
        <div className="w-[20%]">₹{item.amount}</div>
        <div className="w-[20%] capitalize text-blue-700">{item.status}</div>
        <div className="w-[20%]">{item.date}</div>
      </div>
    );
  };

const Payments = () => {
  const pendingPayments = paymentsData.filter((p) => p.status === "pending");
  const approvedPayments = paymentsData.filter((p) => p.status === "approved");

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pending Section */}
        <div className="bg-blue-100 p-4 rounded-md">
          <div className="mb-4">
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Send Request
            </label>

            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full">
              <input
                type="text"
                className="w-full sm:flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message..."
              />
              <button className="w-full sm:w-auto bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
                Send
              </button>
            </div>
          </div>

          <h2 className="font-bold text-xl text-blue-700">Pending Requests</h2>

          <div className="mt-4 rounded-md overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="bg-blue-300 flex text-sm font-bold text-gray-800 px-2 py-2">
                <div className="w-[20%]">No</div>
                <div className="w-[20%]">Amount</div>
                <div className="w-[20%]">Status</div>
                <div className="w-[20%]">Date</div>
              </div>

              <List
                height={300}
                itemCount={pendingPayments.length}
                itemSize={50}
                width="100%"
              >
                {Row(pendingPayments)}
              </List>
            </div>
          </div>
        </div>

        {/* Approved Section */}
        <div className="bg-blue-100 p-4 rounded-md">
          <h2 className="font-bold text-xl text-blue-700">
            Successful Withdraws
          </h2>

          <div className="mt-4 rounded-md overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="bg-blue-300 flex text-sm font-bold text-gray-800 px-2 py-2">
                <div className="w-[20%]">No</div>
                <div className="w-[20%]">Amount</div>
                <div className="w-[20%]">Status</div>
                <div className="w-[20%]">Date</div>
              </div>

              <List
                height={300}
                itemCount={approvedPayments.length}
                itemSize={50}
                width="100%"
              >
                {Row(approvedPayments)}
              </List>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
