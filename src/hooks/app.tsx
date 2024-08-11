'use client';
import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from 'react';
import { GetState, Save } from './state';
import { AppStateModel } from '@/models/app-state.model';
import { redirect, usePathname } from 'next/navigation';

const initialState: AppStateModel = {
    lang: 'es',
    theme: 'light',
    menuOpened: false,
};
const AppContext: any = createContext({});

export function AppProvider(props: PropsWithChildren) {
    const [app, setApp] = useState<AppStateModel | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/') redirect('/home');
    }, [pathname]);

    useEffect(() => {
        const state = GetState();
        if (state) setApp(state);
        Save(state ? state : initialState);
    }, []);

    useEffect(() => {
        if (app) Save(app);
    }, [app]);

    return (
        <AppContext.Provider value={[app, setApp]}>
            {props.children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
