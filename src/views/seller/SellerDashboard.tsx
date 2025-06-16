import Chart from "react-apexcharts";
import {
  FaUsers,
  FaDollarSign,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

interface CardData {
  title: string;
  value: string | number;
  icon: React.ReactElement;
  bgColor: string;
  textColor: string;
}

const cards: CardData[] = [
  {
    title: "Total Sales",
    value: "$3434",
    icon: <FaUsers className="text-blue-500 text-2xl" />,
    bgColor: "bg-blue-300",
    textColor: "text-blue-700",
  },
  {
    title: "Products",
    value: "50",
    icon: <FaDollarSign className="text-blue-500 text-2xl" />,
    bgColor: "bg-green-300",
    textColor: "text-green-700",
  },
  {
    title: "Orders",
    value: 10,
    icon: <FaShoppingCart className="text-blue-500 text-2xl" />,
    bgColor: "bg-yellow-300",
    textColor: "text-yellow-700",
  },
  {
    title: "Pending Orders",
    value: "54",
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
    bgColor: "bg-purple-300",
    textColor: "text-purple-700",
  },
];

const chartData = [
  {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91,55,30, 40, 45, 50, 49, 60, 70, 91,55],
      },
    ],
  },
];

const SellerDashboard: React.FC = () => {
  return (
    <div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-2 py-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-md p-4 shadow-md text-white flex items-center justify-between ${card.bgColor}`}
          >
            <div>
              <h3
                className={`text-lg font-semibold text-blue-700 ${card.textColor}`}
              >
                {card.title}
              </h3>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 px-2 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="bg-blue-200 rounded-md p-4 col-span-12 lg:col-span-8">
          <Chart
            options={chartData[0].options}
            series={chartData[0].series}
            type="bar"
            width="100%"
            height="300"
          />
        </div>

        {/* <div className="bg-green-100 rounded-md p-4 col-span-12 lg:col-span-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Recent Seller Messages</span>
            <span className="text-sm text-blue-700 cursor-pointer">
              View all
            </span>
          </div>
        </div> */}

        <div className="bg-green-100 rounded-md p-4 col-span-12 lg:col-span-4 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-lg">
              Recent Customer Messages
            </span>
            <span className="text-sm text-blue-700 cursor-pointer">
              View all
            </span>
          </div>

          
          <div className="flex-1 overflow-y-auto space-y-2 pr-2">
            
            <div className="flex items-start gap-2">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="bg-white p-2 rounded-md shadow text-sm max-w-[80%]">
                <div className="font-bold pb-1">Admin</div>
                <div className="bg-blue-200 p-1 rounded-md">
                    <p>Hello! I’d like to inquire about the coupon offer.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="bg-white p-2 rounded-md shadow text-sm max-w-[80%]">
                <div className="font-bold pb-1">Customer</div>
                <div className="bg-blue-200 p-1 rounded-md">
                    <p>Hello! I’d like to inquire about the coupon offer.</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
