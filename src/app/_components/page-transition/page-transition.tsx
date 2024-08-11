'use client';

import React, { useState } from 'react';
import styles from './page-transition.module.css';

export default function PageTransition({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const transition1 = {
        div1: { top: 0 },
        div2: { top: '20%', animationDelay: '.06s' },
        div3: { top: '40%', animationDelay: '.08s' },
        div4: { top: '60%', animationDelay: '.1s' },
        div5: { top: '80%', animationDelay: '.12s' },
    };
    // const transition2 = {
    //     div1: { top: '10%' },
    //     div2: { top: '30%', animationDelay: '.06s' },
    //     div3: { top: '50%', animationDelay: '.08s' },
    //     div4: { top: '70%', animationDelay: '.1s' },
    //     div5: { top: '90%', animationDelay: '.12s' },
    // };

    const [divStyles] = useState(transition1);

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <div className={styles.bars} style={divStyles.div1}></div>
            <div className={styles.bars} style={divStyles.div2}></div>
            <div className={styles.bars} style={divStyles.div3}></div>
            <div className={styles.bars} style={divStyles.div4}></div>
            <div className={styles.bars} style={divStyles.div5}></div>
            {children}
        </div>
    );
}
