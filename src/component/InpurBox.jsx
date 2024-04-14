import React, { useState, useCallback } from "react";
import useAmt from "../contextAmount/contextApi";
import useFrom from "../contextAmount/fromContext";
import useTo from "../contextAmount/toContext";

function InputBox(props) {
  const { Amt, setAmt } = useAmt();
  const { From, changeFrom } = useFrom();
  const { to, changeTo } = useTo();
  const [cur, setCur] = useState(props.currency);

  const handleChange = useCallback(
    (e) => {
      setCur(e.target.value);
      if (props.contextType === "from") {
        changeFrom(e.target.value);
      } else if (props.contextType === "to") {
        changeTo(e.target.value);
      }
    },
    [props.contextType, changeFrom, changeTo]
  );

  return (
    <div className="InpBox bg-violet-700 px-10 py-4 flex w-full md:w-[29.6%] items-center justify-center gap-8">
      {/* left input section */}
      <div className="left flex flex-col gap-3 font-semibold text-lg">
        <label htmlFor={props.labelName}>{props.labelName}</label>
        <input
          type="number"
          id={props.labelName}
          className="bg-violet-600 outline-none"
          value={props.convertedAmount || Amt}
          onChange={(e) => setAmt(Number(e.target.value))}
          readOnly={props.inputPermission === "readOnly"}
        />
      </div>

      {/* right currency options */}
      <div className="right flex flex-col gap-3 font-semibold text-lg">
        <label htmlFor="currencytype" className="whitespace-nowrap">
          Currency Type
        </label>
        <select
          id="currencytype"
          className="bg-violet-600 font-thin outline-none"
          value={cur}
          onChange={handleChange}
        >
          {From === "usd" && <option value="usd">USD</option>}
          {to === "inr" && <option value="inr">INR</option>}
          {Array.isArray(props.currencyOptions) &&
            props.currencyOptions.map((option) => (
              <option
                key={option}
                value={option}
                className="font-thin lowercase bg-violet-500"
              >
                {option}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
