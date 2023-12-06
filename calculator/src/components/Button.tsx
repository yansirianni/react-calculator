const Button = (props: any) => {

    const classes = "btn btn-primary " + props.className
    console.log(classes)
    return (
        <>
            <button type="button" className={classes}>{props.text}</button>
        </>
    )
}

export default Button;