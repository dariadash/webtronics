import Image from "next/image";
import React from "react";
import style from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.content}>
                <div className={style.column}>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={169}
                        height={33}
                        priority
                        className="icon"
                    />
                    <p>
                        Wisconsin Ave, Suite 700
                        Chevy Chase, Maryland 20815
                    </p>
                </div>
                <div className={style.column}>
                    <h4 className={style.column_label}>
                        Company
                    </h4>
                    <div className={style.column_content}>
                        <a className="p2">About Us</a>
                        <a className="p2">Steps</a>
                        <a className="p2">FAQs</a>
                        <a className="p2">Review</a>
                        <a className="p2">Gallery</a>
                    </div>
                </div>
                <div className={style.column}>
                    <h4 className={style.column_label}>
                        Social media
                    </h4>
                    <div className={style.social_media}>
                        <Image
                            src="/facebook.svg"
                            alt="Logo"
                            width={22}
                            height={22}
                            priority
                            className="icon"
                        />
                        <Image
                            src="/gitlub.svg"
                            alt="Logo"
                            width={22}
                            height={22}
                            priority
                            className="icon"
                        />
                        <Image
                            src="/twitter.svg"
                            alt="Logo"
                            width={22}
                            height={22}
                            priority
                            className="icon"
                        />
                        <Image
                            src="/linkedin.svg"
                            alt="Logo"
                            width={22}
                            height={22}
                            priority
                            className="icon"
                        />
                    </div>
                </div>
            </div>
        </footer>
    )
}