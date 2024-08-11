'use client';
export const stateName = 'klasd8912jke-09asd-12c918';
export const state = null;

export function Save(state: any) {
    localStorage.setItem(stateName, JSON.stringify(state));
}

export function GetState(statePropertyName?: string) {
    const state: { [key: string]: any } = JSON.parse(
        window.localStorage.getItem(stateName)!
    );
    if (statePropertyName && state) return state[statePropertyName];
    else if (!statePropertyName && state) return state;
    else return state;
}
