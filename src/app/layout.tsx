import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from './_layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Ramiro Mazzucco Giusseppin',
    description: 'Mi porfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
                />
            </head>
            <body className={inter.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
