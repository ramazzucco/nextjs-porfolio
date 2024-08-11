import React from 'react';
import ToggleTheme from '../toggles/theme/toggle-theme';
import Select from '../select/select';
import NavLink from '../nav-links/nav-link';
import SocialIcons from '../social-icons/social-icons';
import './menu.css';
import { useAppContext } from '@/hooks/app';

export default function Menu(props: any) {
    const [app, setApp]: any = useAppContext();
    const select = props.select;
    const theme = props.theme;
    const showButtonClose = props.showButtonClose;

    function setMenuOpened(state: boolean) {
        setApp({
            ...app,
            menuOpened: state,
        });
    }

    function handleHideMenu(event: any) {
        if (event.target.className.includes('menu show')) setMenuOpened(false);
    }

    return (
        <div
            className={`menu ${app?.menuOpened ? 'show' : ''}`}
            onClick={(event: any) => handleHideMenu(event)}
        >
            <div className={`content ${showButtonClose ? 'w100' : ''}`}>
                <div className="menu_header">
                    <div className="select_container">
                        {select ? (
                            <Select
                                label={select.label}
                                options={select.options}
                                callback={select.callback}
                            />
                        ) : (
                            <p>Loading select...</p>
                        )}
                    </div>
                    {showButtonClose && (
                        <button
                            className="closeMenu"
                            onClick={() => setMenuOpened(false)}
                        >
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </button>
                    )}
                    <div className="checkbox_container">
                        <ToggleTheme />
                    </div>
                </div>
                <div className="wrapper_links">
                    <NavLink areMenuLinks={'menu_links'} hide={false} />
                    <SocialIcons theme={theme} />
                </div>
            </div>
        </div>
    );
}
