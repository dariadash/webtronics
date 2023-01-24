import Image from "next/image";
import React from "react";
import style from './AboutUs.module.css';

export const AboutUs = () => {
    return (
        <div className={style.wrapper}>
            <h2>About Us</h2>
            <div className={style.content}>
                <div className={style.mentors}>
                    <h3>Mentors</h3>
                    <Image
                        src="/line.svg"
                        alt="Logo"
                        width={394}
                        height={157}
                        priority
                    />
                    <div className={style.cards}>
                        <div className={style.card}>
                            <div className={style.image_border}>
                                <Image
                                    src="/photo2.svg"
                                    alt="Logo"
                                    width={184}
                                    height={184}
                                    priority
                                    className={style.image}
                                />
                            </div>
                            <h4>Wade Warren</h4>
                            <p className="p2">
                                Front-end engineers work closely with designers
                            </p>
                        </div>
                        <div className={style.card2}>
                            <div className={style.image_border}>
                                <Image
                                    src="/photo1.svg"
                                    alt="Logo"
                                    width={184}
                                    height={184}
                                    priority
                                    className={style.image}
                                />
                            </div>
                            <h4>Kristin Watson</h4>
                            <p className="p2">
                                Front-end engineers work closely with designers
                            </p>
                        </div>
                        <div className={style.card3}>
                            <div className={style.image_border}>
                                <Image
                                    src="/photo3.svg"
                                    alt="Logo"
                                    width={184}
                                    height={184}
                                    priority
                                    className={style.image}
                                />
                            </div>
                            <h4>Robert Fox</h4>
                            <p className="p2">
                                Front-end engineers work closely with designers
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.text}>
                    <p className="p1" style={{ maxWidth: '460px' }}>
                        Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
                    </p>
                    <Image
                        src="/FrontEnd.svg"
                        alt="Logo"
                        width={780}
                        height={185}
                        priority
                        className={style.text_image}
                    />
                </div>
            </div>
        </div >
    )
}