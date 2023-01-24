import React from "react";
import { AboutUs } from "../containers/AboutUs";
import { PageTitle } from "../containers/PageTitle";
import { Questions } from "../containers/Questions";
import { Review } from "../containers/Review";
import { Technologies } from "../containers/Technologies";
import { Gallery } from '../containers/Gallery'
import { Footer } from "../parts/Footer";
import style from './FeedbackPage.module.css'
import { ContactUsForm } from "../containers/ContactUsForm";
import { StepsList } from "../containers/StepsList";

export const FeedbackPage = () => {
    return (
        <div className={style.page_wrapper}>
            <div className={style.page_title}>
                <PageTitle />
            </div>
            <div className={style.page_content}>
                <AboutUs />
                <Technologies />
                <StepsList />
                <Questions />
                <Review />
                <Gallery />
                <ContactUsForm />
            </div>
            <Footer />
        </div>
    )
}