import Image from "next/image";
import React from "react";
import style from './Gallery.module.css'

export const Gallery = () => {
    return (
        <div className={style.wrapper}>
            <h2>Gallery</h2>
            <div className={style.parent}>
                <div className={style.div1}>
                    <p className='p1'>
                        By the end of this course, you will be able to develop and publish your very own Google Chrome extension!
                        In this course we will focus on coding exercises and projects.
                    </p>
                </div>
                <Image
                    src="/developer1.svg"
                    alt="Logo"
                    width={600}
                    height={434}
                    priority
                    className={style.div2}
                />

                <Image
                    src="/developer2.svg"
                    alt="Logo"
                    width={288}
                    height={209}
                    priority
                    className={style.div3}
                />
                <Image
                    src="/developer3.svg"
                    alt="Logo"
                    width={288}
                    height={209}
                    priority
                    className={style.div4}
                />
                <Image
                    src="/developer4.svg"
                    alt="Logo"
                    width={288}
                    height={434}
                    priority
                    className={style.div5}
                />
                <div className={style.div6}>
                    <p className='p1'>
                        If you would like to learn web development and get a job in the tech industry,
                        you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more
                        with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly.
                        We will begin with the very basics of HTML and build a simple web page.
                    </p>
                </div>
            </div>
        </div>
    )
}