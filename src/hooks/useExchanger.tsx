import { EurInfo } from "../model/EurInfo";
import { ChangeEvent, useState } from "react";
import { getFormattedNumber, isNumber } from "../utils/Utils";

/**
 * 유로화 <> 원화 환율 계산 hook
 */
const useExchanger = () => {
  const [result, setResult] = useState<string>("0");

  // EUR > KRW
  const exchangeEurToKrw = (
    e: ChangeEvent<HTMLInputElement>,
    eurInfo: EurInfo
  ) => {
    const eur = +e.target.value;

    if (isNumber(eur)) {
      const krw = eur * eurInfo.basePrice;
      setResult(getFormattedNumber(krw));
    }
  };

  // KRW > EUR
  const exchangeKrwToEur = () => {};

  return {
    result,
    exchangeEurToKrw,
    exchangeKrwToEur,
  };
};

export default useExchanger;
