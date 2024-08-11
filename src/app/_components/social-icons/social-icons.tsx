import React from 'react';
import './social-icons.css';
import Image from 'next/image';

export default function SocialIcons(props: any) {
    return (
        <div className="social_icons">
            <a
                href="https://www.linkedin.com/in/rsmazzuccogiusseppin/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={`/linkedin-${props.theme}.png`} alt="linkedin icon" width={32} height={32} />
            </a>
            <a
                href="https://api.whatsapp.com/send/?phone=3415853666"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={`/whatsapp-${props.theme}.png`} alt="whatsapp icon" width={32} height={32} />
            </a>
            <button>
                <Image src={`/email-${props.theme}.png`} alt="email icon" width={32} height={32} />
            </button>
            <a href="/files/cv.pdf" download>
                <Image src={`/pdf-${props.theme}.png`} alt="pdf icon" width={32} height={32} />
            </a>
        </div>
    );
}
