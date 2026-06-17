"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          minHeight: "100vh",
          background: "#fff",
          border: "1px solid #e8e8e8",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
}