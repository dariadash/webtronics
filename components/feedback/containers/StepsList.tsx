import Image from "next/image";
import React from "react";
import { StepsArrows } from "../parts/StepsArrows";
import style from './StepsList.module.css'

export const StepsList = () => {
    const renderCards = React.useMemo(() => {
        return (
            Array.from(Array(6).keys()).map((item, i) => (
                <div className={style[`div${i + 1}`]} key={i}>
                    <Image
                        src="/frame.svg"
                        alt="Logo"
                        width={146}
                        height={228}
                        priority
                        className={(i % 2 == 0) ? style.frame_left : style.frame_right}
                    />
                    <div className={style.content}>
                        <h4>{`Step${i + 1}`}</h4>
                        <h3>{(i % 2 == 0) ? 'Introduction to Front-End' : 'Overview of Development'}</h3>
                        <p className="p1">
                            Lorem ipsum dolor sit amet consectetur.
                            Elit massa erat vitae non semper quis.
                        </p>
                    </div>
                </div>
            ))
        )
    }, [])

    return (
        <div className={style.wrapper}>
            <h2>Steps</h2>
            <div className={style.parent}>
                {renderCards}
                <div className={style.div7}>
                    <StepsArrows />
                </div>
            </div>
        </div>
    )
}