import React from "react";
import { reviewPages } from "../../../store/mock";
import { Carousel } from "../parts/Carousel";
import style from './Review.module.css'

export const Review = () => {
    return (
        <div className={style.wrapper}>
            <h2>Review</h2>
            <Carousel data={reviewPages} />
        </div>
    )
}