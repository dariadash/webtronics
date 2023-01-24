import Image from "next/image";
import React from "react";
import style from './PaginationArrows.module.css'

type PaginationArrowsProps = {
    onPrevClick: () => void,
    onNextClick: () => void,
}

export const PaginationArrows = ({ onPrevClick, onNextClick }: PaginationArrowsProps) => {
    return (
        <div className={style.arrows}>
            <div className={style.arrow_wrapper}>
                <button
                    onClick={onPrevClick}
                    className={style.arrow}>
                    <Image
                        src="/arrow_left.svg"
                        alt="Logo"
                        width={20}
                        height={20}
                        priority
                    />
                </button>
            </div>
            <div className={style.arrow_wrapper}>
                <button
                    onClick={onNextClick}
                    className={style.arrow}>
                    <Image
                        src="/arrow_right.svg"
                        alt="Logo"
                        width={20}
                        height={20}
                        priority
                    />
                </button>
            </div>
        </div>
    )
}