function ClickEvent () {
    const clickHandler = () => {
        alert("button clicked")
    }

    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default ClickEvent;