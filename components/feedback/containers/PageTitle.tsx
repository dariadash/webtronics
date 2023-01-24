import React from "react";
import { Button } from "../../../ui/Button";
import { Header } from "../parts/Header";
import title from './PageTitle.module.css'

export const PageTitle = () => {
    return (
        <div className={title.wrapper}>
            <Header />
            <div>
                <div className={title.line}>
                    <h1>
                        Front-End
                    </h1>
                    <div className={title.text}>
                        <p className='p1'>
                            Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).
                        </p>
                    </div>
                </div>
                <div className={title.line}>
                    <Button onClick={() => { }}>Start my career change</Button>
                    <h1>
                        Developer
                    </h1>
                </div>
                <div className={title.last_line}>
                    <h3>
                        Courses
                    </h3>
                </div>
            </div>
        </div>
    )
}