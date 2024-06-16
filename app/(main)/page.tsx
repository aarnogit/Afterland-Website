"use client";

import { useLayoutEffect, useState } from "react";
import MainBody from "./(components)/main-body";

export default function Home() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useLayoutEffect(() => {
    setLoaded(true);
  }, []);

  return loaded ? <MainBody /> : null;
}
