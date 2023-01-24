import Image from "next/image";
import React from "react";
import { cards } from "../../../store/mock";
import style from './Technologies.module.css'

export const Technologies = () => {
    const renderCards = React.useMemo(() => {
        return (
            cards.map((item) => (
                <div key={item.id} className={style.card}>
                    <div className={style.card_content}>
                        <Image
                            src={item.svg}
                            alt="Logo"
                            width={162}
                            height={136}
                            priority
                        />
                        <h4>{item.name}</h4>
                    </div>
                </div>
            ))
        )
    }, [])
    return (
        <div className={style.wrapper}>
            <div className={style.content_title}>
                <h2>Programming technologies</h2>
                <p className="p1">
                    By the end, you’ll have the portfolio and interview skills you need to start your new career.
                </p>
            </div>
            <div className={style.cards}>
                {renderCards}
            </div>
        </div>
    )
}