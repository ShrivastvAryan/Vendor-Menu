"use client";
import { useIsFetching } from "@tanstack/react-query";
import LogoLoader from "./Loader";

const GlobalLoader = () => {
  const isFetching = useIsFetching();

  if (isFetching) {
    return (
        <>
        <LogoLoader />
        </>
      
    );
  }

  return null;
};

export default GlobalLoader;
