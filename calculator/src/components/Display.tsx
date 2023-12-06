const Display = (props: any) => {
    return (
        <div>
            <input type="text" disabled value={props.value}/>
        </div>
    )
}

export default Display;