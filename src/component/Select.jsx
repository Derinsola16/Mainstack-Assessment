import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

export function Select({ options, isHidden, isVisible, ...props }) {
  const [userinfo, setUserInfo] = useState({
    languages: [],
    response: [],
  });
  // const [isHidden, setIsHidden] = useState(true);

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2 : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
  };

  return (
    <>
      {/* <div className="container-fluid top ">
        <div className="container mt-5 pb-5 pt-5"> */}
      <form>
        {/* <Menu as="div" className="relative inline-block text-left"> */}
        <div className="form-floating mt-3 mb-3 text-center">
          {/* <Menu.Button> */}
          <div>
            <input
              className={[
                isVisible ? "bg-white border-[3px] border-[#131316]" : "",
                "w-full rounded-xl bg-[#EFF1F6] px-4 py-3.5 capitalize outline-none",
              ].join(" ")}
              name="response"
              value={userinfo.response.join(", ")}
              id="floatingTextarea2"
              onChange={handleChange}
            />
          </div>
          {/* onClick={() => {
                setIsHidden(false);
              }} </Menu.Button> */}
        </div>
        {/* <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              show={isHidden}
            > */}
        {/* <Menu.Items className="absolute  bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {/* right-[-44px] z-10 w-80 mt-[18px] origin-top-right *}
                  <Menu.Item> */}
        {isVisible ? (
          <div className="grid p-2 bg-white rounded-[12px] shadow-[#1C1B1F]/20 shadow-md">
            {options.map((item, index) => (
              <>
                <div className="gap-x-3 flex p-3.5" key={index}>
                  <input
                    className="accent-[#1C1B1F]"
                    type="checkbox"
                    name={item.value}
                    value={item.value}
                    placeholder="Please select"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="text-[#131316] text-base font-DegularSemiBold capitalize"
                    htmlFor={item.label}
                  >
                    {item.label}
                  </label>
                </div>
              </>
            ))}
          </div>
        ) : (
          ""
        )}
        {/* </Transition> */}
        {/* </Menu.Item>
                </Menu.Items>
             
            </Menu> */}
      </form>
      {/* </div>
      </div> */}
    </>
  );
}
