'use client';
import { useEffect, useState } from 'react';
import PageTransition from '../_components/page-transition/page-transition';
import { useAppContext } from '@/hooks/app';
import './home.css';
import PageLoading from '../_components/loadings/page-loading/page-loading';
import { getDictionary } from '@/utils/dictionary-utils';
import SocialIcons from '../_components/social-icons/social-icons';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [dictionary, setDictionary] = useState<{ [key: string]: any } | null>(
        null
    );
    const [theme, setTheme] = useState<string | null>(null);
    const [app]: any = useAppContext();
    const router = useRouter();

    useEffect(() => {
        if (app) {
            getDictionary(`/src/api/language?${app.lang}`).then((res: any) => {
                setDictionary(res.home);
            });
        }
    }, [app]);

    useEffect(() => {
        if (app && app.theme) setTheme(app.theme);
    }, [app]);

    return dictionary ? (
        <PageTransition>
            <main className={`container_page home ${theme}`}>
                <div className="wrapper">
                    <div className="image_container"></div>
                    <div className="text">
                        <strong>{dictionary ? dictionary.welcome : ''}</strong>
                        <p>{dictionary ? dictionary.intro_line_1 : ''}</p>
                        <p>{dictionary ? dictionary.intro_line_2 : ''}</p>
                        <button
                            className="projects"
                            onClick={() => router.push('/projects')}
                        >
                            {dictionary ? dictionary.projects : 'Projectos'}
                        </button>
                    </div>
                    <SocialIcons theme={theme} />
                </div>
            </main>
        </PageTransition>
    ) : (
        <PageLoading />
    );
}
