import "./globals.css";

export const metadata = {
  title: "Crypto Tinder",
  description: "Swipe meme coins. Discover your degen type.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
