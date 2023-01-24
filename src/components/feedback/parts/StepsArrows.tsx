import Image from "next/image";
import React from "react";
import style from './StepsArrows.module.css'

export const StepsArrows = () => {
    return (
        <div className={style.line}>
            <div className={style.arrow1}>
                <Image
                    src="/dashed_arrow.svg"
                    alt="Logo"
                    width={80}
                    height={8}
                    priority
                />
                <div className={style.dot} />
            </div>
            <div className={style.arrow2}>
                <Image
                    src="/dashed_arrow.svg"
                    alt="Logo"
                    width={80}
                    height={8}
                    priority
                />
                <div className={style.dot} />
            </div>
            <div className={style.arrow3}>
                <Image
                    src="/dashed_arrow.svg"
                    alt="Logo"
                    width={80}
                    height={8}
                    priority
                />
                <div className={style.dot} />
            </div>
            <div className={style.arrow4}>
                <Image
                    src="/dashed_arrow.svg"
                    alt="Logo"
                    width={80}
                    height={8}
                    priority
                />
                <div className={style.dot} />
            </div>
            <div className={style.arrow5}>
                <Image
                    src="/dashed_arrow.svg"
                    alt="Logo"
                    width={80}
                    height={8}
                    priority
                />
                <div className={style.dot} />
            </div>
            <div className={style.arrow6}>
                <Image
                    src="/dashed_arrow.svg"
                    alt="Logo"
                    width={80}
                    height={8}
                    priority
                />
                <div className={style.dot} />
            </div>
        </div>
    )
}