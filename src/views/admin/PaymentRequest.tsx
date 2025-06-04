import React from "react";
import { FixedSizeList as List } from "react-window";

interface WithdrawalRequest {
  id: number;
  amount: number;
  status: "pending" | "approved" | "rejected";
  date: string;
}

const withdrawalRequests: WithdrawalRequest[] = [
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

const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
  const item = withdrawalRequests[index];

  return (
    <div
      style={style}
      className="flex px-4 py-2 border-b bg-white hover:bg-blue-50 text-sm items-center min-w-[640px]"
    >
      <div className="w-[20%]">{item.id}</div>
      <div className="w-[20%]">₹{item.amount}</div>
      <div className="w-[20%] capitalize"><span className="lg:ml-1 md:ml-1">{item.status}</span></div>
      <div className="w-[20%]"><span className="lg:ml-2 md:ml-2">{item.date}</span></div>
      <div className="w-[20%]">
        <button className="lg:ml-4 md:ml-4 text-white hover:bg-blue-700 rounded-md bg-blue-400 p-1 font-medium">
          Confirm
        </button>
      </div>
    </div>
  );
};

const PaymentRequest = () => {
  return (
    <div className="p-2">
      <div className="bg-blue-100 p-4 rounded-md">
        <span className="font-bold text-xl text-blue-700">Withdrawal Request</span>

        <div className="mt-4 rounded-md overflow-x-auto">
          {/* Table Wrapper with min-width to enable horizontal scroll */}
          <div className="min-w-[640px]">
            {/* Header */}
            <div className="bg-blue-300 flex text-sm font-bold text-gray-800 px-2 py-2">
              <div className="w-[20%]">No</div>
              <div className="w-[20%]">Amount</div>
              <div className="w-[20%]">Status</div>
              <div className="w-[20%]">Date</div>
              <div className="w-[20%]">Action</div>
            </div>

            {/* Virtualized List */}
            <List
              height={300}
              itemCount={withdrawalRequests.length}
              itemSize={50}
              width="100%"
            >
              {Row}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
