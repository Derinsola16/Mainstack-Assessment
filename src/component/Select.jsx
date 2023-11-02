import React from "react";

export function Select({
  options,
  isHidden,
  isVisible,
  handleCount,
  onChange,
  value,
  ...props
}) {
  return (
    <>
      <form>
        <div className="form-floating mt-3 mb-3 text-center">
          <div>
            <input
              className={[
                isVisible ? "bg-white border-[3px] border-[#131316]" : "",
                "w-full rounded-xl bg-[#EFF1F6] px-4 py-3.5 capitalize outline-none",
              ].join(" ")}
              name="response"
              value={value}
              id="floatingTextarea2"
              onChange={onChange}
            />
          </div>
        </div>

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
                    onChange={onChange}
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
      </form>
    </>
  );
}
