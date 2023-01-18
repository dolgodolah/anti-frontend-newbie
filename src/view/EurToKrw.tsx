import React, { useEffect } from "react";
import useExchanger from "../hooks/useExchanger";
import useEurInfo from "../hooks/useEurInfo";

export const EurToKrw = () => {
  const { result, exchangeEurToKrw, exchangeKrwToEur } = useExchanger();
  const { isReady, eurInfo, loadEurInfo } = useEurInfo();

  useEffect(() => {
    loadEurInfo();
  }, []);

  return (
    <>
      {isReady ? (
        <>
          <div>환율기준 (1 유로)</div>
          <div>
            {eurInfo.basePrice}
            {eurInfo.isUp() && "▲"}
            {eurInfo.isDown() && "▼"}
            {eurInfo.changePrice}원{"("}
            {eurInfo.getRate()}
            {"%)"}
          </div>
          <div>
            <div>살때 : {eurInfo.cashBuyingPrice}</div>
            <div>팔때 : {eurInfo.cashSellingPrice}</div>
            <div>보낼때 : {eurInfo.ttSellingPrice}</div>
            <div>받을때 : {eurInfo.ttBuyingPrice}</div>
          </div>
          <hr />
          <input
            style={{ textAlign: "right" }}
            onChange={(e) => exchangeEurToKrw(e, eurInfo)}
          />
          {"유로 ▶︎ "}
          <input style={{ textAlign: "right" }} value={result} disabled />원
          <div />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const Loading = () => {
  return <div>환율 정보를 불러오고 있습니다.</div>;
};
