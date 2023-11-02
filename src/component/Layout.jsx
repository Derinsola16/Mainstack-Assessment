import React from "react";
import { Header } from "./header";
import { Dashboard } from "./Dashboard";

export function Layout() {
  return (
    <>
      <div className="z-30">
        <div className="absolute w-full top-0 bg-white">
          <Header />
        </div>

        <main className="pt-[10rem] h-screen  overflow-y-scroll">
          <Dashboard />
        </main>
      </div>
    </>
  );
}
