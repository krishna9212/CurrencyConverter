import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => {
        setdata(response[currency]);
      })
      .catch((error) => {
        console.error("Error fetching currency info:", error);
      });
  }, [currency]);

  useEffect(() => {
    // console.log(data); // Log the updated data whenever it changes
  }, [data]);

  return data;
}

export default useCurrencyInfo;
