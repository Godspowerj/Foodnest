import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Metadata } from "next";
import Aside from "@/components/Aside";
import { AppProvider } from "@/components/AppContextApi/AppContext";
import ModalManager from "@/components/modalManager";

export const metadata: Metadata = {
  title: "FoodNest",
  description:
    "A collaborative platform for multiple food businesses to thrive together.",
  keywords:
    "food, marketplace, multi-vendor, restaurant, foodnest, business, order",
  authors: [
    {
      name: "FoodNest",
      url: "https://foodnest.com",
    },
  ],
  creator: "FoodNest",
  applicationName: "FoodNest",
  themeColor: "#ffffff",
  colorScheme: "light dark",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
    date: false,
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased ">
        <AppProvider>
          <div className="flex items-center  justify-between h-screen  ">
            <Sidebar />

            <main className="bg-[#cfcfcf] flex-1 ">{children}</main>
            <div className="lg:w-96 flex-shrink-0">
              <Aside />
            </div>
          </div>
          <ModalManager/>
        </AppProvider>
        {/* <Popup /> */}
      </body>
    </html>
  );
}
