// import React from "react";

// export default function CardSeven()
// {
//     let idx = 1;
//     const val = 10;

//     const getidx = () =>
//     {
//         return idx;
//     }

//     const getval = () =>
//     {
//         return val === 0 ? "Zero Value" : `Value Number is ${val}`;
//     }

//     const getvalue = () =>
//     {
//         if (val === 0)
//         {
//             return "Zero Value";
//         } else
//         {
//             return `Value Number is ${val}`;
//         }
//     }

//     return (
//         <div>
//             <p>Index Number is = {idx}</p>
//             <p>Index Number is = {getidx()}</p>

//             <p>Value is = {val}</p>
//             <p>{getval()}</p>
//             <p>{getvalue()}</p>
//         </div>
//     );
// }

import React from "react";

export default class CardSeven extends React.Component
{
    render()
    {

        let idx = 1;
        const val = 10;

        const getidx = () =>
        {
            return idx;
        };

        const getval = () =>
        {
            return val === 0 ? "Zero Value" : `Value Number is ${val}`;
        };

        const getvalue = () =>
        {
            if (val === 0)
            {
                return "Zero Value";
            } else
            {
                return `Value Number is ${val}`;
            }
        };

        return (
            <div>
                <p>Index Number is = {idx}</p>
                <p>Index Number is = {getidx()}</p>

                <p>Value is = {val}</p>
                <p>{getval()}</p>
                <p>{getvalue()}</p>
            </div>
        );
    }
}
