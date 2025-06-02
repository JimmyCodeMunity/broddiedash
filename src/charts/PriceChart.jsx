import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import dayjs from "dayjs";
import { ApiContext } from "../context/ApiContext";

// const orderData = [
//   {
//     _id: "67e7112a046cb4b64c96a79c",
//     userid: {
//       _id: "67e70ce3488d9b9eb28d2932",
//       username: "Dev",
//       email: "jameswafula2002@gmail.com",
//       phone: "0112163919",
//     },
//     mealid: {
//       _id: "67e709624b718b8b6fc06236",
//       mealname: "Smokie",
//       price: "120",
//       description: "Beef smokies",
//       image: null,
//     },
//     status: "Completed",
//     createdAt: "2025-03-28T21:14:18.476Z",
//     __v: 0,
//   },
//   {
//     _id: "67e723f261a6ea630b5a234c",
//     userid: {
//       _id: "67e70ce3488d9b9eb28d2932",
//       username: "Dev",
//       email: "jameswafula2002@gmail.com",
//       phone: "0112163919",
//     },
//     mealid: {
//       _id: "67e723e761a6ea630b5a234a",
//       mealname: "Chicken",
//       price: "700",
//       description: "Get yourself chilli chicken",
//       image: null,
//     },
//     status: "Completed",
//     createdAt: "2025-04-28T22:34:26.940Z",
//     __v: 0,
//   },
// ];

// Function to process data into sales per month
const processSalesData = (data) => {

  const salesPerMonth = {};

  data.forEach((order) => {
    const month = dayjs(order.createdAt).format("MMM"); // Get month abbreviation (e.g., "Jan")
    const price = parseFloat(order.mealid.price);

    if (salesPerMonth[month]) {
      salesPerMonth[month] += price;
    } else {
      salesPerMonth[month] = price;
    }
  });

  return salesPerMonth;
};

export default function PriceChart() {
  const { completedorders } = React.useContext(ApiContext)
  const salesData = processSalesData(completedorders);

  const months = Object.keys(salesData); // Extract months
  const totalSales = Object.values(salesData); // Extract sales

  return (
    <BarChart
      xAxis={[
        {
          id: "months",
          data: months,
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: totalSales,
          color: "white",
        },
      ]}
      width={500}
      height={300}
    />
  );
}
