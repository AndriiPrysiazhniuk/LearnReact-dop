type ButtonTypeProps = {
    nickName: string,
    Callback: () => void
}

export const Button = (props: ButtonTypeProps) => {

    const onClickHandler = () => {
        props.Callback()
    }

    return (
        <button onClick={onClickHandler}>{props.nickName}</button>
    )
}