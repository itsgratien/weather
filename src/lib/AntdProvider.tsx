"use client";
import React from "react";
import { ConfigProvider } from "antd";

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider theme={{ token: { fontSize: 15 } }}>
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
