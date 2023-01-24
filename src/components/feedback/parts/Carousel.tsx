import React from "react";
import { PaginationArrows } from "./PaginationArrows";
import style from './Carousel.module.css'
import Image from "next/image";

type PageData = {
    id: number,
    svg: string,
    bigSvg: string,
    label: string,
    discription: string,
}

type PaginationProps = {
    data: PageData[],
}

export const Carousel = ({
    data,
}: PaginationProps) => {
    const [pagesIndex, setPagesIndex] = React.useState([0, 1, 2]);

    function goToPreviousPage() {
        const temp = pagesIndex.slice(2, 3)
        const next = pagesIndex.slice(0, 2)
        setPagesIndex(temp.concat(next))
    }
    function goToNextPage() {
        const temp = pagesIndex.slice(0, 1)
        const prev = pagesIndex.slice(1)
        setPagesIndex(prev.concat(temp))
    }

    return (
        <div className={style.content}>
            <div className={style.text_wrapper}>
                <h4>{data[pagesIndex[0]].label}</h4>
                <p className='p1'>
                    {data[pagesIndex[0]].discription}
                </p>
            </div>
            <div className={style.slider}>
                <div className={style.slider_nav}>
                    <div className={style.pages}>
                        <h4>{pagesIndex[0] + 1}/ </h4><p> 3</p>
                    </div>
                    <PaginationArrows
                        onNextClick={goToNextPage}
                        onPrevClick={goToPreviousPage}
                    />
                </div>
                <div className={style.cards}>
                    <div className={style.card_open}>
                        <div className={style.card_content_open}>
                            <Image
                                src={data[pagesIndex[0]].bigSvg}
                                alt="Logo"
                                width={392}
                                height={422}
                                priority
                                className={style.card_image}
                            />
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.card_content}>
                            <Image
                                src={data[pagesIndex[1]].svg}
                                alt="Logo"
                                width={184}
                                height={422}
                                priority
                                className={style.card_image}
                            />
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.card_content}>
                            <Image
                                src={data[pagesIndex[2]].svg}
                                alt="Logo"
                                width={184}
                                height={422}
                                priority
                                className={style.card_image}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}