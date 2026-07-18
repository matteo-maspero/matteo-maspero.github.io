import type { Metadata } from "next";
import "./globals.css";

type ChildrenProps = Readonly<{ children: React.ReactNode }>;

export const metadata: Metadata = {
  title: "Matteo Maspero",
  description: "Portfolio website of Matteo Maspero"
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-2xl font-bold">Layout header</h1>
        { children }
        <h1 className="text-2xl font-bold">Layout footer</h1>
      </body>
    </html>
  );
}
