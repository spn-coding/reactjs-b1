// import React from "react";

// export default function CardNine()
// {

//     let count = 1;

//     const handleClick = () =>
//     {
//         count++;
//         console.log(count); // increment in console, dom ui don't increase!
//     }

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={handleClick}>Add Task</button>
//         </div>
//     );
// }





import React from "react";

export default class CardNine extends React.Component
{
    render()
    {
        let count = 1;

        const handleClick = () =>
        {
            count++;
            console.log(count); // increment in console, dom ui don't increase!
        }

        return (
            <div>
                <p>{count}</p>
                <button onClick={handleClick}>Add Task</button>
            </div>
        );
    }
}