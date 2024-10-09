import { ReactQueryClientProvider } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </main>
      </body>
    </html>
  );
}
