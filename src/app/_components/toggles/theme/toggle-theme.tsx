import React, { useEffect, useState } from 'react';
import './toggle-theme.css';
import { useAppContext } from '@/hooks/app';
import Image from 'next/image';

export default function ToggleTheme() {
    const [checked, setChecked] = useState<boolean>(false);
    const [app, setApp]: any = useAppContext();

    useEffect(() => {
        if (app && app.theme) setChecked(app.theme === 'dark');
    }, [app]);

    function handleChecked() {
        setChecked(!checked);
        setApp({ ...app, theme: checked ? 'light' : 'dark' });
    }

    return (
        <div className="checkbox">
            <input
                type="checkbox"
                id="darkmode-toggle"
                onChange={handleChecked}
                checked={checked}
            />
            <label htmlFor="darkmode-toggle">
                {checked ? (
                    <Image
                        src="/moon.svg"
                        alt="icon of moon"
                        className="moon"
                        style={checked ? { opacity: 1 } : {}}
                        width={22}
                        height={22}
                    />
                ) : (
                    <Image
                        src="/sun.svg"
                        alt="icon of sun"
                        className="sun"
                        style={checked ? { opacity: 0 } : {}}
                        width={22}
                        height={22}
                    />
                )}
            </label>
            <div className="checkbox_background"></div>
        </div>
    );
}
