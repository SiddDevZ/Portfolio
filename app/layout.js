import "./globals.css";

export const metadata = {
  title: "Siddharth Meena",
  description: "My personal portfolio that showcases my skills and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
