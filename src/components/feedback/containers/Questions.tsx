import React from "react";
import { Collapse } from "../../../ui/Collapse";
import style from './Questions.module.css'

export const Questions = () => {

    const renderQuestions = React.useMemo(() => {
        return (
            Array.from(Array(4).keys()).map((item, i) => (
                <Collapse
                    key={i}
                    name="What is the price?"
                >
                    <p>
                        Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
                        This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
                    </p>
                </Collapse>
            ))
        )
    }, [])

    return (
        <div className={style.wrapper}>
            <h2 className={style.content_title}>
                Frequently Asked Questions
            </h2>
            <div className={style.content}>
                <div className={style.question_wrapper}>
                    <p className={style.title}>
                        Do you have any kind of questions? We are here to help.
                    </p>
                </div>

                <div className={style.collapse_list}>
                    <>
                        <Collapse
                            name="What is the price?"
                            openedByDefault
                        >
                            <p>
                                Front-end engineers work closely with designers to make websites beautiful, functional, and fast.
                                This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.
                            </p>
                        </Collapse>
                        {renderQuestions}
                    </>
                </div>
            </div>
        </div >
    )
}