import "./global.css";
import type { Metadata } from "next";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: "DK Wholesale",
  description: "Web site created with Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
