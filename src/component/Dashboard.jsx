import React, { useState, useEffect } from "react";
import { getWalletDetails, getTransactionDetails } from "../api/Transaction";
import { Info, Success, Error, Download, More } from "../icons";
import moment from "moment";
import { Filter } from "./Filter";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";

// import {
//   ChartControl,
//   ChartType,
// } from "@pnp/spfx-controls-react/lib/ChartControl";

export function Dashboard() {
  const [wallet, setWallet] = useState();
  const [count, setCount] = useState();
  const [transactions, setTransactions] = useState();
  const [filterOpen, setFilterOpen] = useState(false);

  const hideFilter = () => {
    setFilterOpen(false);
  };

  const getCount = (num) => {
    setCount(num);
  };

  const data = {
    labels: ["Apr 1 ,  2022", "Apr 15", "Apr 17", "Apr 25", "Apr 30 ,  2022",],
    datasets: [
      {
        label: "Example Chart",
        data: [10.9, 30, 50, 35, 55],
        backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"],
      },
    ],
  };

  useEffect(() => {
    async function setWalletDetails() {
      try {
        const res = await getWalletDetails();
        if (res.status === 200) {
          setWallet(res.data);
        }
      } catch (error) {
        console.log("login--> error", error);
      }
    }
    setWalletDetails();
  }, []);
  useEffect(() => {
    async function setTransactionDetails() {
      try {
        const res = await getTransactionDetails();
        if (res.status === 200) {
          setTransactions(res.data);
        }
      } catch (error) {
        console.log("login--> error", error);
      }
    }
    setTransactionDetails();
  }, []);
  return (
    <main className="px-20">
      <div className="flex items-center justify-between gap-x-[124px]">
        <div className="grow">
          <div className="flex items-center gap-x-16">
            <div>
              <p className="font-medium text-base text-[#56616B] mb-2">
                Available Balance
              </p>
              <p className="text-[#131316] text-4xl font-DegularBold">
                USD {wallet?.balance}
              </p>
            </div>
            <button className="rounded-full py-3.5 px-10 text-white bg-[#131316]">
              Withdraw
            </button>
          </div>
          <div>
            <Chart type="line" data={data} />
          </div>
        </div>
        <div className="gap-y-8 grow w-[271px]">
          <div>
            <p className="font-medium text-base text-[#56616B] mb-2 flex items-center justify-between">
              Ledger Balance
              <Info />
            </p>
            <p className="text-[#131316] text-[28px] font-DegularBold">
              USD {wallet?.ledger_balance}
            </p>
          </div>
          <div>
            <p className="font-medium text-base text-[#56616B] mb-2 flex items-center justify-between">
              Total Payout
              <Info />
            </p>
            <p className="text-[#131316] text-[28px] font-DegularBold">
              USD {wallet?.total_payout}
            </p>
          </div>
          <div>
            <p className="font-medium text-base text-[#56616B] mb-2 flex items-center justify-between">
              Total Revenue
              <Info />
            </p>
            <p className="text-[#131316] text-[28px] font-DegularBold">
              USD {wallet?.total_revenue}
            </p>
          </div>
          <div>
            <p className="font-medium text-base text-[#56616B] mb-2 flex items-center justify-between">
              Pending Payout
              <Info />
            </p>
            <p className="text-[#131316] text-[28px] font-DegularBold">
              USD {wallet?.pending_payout}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[86px]">
        <div className="flex items-center gap-x-6 mb-[33px]">
          <div className="grow pb-6 border-b border-[#EFF1F6]">
            <p className="font-DegularBold text-2xl text-[#131316] ">
              {transactions?.length} Transactions
            </p>
            <p className="text-[#56616B] font-Degular text-base">
              Your transactions for the last 7 days
            </p>
          </div>
          <div className="flex items-center gap-x-3">
            <div
              className="bg-[#EFF1F6] flex items-center py-3 px-7 rounded-full cursor-pointer"
              onClick={() => {
                setFilterOpen(true);
              }}
            >
              <p className="font-DegularBold text-base pr-1">Filter {count}</p>
              <More />
            </div>
            <div className="bg-[#EFF1F6] flex items-center py-3 px-7 rounded-full">
              <p className="font-DegularBold text-base pr-1">Export list</p>
              <Download />
            </div>
          </div>
        </div>
        <div>
          {transactions?.length >= 1 && (
            <div className="">
              {transactions.map((item, index) => (
                <div
                  className="flex items-center justify-between mb-6"
                  key={index}
                >
                  <div className="gap-x-3.5 flex items-center">
                    {item.type === "withdrawal" ? <Error /> : <Success />}
                    <span>
                      <p className="text-[#131316] text-base font-Degular pb-2 capitalize">
                        {item.metadata ? item.metadata.name : item.type}
                      </p>
                      <small
                        className={[
                          item.metadata?.type ? "text-[#56616B]" : "",
                          "font-Degular text-sm capitalize",
                          item.status === "successful" && !item.metadata
                            ? "text-[#0EA163]"
                            : item.status === "pending"
                            ? "text-[#A77A07]"
                            : "text-[#56616B]",
                        ].join(" ")}
                      >
                        {item.metadata
                          ? item.metadata.type.split("_").join(" ")
                          : item.status}
                      </small>
                    </span>
                  </div>
                  <div>
                    <p className="font-DegularBold text-[#131316] text-base pb-2">
                      USD {item.amount}
                    </p>
                    <small className="font-Degular text-sm text-[#56616B]">
                      {moment(item.date).format("MMM DD, YYYY")}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Filter isVisible={filterOpen} onClose={hideFilter} count={getCount} />
    </main>
  );
}
