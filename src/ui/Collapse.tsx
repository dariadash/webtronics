import Image from 'next/image'
import React from 'react'
import style from './Collapse.module.css'

type Props = {
    name: string,
    openedByDefault?: boolean
    children?: React.ReactNode
}

export const Collapse: React.FC<Props> = ({ children, name, openedByDefault }) => {
    const [opened, setOpened] = React.useState(false)

    React.useEffect(() => {
        if (openedByDefault) {
            setOpened(openedByDefault)
        }
    }, [openedByDefault])

    return (
        <div className={opened ? style.collapse_open : style.collapse}>
            <div className={opened ? style.collapse_open_content : style.collapse_content}>
                <h4 className={style.collapse_label}
                    onClick={() => setOpened(!opened)}
                >
                    {name}
                    <Image
                        src={opened ? "/plus.svg" : "/minus.svg"}
                        alt="Logo"
                        width={16}
                        height={16}
                        priority
                    />
                </h4>
                {opened && (
                    <div>{children}</div>
                )}
            </div>
        </div>
    )
}
