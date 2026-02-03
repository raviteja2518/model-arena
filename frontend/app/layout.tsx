import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center mb-2">
            Model Arena
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Compare GPT, Claude, and Open Models side by side
          </p>

          {children}
        </div>
      </body>
    </html>
  );
}
