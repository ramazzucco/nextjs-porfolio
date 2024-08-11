'use client';
import React from 'react';
import './page-loading.css';
import { GetState } from '@/hooks/state';
import Image from 'next/image';

export default function PageLoading() {
    const theme = GetState('theme');

    return (
        <div className={`loading_container ${theme}`}>
            <Image src="/logo_only_symbol_transparent.png" alt="logo porfolio" width={200} height={100} priority />
            <div className="diamond_container">
                <span className="diamond"></span>
            </div>
        </div>
    );
}
