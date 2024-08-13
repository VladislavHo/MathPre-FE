

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav/Nav";
import { Provider } from "./components/Provider/Provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>


        <Provider>
          <Suspense>
            <main>{children}</main>

          </Suspense>

        </Provider>
      </body>
    </html>
  );
}
