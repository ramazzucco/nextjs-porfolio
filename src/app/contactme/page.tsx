'use client';
import { useEffect, useState } from 'react';
import PageTransition from '../_components/page-transition/page-transition';
import { useAppContext } from '@/hooks/app';
import { getDictionary } from '@/utils/dictionary-utils';
import PageLoading from '../_components/loadings/page-loading/page-loading';
import './contact-me.css';

export default function ContactMe() {
    const [dictionary, setDictionary] = useState<{ [key: string]: any } | null>(
        null
    );
    const [theme, setTheme] = useState<string | null>(null);
    const [app]: any = useAppContext();

    useEffect(() => {
        if (app) {
            getDictionary(`/api/language?${app.lang}`).then((res: any) => {
                setDictionary(res.contactme);
            });
        }
    }, [app]);

    useEffect(() => {
        if (app && app.theme) setTheme(app.theme);
    }, [app]);

    function handleFocus(e: any) {
        e.target.previousElementSibling.lastElementChild.classList.add('focus');
    }

    function handleBlur(e: any) {
        e.target.previousElementSibling.lastElementChild.classList.remove(
            'focus'
        );
        e.target.previousElementSibling.lastElementChild.classList.remove(
            'visible'
        );
    }

    function handleChange(e: any) {
        if (e.target.value && e.target.value !== '') {
            e.target.previousElementSibling.lastElementChild.classList.remove(
                'focus'
            );
            e.target.previousElementSibling.lastElementChild.classList.add(
                'visible'
            );
        } else {
            e.target.previousElementSibling.lastElementChild.classList.add(
                'focus'
            );
            e.target.previousElementSibling.lastElementChild.classList.remove(
                'visible'
            );
        }
    }

    return dictionary ? (
        <PageTransition>
            <main className={`container_page contactme ${theme}`}>
                <h1>{dictionary.title}</h1>
                <div className="wrapper_form">
                    <form>
                        <div className="form_item">
                            <label htmlFor="name">
                                <span>{dictionary.form.name.label}</span>
                                <span className="material-symbols-outlined icon">
                                    keyboard_double_arrow_left
                                </span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onFocus={(e) => handleFocus(e)}
                                onBlur={(e) => handleBlur(e)}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form_item">
                            <label htmlFor="email">
                                <span>{dictionary.form.email.label}</span>
                                <span className="material-symbols-outlined icon">
                                    keyboard_double_arrow_left
                                </span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                onFocus={(e) => handleFocus(e)}
                                onBlur={(e) => handleBlur(e)}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="form_item">
                            <label htmlFor="message">
                                <span>{dictionary.form.message.label}</span>
                                <span className="material-symbols-outlined icon">
                                    keyboard_double_arrow_left
                                </span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                onFocus={(e) => handleFocus(e)}
                                onBlur={(e) => handleBlur(e)}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </form>
                </div>
            </main>
        </PageTransition>
    ) : (
        <PageLoading />
    );
}
