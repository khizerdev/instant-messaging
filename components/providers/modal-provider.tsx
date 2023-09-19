"use client";

import { useEffect, useState } from "react";

import ServerModal from "@/components/modals/server-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ServerModal />
    </>
  )
}