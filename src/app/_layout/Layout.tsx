'use client';
import React from 'react';
import NavigationBar from '../_components/navigation-bar';
import './layout.css';
import { AppProvider } from '@/hooks/app';

export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <AppProvider>
            <div className={`layout_container`}>
                <NavigationBar />
                <div className="main">{children}</div>
            </div>
        </AppProvider>
    );
}
