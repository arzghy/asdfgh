import { Inter } from "next/font/google";
import "./landing.css";
import { ClientWrapper } from "../client-wrapper";

const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
});


export default function LandingLayout({ children }) {
   return <ClientWrapper>{children}</ClientWrapper>;
}
