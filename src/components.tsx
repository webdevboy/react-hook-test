import React from "react";

import { genQuery } from "./APIService";
import { useData } from "./useData";

export function Loading() {
  return <h2>Loading</h2>;
}

export interface IProps {
  timeRange: string;
}

export function C1(props: IProps) {
  const refreshInterval_Secs = 60;
  const query = genQuery(props.timeRange, "c1", Math.random());
  const [data, loading] = useData(query, refreshInterval_Secs); //TODO fetch data;
  return loading ? <Loading /> : <>Hi {data}</>;
}

export function C2(props: IProps) {
  const refreshInterval_Secs = 10;
  const query = genQuery(props.timeRange, "c2", Math.random());
  const [data, loading] = useData(query, refreshInterval_Secs); //TODO fetch data;
  return loading ? <Loading /> : <>Hello there {data}</>;
}

export function C3(props: IProps) {
  const refreshInterval_Secs = 15;
  const query = genQuery(props.timeRange, "c3", Math.random());
  const [data, loading] = useData(query, refreshInterval_Secs); //TODO fetch data;
  return loading ? <Loading /> : <>Charlie {data} Tango</>;
}

export function C4(props: IProps) {
  const refreshInterval_Secs = 42;
  const query = genQuery(props.timeRange, "c4", Math.random());
  const [data, loading] = useData(query, refreshInterval_Secs); //TODO fetch data;
  return loading ? <Loading /> : <>A fox jumped {data}</>;
}

export function C5(props: IProps) {
  const refreshInterval_Secs = 30;
  const query = genQuery(props.timeRange, "c5", Math.random());
  const [data, loading] = useData(query, refreshInterval_Secs); //TODO fetch data;
  return loading ? <Loading /> : <>{data} is king</>;
}
