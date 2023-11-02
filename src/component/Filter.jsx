import React, { useState, useEffect } from "react";
import { Close } from "../icons";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
import { Select } from "./Select";
import moment from "moment";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Filter({ isVisible, onClose, count, ...props }) {
  // const [filter, setFilter] = useState({
  //   start_date: "",
  //   end_date: "",
  // });

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [isDisabled, setIsDisaabled] = useState(true);
  const status = [
    {
      value: "successful",
      label: "Successful",
    },
    {
      value: "pending",
      label: "Pending",
    },
    {
      value: "failed",
      label: "Failed",
    },
  ];
  const type = [
    {
      label: "store transactions",
      value: "store transactions",
    },
    {
      label: "get tipped",
      value: "get tipped",
    },
    {
      label: "withdrawals",
      value: "withdrawals",
    },
    {
      label: "chargebacks",
      value: "chargebacks",
    },
    {
      label: "cashbacks",
      value: "cashbacks",
    },
    {
      label: "refer & earn",
      value: "refer & earn",
    },
  ];
  const [showStatus, setShowStatus] = useState(false);
  const [showType, setShowType] = useState(false);

  const handleShowStatus = () => {
    setShowStatus(true);
    setShowType(false);
  };
  const handleShowType = () => {
    setShowType(true);
    setShowStatus(false);
  };

  const onChange = (date) => {
    setStartDate(date);
    count(1);
  };
  useEffect(() => {
    function generateCount() {
      if (!startDate || !endDate) {
        count = 1;
      }
    }
    generateCount();
  }, [startDate, endDate]);

  return (
    <>
      {isVisible ? (
        <main className="z-50 fixed inset-0 bg-[#e8e8e8]/70 backdrop-opacity-25 backdrop-blur-sm">
          <div className="w-[480px] h-[97%] bg-white m-3 fixed rounded-[20px] right-0 backdrop-blur">
            <div className="">
              <div className="flex items-center justify-between py-5 px-6">
                <p className="text-[#131316] text-2xl font-DegularBold grow">
                  Filter
                </p>
                <Close
                  className="cursor-pointer"
                  onClick={() => {
                    onClose();
                  }}
                />
              </div>
              <div className="px-[22px] overflow-y-scroll grow">
                <div className="flex items-center gap-x-3 overflow-x-scroll scrollbar-hide mb-7">
                  <p className="border rounded-full border-[#EFF1F6] bg-white text-[#131316] py-2.5 px-[18px] text-base font-DegularSemiBold whitespace-nowrap">
                    Today
                  </p>
                  <p className="border rounded-full border-[#EFF1F6] bg-white text-[#131316] py-2.5 px-[18px] text-base font-DegularSemiBold whitespace-nowrap">
                    Last 7 days
                  </p>
                  <p className="border rounded-full border-[#EFF1F6] bg-white text-[#131316] py-2.5 px-[18px] text-base font-DegularSemiBold whitespace-nowrap">
                    This month
                  </p>
                  <p className="border rounded-full border-[#EFF1F6] bg-white text-[#131316] py-2.5 px-[18px] text-base font-DegularSemiBold whitespace-nowrap">
                    Last 3 months
                  </p>
                </div>

                <div className="">
                  <div className="mb-6">
                    <p className="text-base font-DegularSemiBold text-[#131316] mb-3">
                      Date Range
                    </p>
                    <div className="flex gap-x-[6px] w-full">
                      <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        dateFormat="dd MMM yyyy"
                        className="grow"
                      />
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd MMM yyyy"
                        className="grow"
                      />
                    </div>
                  </div>
                  <div
                    className="mb-6"
                    onClick={() => {
                      handleShowType();
                    }}
                  >
                    <p className="text-base font-DegularSemiBold text-[#131316] mb-3">
                      Transaction Type
                    </p>
                    <Select options={type} isVisible={showType} />
                  </div>
                  <div
                    className="mb-6"
                    onClick={() => {
                      handleShowStatus();
                    }}
                  >
                    <p className="text-base font-DegularSemiBold text-[#131316] mb-3">
                      Transaction Status
                    </p>
                    <Select options={status} isVisible={showStatus} />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-5 py-5 px-6 w-full bottom-0 absolute">
                <button className="border rounded-full border-[#EFF1F6] bg-white text-[#131316] w-1/2 py-3 px-6 font-DegularSemiBold">
                  Clear
                </button>
                <button
                  className={[
                    isDisabled ? "bg-[#DBDEE5]" : "bg-[#131316]",
                    "text-white rounded-full w-1/2 py-3 px-6 font-DegularSemiBold",
                  ].join(" ")}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </main>
      ) : (
        ""
      )}
    </>
  );
}
