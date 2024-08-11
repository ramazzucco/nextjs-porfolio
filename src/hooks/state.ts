'use client';
import 'react'
import { useEffect, useState } from 'react';
export const stateName = 'klasd8912jke-09asd-12c918';
export const state = null;

export function Save(state: any) {
    useEffect(() => {
        localStorage.setItem(stateName, JSON.stringify(state));
    }, [state])
}

export function GetState(statePropertyName?: string) {
    const [state, setState] = useState(null);
    // const state: { [key: string]: any } = JSON.parse(
    //     localStorage.getItem(stateName)!
    // );
    useEffect(() => {
        if(!state) {
            setState(JSON.parse(
                localStorage.getItem(stateName)!
            ))
        }
    }, [state])
    if (statePropertyName && state) return state[statePropertyName];
    else if (!statePropertyName && state) return state;
    else return state;
}
