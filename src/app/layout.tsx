import "./globals.css";

export const metadata = {
  title: "AirTap — Hands-free Android control",
  description: "Control your phone hands-free with face gestures.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
