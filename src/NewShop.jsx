import React, { useState, useEffect } from "react";

function NewShop() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleChange);
        console.log("Event listener");

    });

    function handleChange() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p>Window Width:{width}px</p>
        <p>Window Height:{height}px</p>
    </>);
}

export default NewShop