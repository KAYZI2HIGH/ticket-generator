import Navbar from "../components/Navbar";
import "./globals.css";
import { AppWrapper } from "@/components/context";

export const metadata = {
  title: "Conference Ticket Generator",
  description:
    "A seamless Next.js-powered platform for booking and managing conference tickets effortlessly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white font-roboto">
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
