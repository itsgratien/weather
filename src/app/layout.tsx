import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@/lib/AntdRegistry';
import { ThemeProvider } from '@/lib/ThemeProvider';

export const metadata: Metadata = {
  title: 'Weather',
  description: 'Weather Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AntdRegistry>
        <ThemeProvider>{children}</ThemeProvider>
      </AntdRegistry>
    </html>
  );
}
