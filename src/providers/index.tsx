"use client";
import React from "react";
import dynamic from "next/dynamic";
import { NextUIProvider } from "@nextui-org/react";

const ThemeClient = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default ThemeClient;
