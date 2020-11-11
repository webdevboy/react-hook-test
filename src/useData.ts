import { time } from "console";
import { useState, useEffect } from "react";
import { getData } from "./APIService";

export const useData = (query: string, interval: number) => {
  const [data, setData] = useState<any>();
  const [timer, setTimer] = useState<any>();
  const [loading, setLoading] = useState(false);

  const clearTimer = () => {
    if (!timer) {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    async function loadData() {
      const result = await getData(query);
      setData(result);
      setLoading(true);
    }

    clearTimer();
    const t = setInterval(() => {
      loadData();
    }, interval * 1000);
    setTimer(t);

    loadData();

    return () => {
      clearTimer();
    };
  }, [query]);

  return [data, loading];
};
