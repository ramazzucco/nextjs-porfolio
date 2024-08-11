import React from 'react';
import './header-brand.css';
import Image from 'next/image';

export default function HeaderBrand() {
    return (
        <div className="brand">
            <div className="logo">
                <Image
                    src="/logo_only_symbol_transparent.png"
                    alt="logo Ramiro Mazzucco Giusseppin"
                    width={50}
                    height={50}
                />
            </div>
            <div className="title">
                <strong>Ramiro Mazzucco Giusseppin</strong>
                <span>Fullstack developer</span>
            </div>
        </div>
    );
}
