import React, { Fragment, useState, useEffect } from "react";
import { Header } from "./header";
import { Dashboard } from "./Dashboard";
import { Filter } from "./Filter";
import { Select } from "./Select";

export function Layout() {
  // const status = [
  //   {
  //     value: "successful",
  //     label: "Successful",
  //   },
  //   {
  //     value: "pending",
  //     label: "Pending",
  //   },
  //   {
  //     value: "failed",
  //     label: "Failed",
  //   },
  // ];
  return (
    <>
      <Header />
      <Dashboard />
      
    </>
  );
}
