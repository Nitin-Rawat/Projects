import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [currency]);

  return { data, loading };
}

export default useCurrencyInfo;
