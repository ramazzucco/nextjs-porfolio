import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './nav-link.css';
import { useAppContext } from '@/hooks/app';

export default function NavLink(props: any) {
    const [app, setApp]: any = useAppContext();
    const pathname = usePathname();
    const areMenuLinks = props.areMenuLinks;
    const hide = props.hide;

    const routes = [
        { title: 'Home', href: '/home' },
        { title: 'About', href: '/about' },
        { title: 'Projects', href: '/projects' },
        { title: 'Contactme', href: '/contactme' },
    ];

    function handleClick() {
        if (areMenuLinks)
            setApp({
                ...app,
                menuOpened: false,
            });
    }

    return (
        <ul className={`links ${areMenuLinks}`}>
            {/* {!hide ? routes.map((route, index) => {
                return (
                    <li
                        className={pathname === route.href ? 'linkActive' : 'link'}
                        key={index}
                        onClick={handleClick}
                    >
                        <Link href={route.href} style={areMenuLinks ? { animationDelay: `.0${(index*3)}s` }:{}}>{route.title}</Link>
                    </li>
                );
            }) : ''} */}
            {!hide
                ? routes.map((route, index) => {
                      return (
                          <li
                              className={
                                  pathname === route.href
                                      ? 'linkActive'
                                      : 'link'
                              }
                              key={index}
                              onClick={handleClick}
                          >
                              <Link
                                  href={route.href}
                                  style={
                                      areMenuLinks
                                          ? {
                                                animationDelay: `.0${index * 3}s`,
                                            }
                                          : {}
                                  }
                              >
                                  {route.title}
                              </Link>
                          </li>
                      );
                  })
                : ''}
        </ul>
    );
}
