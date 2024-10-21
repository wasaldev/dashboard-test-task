import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Define local fonts with variable font weights and CSS variable names
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/**
 * Metadata for the root layout page.
 *
 * This metadata is applied globally to the user dashboard, defining the
 * page title and description for SEO and display purposes.
 *
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Admin Dashboard for Users",
};

/**
 * Root layout component for the application.
 *
 * This layout wraps the entire application, applying global styles,
 * fonts, and metadata. It merges custom local fonts with global CSS classes
 * and renders child components inside the body element.
 *
 * @param {Readonly<{ children: React.ReactNode }>} props - The component props.
 * @returns {JSX.Element} The root layout element containing the page structure.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
