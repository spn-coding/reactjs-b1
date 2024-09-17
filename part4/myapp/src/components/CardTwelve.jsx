import React, { useState } from "react";

export default function CardTwelve()
{
    let idx = 10;

    const [idxState, setIndexState] = useState(idx);

    const handleclick = () =>
    {
        setIndexState(idxState + 1);
    }

    return (
        <div>
            <p>{idxState}</p>
            <button onClick={handleclick}>Click Now</button>
        </div>
    );
}
