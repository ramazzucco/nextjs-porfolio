import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/hooks/app';
import { getDictionary } from '@/utils/dictionary-utils';
import './navigations.css';

import HeaderBrand from './brand-header/header-brand';
import NavLink from './nav-links/nav-link';
import Menu from './menu/menu';
import { usePathname } from 'next/navigation';

export default function NavigationBar() {
    const [dictionary, setDictionary] = useState<{ [key: string]: any } | null>(
        null
    );
    const [language, setLanguage] = useState<string | null>(null);
    const [select, setSelect] = useState<any>(null);
    const [hideNavLinks, setHideNavLins] = useState<boolean>(false);
    const [showButtonClose, setShowButtonClose] = useState<boolean>(false);
    const [theme, setTheme] = useState<string>('light');
    const [app, setApp]: any = useAppContext();
    const pathname = usePathname();

    useEffect(() => {
        if (app) {
            getDictionary('/api/navigation?' + app.lang).then((res: any) => {
                setDictionary(res.navigation);
            });
            setTheme(app.theme);
            const body = document.querySelector('body');
            if (body)
                body.style.background =
                    app.theme === 'dark' ? 'var(--blue-dark)' : '';
        }
    }, [app]);

    useEffect(() => {
        if (dictionary) {
            setSelect({
                label: dictionary.select.label,
                options: Object.entries(dictionary.langauges).map(
                    ([key, value]) => {
                        return {
                            label: value,
                            value: key,
                            img:
                                key === 'es' ? 'flag_arg.png' : 'flag_eeuu.png',
                        };
                    }
                ),
                callback: setLanguage,
            });
        }
    }, [dictionary]);

    useEffect(() => {
        if (language) {
            setApp({ ...app, lang: language });
        }
    }, [language, app, setApp]);

    function handleSetHideNavLinks(e: any, path: string) {
        if (path === '/home') {
            setHideNavLins(
                e ? e.target.innerWidth < 768 : window.innerWidth < 768
            );
        } else {
            setHideNavLins(true);
        }
        setShowButtonClose(
            e ? e.target.innerWidth < 768 : window.innerWidth < 768
        );
    }

    useEffect(() => {
        handleSetHideNavLinks(undefined, pathname);
        window.onresize = (e: any) => {
            handleSetHideNavLinks(e, pathname);
        };
    }, [pathname]);

    function toggleMenu() {
        setApp({
            ...app,
            menuOpened: true,
        });
    }

    return (
        <div className={theme}>
            <nav className="navContainer">
                <HeaderBrand />
                <NavLink hide={hideNavLinks} />
                <button onClick={toggleMenu} className="button_menu">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </nav>
            <Menu
                select={select}
                theme={theme}
                showButtonClose={showButtonClose}
            />
        </div>
    );
}
