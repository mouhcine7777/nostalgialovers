import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "900"], // Adjust weights as needed
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Nostalgia Lovers Festival",
  description: "Experience the ultimate retro festival!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat">{children}</body>
    </html>
  );
}
