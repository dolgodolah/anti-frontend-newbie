import { useState } from "react";
import { EurInfo, getEurInfo } from "../model/EurInfo";

/**
 * 유로 환율 정보 hook
 */
const useEurInfo = () => {
  const [isReady, setReady] = useState<boolean>(false);
  const [eurInfo, setEurInfo] = useState<EurInfo>(new EurInfo());

  const loadEurInfo = () => {
    getEurInfo().then((result) => {
      setEurInfo(result);
      setReady(true);
    });
  };

  return {
    isReady,
    eurInfo,
    loadEurInfo,
  };
};

export default useEurInfo;
