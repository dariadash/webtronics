import React from 'react'
import style from './Input.module.css'

type Props = {
    onChange: (s: string) => void,
    value: string,
    placeholder?: string,
    type?: string
    errorText?: string | null | undefined,
    disabled?: boolean
    onClick?: () => void,
}

export const Input: React.FC<Props> = ({
    type,
    onChange,
    value,
    placeholder,
    errorText,
    disabled,
    onClick,
}) => {
    const containerRef = React.useRef<HTMLInputElement>(null)
    const handleFocus = () => {
        if (onClick) {
            onClick()
        }
        containerRef.current?.focus()
    }
    return (
        <div className={style.wrapper}>
            <div
                ref={containerRef}
                onClick={handleFocus}
                className={errorText ? style.container_invalid : style.container}
            >
                <input
                    disabled={disabled}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={style.input_element}
                />
            </div>
            {errorText &&
                <p className={style.input_error}>
                    {errorText}
                </p>
            }
        </div>
    )
}
