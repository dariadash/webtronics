import React from "react";
import header from './Header.module.css'
import Image from 'next/image'

export const Header = () => {
    return (
        <header className={header.wrapper}>
            <Image
                src="/logo.svg"
                alt="Logo"
                width={169}
                height={33}
                priority
                className="icon"
            />
            <nav className={header.links}>
                <a>About</a>
                <a>Programs</a>
                <a>Steps</a>
                <a>Questions</a>
                <a>Get in touch</a>
            </nav>
        </header>
    )
}