import { Inter, Prata } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"] });
const prata = Prata({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prata"
});

export const metadata = {
  title: "Siddharth Meena - Full Stack Developer",
  description: "Full Stack Developer & UI/UX Designer passionate about creating digital experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${prata.variable}`}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}