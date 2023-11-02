import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  Analytics,
  App,
  Group,
  Home,
  Logo,
  Menus,
  Notification,
  Payment,
  Chat,
} from "../icons";
import Avatar from "react-avatar";
import { getUserDetails } from "../api/Transaction";

export function Header() {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    async function setUserDetail() {
      try {
        const res = await getUserDetails();
        if (res.status === 200) {
          setUserDetails(res.data);
        }
      } catch (error) {
        console.log("login--> error", error);
      }
    }
    setUserDetail();
  }, []);

  return (
    <>
      {/* shadow-[0px_2px_4px_0px_rgba(45,59,67,0.05)_0px_2px_6px_0px_rgba(45,59,67,0.06);]  */}
      <div className="fixe bg-white mt-4 mx-4 rounded-full border-white border-2 shadow flex justify-between items-center py-3 pl-[24px] pr-3.5 h-[64px]">
        <Logo />
        <div>
          <ul className="flex gap-x-5">
            <li className="flex text-[#56616B] text-base font-semibold font-Degular items-center hover:bg-[#EFF1F6] gap-x-1 hover:rounded-full py-2 px-[14px]">
              <Home />
              <span>Home</span>
            </li>
            <li className="flex text-[#56616B] text-base font-semibold font-Degular items-center hover:bg-[#EFF1F6] gap-x-1 hover:rounded-full py-2 px-[14px]">
              <Analytics />
              <span>Analytics</span>
            </li>
            <li className="flex text-white text-base font-semibold font-Degular items-center bg-[#131316] gap-x-1 rounded-full py-2 px-[14px]">
              <Payment />
              <span>Revenue</span>
            </li>
            <li className="flex text-[#56616B] text-base font-semibold font-Degular items-center hover:bg-[#EFF1F6] gap-x-1 hover:rounded-full py-2 px-[14px]">
              <Group />
              <span>CRM</span>
            </li>
            <li className="flex text-[#56616B] text-base font-semibold font-Degular items-center hover:bg-[#EFF1F6] gap-x-1 hover:rounded-full py-2 px-[14px]">
              <App />
              <span>Apps</span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-x-[28px] items-center">
            <li>
              <Notification />
            </li>
            <li>
              <Chat />
            </li>
            <li className="rounded-full bg-[#EFF1F6] py-1 pl-[5px] pr-3 gap-x-2 flex items-center font-semibold">
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button>
                  <Avatar
                    name={userDetails?.first_name.concat(
                      " ",
                      userDetails.last_name
                    )}
                    size="32px"
                    color="linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%)"
                    className="object-cover w-10 h-10 rounded-full"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-[-44px] z-10 w-80 mt-[18px] origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        <div className="flex items-stretch px-4 py-2">
                          <Avatar
                            name={userDetails?.first_name.concat(
                              " ",
                              userDetails.last_name
                            )}
                            size="40px"
                            className="object-cover w-10 h-10 rounded-full"
                          />
                          <div className="ml-3 grow">
                            <p className="capitalize font-interSemiBold text-brand-black break-al">
                              {userDetails?.first_name.concat(
                                " ",
                                userDetails.last_name
                              )}
                            </p>
                            <p className="text-sm break-all text-brand-ghostwhite">
                              {userDetails?.email}
                            </p>
                          </div>
                        </div>
                      </Menu.Item>
                      <div>
                        <Menu.Item>
                          <div className="text-base cursor-pointer px-4 py-2 hover:bg-[#EFF1F6] font-bold text-[#131316] hover:mx-2 mx-2 hover:rounded-full  hover:px-4 hover:py-2">
                            <p
                              href="#"
                              className=""
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                            >
                              Settings
                            </p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="text-base cursor-pointer px-4 py-2 hover:bg-[#EFF1F6] font-bold text-[#131316] hover:mx-2 mx-2 hover:rounded-full  hover:px-4 hover:py-2">
                            <p
                              href="#"
                              className=""
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                            >
                              Purchase History
                            </p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="text-base cursor-pointer px-4 py-2 hover:bg-[#EFF1F6] font-bold text-[#131316] hover:mx-2 mx-2 hover:rounded-full  hover:px-4 hover:py-2">
                            <p
                              href="#"
                              className=""
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                            >
                              Refer and Earn
                            </p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="text-base cursor-pointer px-4 py-2 hover:bg-[#EFF1F6] font-bold text-[#131316] hover:mx-2 mx-2 hover:rounded-full  hover:px-4 hover:py-2">
                            <p
                              href="#"
                              className=""
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                            >
                              Integrations
                            </p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="text-base cursor-pointer px-4 py-2 hover:bg-[#EFF1F6] font-bold text-[#131316] hover:mx-2 mx-2 hover:rounded-full  hover:px-4 hover:py-2">
                            <p
                              href="#"
                              className=""
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                            >
                              Report Bug
                            </p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="text-base cursor-pointer px-4 py-2 hover:bg-[#EFF1F6] font-bold text-[#131316] hover:mx-2 mx-2 hover:rounded-full  hover:px-4 hover:py-2">
                            <p
                              href="#"
                              className=""
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                            >
                              Switch Account
                            </p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          <div className="text-base cursor-pointer px-4 py-2 hover:bg-[#EFF1F6] font-bold text-[#131316] hover:mx-2 mx-2 hover:rounded-full  hover:px-4 hover:py-2">
                            <p
                              href="#"
                              className=""
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                            >
                              Sign Out
                            </p>
                          </div>
                        </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <Menus />
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </>
  );
}
