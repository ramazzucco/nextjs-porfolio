import React, { useId, useState } from 'react';
import './select.css';
import { SelectData } from '@/models/select-data.model';
import Image from 'next/image';

export default function Select(data: SelectData) {
    const [selectedValue, setSelectedValue] = useState<any>(data.label);
    const [open, setOpen] = useState<boolean>(false);
    // const [app]: any = useAppContext();
    const id = useId().replaceAll(':', '');

    // useEffect(() => {
    //     setSelectedValue(app.lang);
    // }, [app]);

    // useEffect(() => {
    //     if(open) {
    //        document.addEventListener('click', (e: MouseEvent) => handleClose(e));
    //     } else document.removeEventListener('click', (e: MouseEvent) => handleClose(e));
    //     return () => document.removeEventListener('click', (e: MouseEvent) => handleClose(e));
    // }, [open]);

    // function handleClose(e: MouseEvent) {
    //     console.log(e.target)
    // }

    function handleCallback(value: any) {
        data.callback(value);
        setSelectedValue(value);
        setOpen(false);
    }

    return (
        <div className={`wrapper_select ${id}`}>
            <button onClick={() => setOpen(!open)}>
                <span className="label">{data.label}</span>
                <span
                    className={`material-symbols-outlined icon ${open ? 'down' : 'up'}`}
                >
                    keyboard_arrow_down
                </span>
            </button>
            <div
                className={`content_select ${open ? 'open' : ''}`}
                onMouseLeave={() => setOpen(false)}
            >
                {data.options.map(
                    (
                        opt: {
                            label: string;
                            value: any;
                            icon: string;
                            img: string;
                        },
                        index: number
                    ) => {
                        return (
                            <span
                                key={index}
                                className={`option ${selectedValue === opt.value ? 'selected' : ''}`}
                                onClick={() => handleCallback(opt.value)}
                            >
                                {opt.icon && (
                                    <span className="material-symbols-outlined">
                                        {opt.icon}
                                    </span>
                                )}
                                {opt.img && <Image src={opt.img} alt="" width={33} height={33} />}
                                <label htmlFor={opt.value}>{opt.label}</label>
                            </span>
                        );
                    }
                )}
            </div>
        </div>
    );
}
