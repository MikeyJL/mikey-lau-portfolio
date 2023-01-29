import { ReactNode } from "react";
import "./globals.css";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="container mx-auto py-[100px]">{children}</body>
    </html>
  );
};

export default RootLayout;
