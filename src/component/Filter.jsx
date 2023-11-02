import React, { useState } from "react";
import { Close } from "../icons";
import { Select } from "./Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Filter({ isVisible, onClose, count, ...props }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

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

  const [statusinfo, setStatusInfo] = useState({
    response: [],
  });

  const [typeinfo, setTypeInfo] = useState({
    response: [],
  });

  const handleTypeChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { response } = typeinfo;
    // Case 1 : The user checks the box
    if (checked) {
      setTypeInfo({
        response: [...response, value],
      });
      if (value || typeinfo.response.length >= 1) setIsDisabled(false);
      // handleCount(1);
    }

    // Case 2 : The user unchecks the box
    else {
      setTypeInfo({
        response: response.filter((e) => e !== value),
      });
      if (!typeinfo.response.length) setIsDisabled(true);

      // handleCount(0);
    }
  };

  const handleStatusChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { response } = statusinfo;

    // Case 1 : The user checks the box
    if (checked) {
      setStatusInfo({
        response: [...response, value],
      });
      if (statusinfo.response.length >= 1) setIsDisabled(false);
      // handleCount(1);
    }

    // Case 2 : The user unchecks the box
    else {
      setStatusInfo({
        response: response.filter((e) => e !== value),
      });
      if (!statusinfo.response.length) setIsDisabled(true);
      // handleCount(0);
    }
  };

  const handleShowStatus = () => {
    setShowStatus(!showStatus);
    setShowType(false);
  };
  const handleShowType = () => {
    setShowType(true);
    setShowStatus(false);
  };

  const onStartChange = (date) => {
    setStartDate(date);
    if (!startDate) setIsDisabled(false);
  };

  const generateCount = (num) => {
    if (num < 1) count(1);
    if (num < 2) count(2);
    if (num < 3) count(3);
  };

  const generateCounts = (num) => {
    if (num < 1) count(1);
    if (num < 2) count(2);
    if (num < 3) count(3);
  };

  return (
    <>
      {isVisible ? (
        <main className="z-50 fixed inset-0 bg-[#e8e8e8]/70 backdrop-opacity-25 backdrop-blur-sm">
          <div className="w-[480px] h-[97%] bg-white m-3 fixed rounded-[20px] right-0 backdrop-blur">
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
                <p className="border rounded-full border-[#EFF1F6] bg-white text-[#131316] py-2.5 px-[18px] text-base font-DegularSemiBold whitespace-nowrap cursor-pointer">
                  Today
                </p>
                <p className="border rounded-full border-[#EFF1F6] bg-white text-[#131316] py-2.5 px-[18px] text-base font-DegularSemiBold whitespace-nowrap cursor-pointer">
                  Last 7 days
                </p>
                <p className="border rounded-full border-[#EFF1F6] bg-white text-[#131316] py-2.5 px-[18px] text-base font-DegularSemiBold whitespace-nowrap cursor-pointer">
                  This month
                </p>
                <p className="border rounded-full border-[#EFF1F6] bg-white text-[#131316] py-2.5 px-[18px] text-base font-DegularSemiBold whitespace-nowrap cursor-pointer">
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
                      onChange={onStartChange}
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
                  <Select
                    options={type}
                    value={typeinfo.response.join(", ")}
                    onChange={handleTypeChange}
                    isVisible={showType}
                    handleCount={generateCount}
                  />
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
                  <Select
                    options={status}
                    value={statusinfo.response.join(", ")}
                    onChange={handleStatusChange}
                    isVisible={showStatus}
                    handleCount={generateCounts}
                  />
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
            {/* </div> */}
          </div>
        </main>
      ) : (
        ""
      )}
    </>
  );
}
