import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch } from "../../../hooks";
import { User } from "../../../store/reducers/form";
import { postData } from "../../../store/reducers/form/thunks";
import { Input } from "../../../ui";
import { Button } from "../../../ui/Button";
import style from './ContactUsForm.module.css'

export const ContactUsForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<User>();
    const dispatch = useAppDispatch()

    const onSubmit = (data: User): void => {
        dispatch(postData(data))
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
                            render={({
                                field: { onChange, value }
                            }) => (
                                <Input
                                    type="text"
                                    value={value}
                                    onChange={onChange}
                                    errorText={errors?.name?.type === 'maxLength'
                                        ? "Максимальное число знаков 20" : null
                                    }
                                    placeholder='Name'
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                            )}
                            name="name"
                            control={control}
                            rules={{
                                required: true,
                                maxLength: 20
                            }}
                        />
                        <Controller
                            render={({
                                field: { onChange, value }
                            }) => (
                                <Input
                                    type="tel"
                                    value={value}
                                    onChange={onChange}
                                    errorText={errors?.phone?.type === 'pattern'
                                        ? "Некорректный номер" : null
                                    }
                                    placeholder='Phone'
                                    aria-invalid={errors.phone ? "true" : "false"}
                                />
                            )}
                            name="phone"
                            control={control}
                            rules={{
                                required: true,
                                minLength: 9,
                                maxLength: 12,
                                pattern: /^[+]?[0-9]{9,12}$/
                            }}
                        />
                        <Controller
                            render={({
                                field: { onChange, value }
                            }) => (
                                <Input
                                    type="email"
                                    value={value}
                                    onChange={onChange}
                                    errorText={errors?.email?.type === 'pattern'
                                        ? "Адрес электронной почты должен содержать знак @" : null
                                    }
                                    placeholder='E-mail'
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                            )}
                            name="email"
                            control={control}
                            rules={{
                                required: true,
                                pattern: /^\S+@\S+$/i
                            }}
                        />
                    </div>
                    <Button type="submit" >
                        Send
                    </Button>
                </form>
            </div>
        </div>
    )
}