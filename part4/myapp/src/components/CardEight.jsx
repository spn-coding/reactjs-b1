// import React from "react";

// function CardEight()
// {
//     const listgroup = {
//         listStyleType: "none",
//         padding: "0",
//         margin: 0,
//         color: "violet"
//     }

//     const colors = ['red', 'green', 'blue', 'white', "black"];

//     return (
//         <div>
//             <ul style={listgroup}>
//                 {colors.map((color, idx) => (
//                     <li key={idx}>{color}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default CardEight;





import React, { Component } from "react";

class CardEight extends Component
{
    render()
    {
        const listgroup = {
            listStyleType: "none",
            padding: "0",
            margin: 0,
            color: "violet"
        }

        const colors = ['red', 'green', 'blue', 'white', "black"];

        return (
            <div>
                <ul style={listgroup}>
                    {colors.map((color, idx) => (
                        <li key={idx}>{color}</li>
                    ))}
                </ul>
            </div >
        );
    }
}

export default CardEight;