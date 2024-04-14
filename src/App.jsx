import { useEffect, useState } from "react";
import InpurBox from "./component/InpurBox";
import Btn from "./component/btn";
import useCurrencyInfo from "./hook/useCurrencyInfo";
import { AmountProvider } from "./contextAmount/contextApi";
import { FromProvider } from "./contextAmount/fromContext";
import { ToProvider } from "./contextAmount/toContext";

function App() {
  const [Amt, setAmt] = useState(1); //contextApi
  const [from, changeFrom] = useState("usd"); //contextApi
  const [to, changeTo] = useState("inr"); //contextApi
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setAmt(convertedAmount); // Swap Amt and convertedAmount
    setConvertedAmount(Amt); // Swap Amt and convertedAmount
    changeFrom(to);
    changeTo(from);
  };

  const convert = () => {
    setConvertedAmount(Amt * currencyInfo[to]);
  };
  useEffect(() => {
    console.log(to);
    console.log(from);
    convert();
    console.log(convertedAmount);

    convert();
  }, [Amt, to, from, convert]);

  return (
    <>
      {/* {console.log(to)} */}
      <AmountProvider value={{ Amt, setAmt }}>
        <FromProvider value={{ from, changeFrom }}>
          <ToProvider value={{ to, changeTo }}>
            <div className="main bg-violet-800 flex flex-col  justify-center items-center h-screen w-screen transition-all duration-750">
              <div className="div mt-20">
                <h1
                  className="text-center text-4xl md:text-5xl  font-bold text-white p-2
             shadow-xl shadow-violet-950 bg-violet-700 whitespace-nowrap"
                >
                  convert {from} to {to}
                </h1>
              </div>
              <div className="div h-full w-full mb-20">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    convert();
                  }}
                  className="h-full w-full flex justify-center items-center flex-col"
                >
                  <InpurBox
                    labelName="from"
                    from={from}
                    currency={from}
                    currencyOptions={options}
                    contextType="from"
                    changeFrom={changeFrom}
                  ></InpurBox>

                  <div className="btn bg-violet-900 w-full md:w-[29.6%] px-20 py-4 flex items-center transition-all duration-700 justify-center gap-5 hover:bg-violet-800">
                    <button
                      className="uppercase font-bold text-lg text-white h-full w-full"
                      onClick={swap}
                    >
                      swap
                    </button>
                  </div>
                  <InpurBox
                    labelName="to"
                    to={to}
                    currency={to}
                    currencyOptions={options}
                    contextType="to"
                    changeTO={changeTo}
                    inputPermission="readOnly"
                    value={setConvertedAmount}
                    convertedAmount={convertedAmount}
                  ></InpurBox>
                  <div className="btn  -tracking-tighter uppercase bg-violet-900 font-bold w-full md:w-[29.6%] text-white hover:bg-violet-800  px-10 py-5 text-xl flex justify-center items-center transition-all duration-700  ">
                    <button onClick={convert}>
                      convert {from} to {to}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </ToProvider>
        </FromProvider>
      </AmountProvider>
    </>
  );
}

export default App;
