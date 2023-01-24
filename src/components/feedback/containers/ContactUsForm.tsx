import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { phoneRegExp } from "../../../store/consts";
import { RequestStatus, User } from "../../../store/reducers/form";
import { postData } from "../../../store/reducers/form/thunks";
import { Input } from "../../../ui";
import { Button } from "../../../ui/Button";
import style from './ContactUsForm.module.css'

const yupObject = yup.object().shape({
    id: yup.number(),
    name: yup
        .string()
        .required("Пожалуйста, введите ваше имя.")
        .max(40, "Максимальное число знаков 40")
    ,
    email: yup
        .string()
        .required("Пожалуйста, введите ваш email.")
        .email('Некорректный email. Email может содержать только латинские буквы, цифры, `@` и `.`')
    ,
    phone: yup
        .string()
        .required("Пожалуйста, введите ваш телефон.")
        .max(12, "Максимальное число знаков 12")
        .min(9, "Максимальное число знаков 9")
        .matches(phoneRegExp, 'Некорректный номер телефона')
}).required();

export const ContactUsForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<User>({
        mode: 'onSubmit',
        resolver: yupResolver(yupObject)
    });
    const formStatus = useAppSelector((state) => state.formReducer.status)
    const dispatch = useAppDispatch()

    const onSubmit = (data: User): void => {
        dispatch(postData({
            id: data.id,
            name: data.name,
            phone: data.phone,
            email: data.email,
        }));
    };

    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <h2>Contact  us</h2>
                <p className="p1">
                    Do you have any kind of help please contact with us.
                </p>
                <form
                    className={style.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={style.inputs}>
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    type="text"
                                    value={value || ''}
                                    onChange={onChange}
                                    errorText={errors ? errors?.name?.message : null}
                                    placeholder='Name'
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                            )}
                            name="name"
                            control={control}
                        />
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    type="tel"
                                    value={value || ''}
                                    onChange={onChange}
                                    errorText={errors ? errors?.phone?.message : null}
                                    placeholder='Phone'
                                    aria-invalid={errors.phone ? "true" : "false"}
                                />
                            )}
                            name="phone"
                            control={control}
                        />
                        <Controller
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    type="email"
                                    value={value || ''}
                                    onChange={onChange}
                                    errorText={errors ? errors?.email?.message : null}
                                    placeholder='E-mail'
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                            )}
                            name="email"
                            control={control}
                        />
                    </div>
                    <Button type="submit">
                        Send
                    </Button>
                    {formStatus === RequestStatus.Succeeded && <p>Data accepted.</p>}
                </form>
            </div>
        </div>
    )
}