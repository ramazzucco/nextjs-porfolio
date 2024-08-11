'use client';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/hooks/app';
import { getDictionary } from '@/utils/dictionary-utils';
import './about.css';
import PageTransition from '../_components/page-transition/page-transition';
import PageLoading from '../_components/loadings/page-loading/page-loading';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    const [dictionary, setDictionary] = useState<{ [key: string]: any } | null>(
        null
    );
    const [content, setContent] = useState<string | null>(null);
    const [theme, setTheme] = useState<string | null>(null);
    const [app]: any = useAppContext();

    useEffect(() => {
        if (app) {
            getDictionary(`/api/language?${app.lang}`).then((res: any) => {
                if (res && res.about) {
                    setDictionary(res.about);
                    setContent(res.about.buttons.presentation_letter);
                }
            });
        }
    }, [app]);

    useEffect(() => {
        if (app && app.theme) setTheme(app.theme);
    }, [app]);

    function showPresentationLetter() {
        return (
            content &&
            ['Carta de presentación', 'Presentation letter'].includes(content)
        );
    }

    function showStudiesAndQualifications() {
        return (
            content &&
            ['Estudio y aptitudes', 'Studies and qualifications'].includes(
                content
            )
        );
    }

    function PresentationLetter() {
        return (
            <div
                className={`content bio ${showPresentationLetter() ? 'show' : ''}`}
            >
                <div className="text">
                    <h1>{dictionary?.presentation_letter.title}</h1>
                    <h4>{dictionary?.presentation_letter.text_line_1}</h4>
                    <p>{dictionary?.presentation_letter.text_line_2}</p>
                    <p>{dictionary?.presentation_letter.text_line_3}</p>
                    <p>{dictionary?.presentation_letter.text_line_4}</p>
                </div>
                <div className="signature">
                    <Image src="/signature.png" alt="signature" width={200} height={100} />
                </div>
            </div>
        );
    }

    function StudiesAndQualifications() {
        return (
            <div
                className={`content studies ${showStudiesAndQualifications() ? 'show' : ''}`}
            >
                <div className="text">
                    <h1>{dictionary?.studies_qualifications.title}</h1>
                    <p>
                        Mis estudios fueron realizados en el instituto 'Digital
                        House', de la ciudad de Rosario, Santa Fe. Donde hice el
                        curso de desarrollador web fullstack.
                    </p>
                    <p>
                        Visitar Digital House{' '}
                        <Link
                            href="https://www.digitalhouse.com/"
                            target="_blanck"
                        >
                            aqui
                        </Link>
                    </p>
                </div>
            </div>
        );
    }

    return dictionary ? (
        <PageTransition>
            <main className={`container_page about ${theme}`}>
                <div className="about__content scroll">
                    {PresentationLetter()}
                    {StudiesAndQualifications()}
                    <div className="buttons">
                        <button
                            onClick={() =>
                                setContent(
                                    dictionary.buttons.presentation_letter
                                )
                            }
                            className={`left ${showStudiesAndQualifications() ? 'show' : ''}`}
                        >
                            <span className="material-symbols-outlined icon">
                                arrow_circle_left
                            </span>
                            <span className="title">
                                {dictionary.buttons.presentation_letter}
                            </span>
                        </button>
                        <button
                            onClick={() =>
                                setContent(
                                    dictionary.buttons.studies_qualifications
                                )
                            }
                            className={`right ${showPresentationLetter() ? 'show' : ''}`}
                        >
                            <span className="title">
                                {dictionary.buttons.studies_qualifications}
                            </span>
                            <span className="material-symbols-outlined icon">
                                arrow_circle_right
                            </span>
                        </button>
                    </div>
                </div>
            </main>
        </PageTransition>
    ) : (
        <PageLoading />
    );
}
