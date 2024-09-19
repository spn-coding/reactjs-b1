// import React from "react";

// const accessories = {
//     monitor: "AOC",
//     keyboard: "Logitech",
//     mouse: "A4Tech",
//     speaker: "Microlab"
// }

// const DivEight = () =>
// {
//     return (
//         <section>
//             <h2>My Desktop</h2>

//             <ul>
//                 <li>{JSON.stringify(accessories)}</li>
//                 <li>{JSON.stringify(Object.keys(accessories))}</li>
//                 <li>{JSON.stringify(Object.values(accessories))}</li>
//             </ul>

//             <ul>
//                 {Object.keys(accessories).map(key => (
//                     <li key={key}>{key} = {accessories[key]}</li>
//                 ))}
//             </ul>


//             <ul>
//                 {Object.values(accessories).map((value, idx) => (
//                     <li key={idx}>{++idx} = {value}</li>
//                 ))}
//             </ul>

//         </section>
//     );
// }

// export default DivEight;








import React from "react";

const accessories = {
    monitor: "AOC",
    keyboard: "Logitech",
    mouse: "A4Tech",
    speaker: "Microlab"
}

class DivEight extends React.Component
{
    render()
    {
        return (
            <section>
                <h2>My Desktop</h2>

                <ul>
                    <li>{JSON.stringify(accessories)}</li>
                    <li>{JSON.stringify(Object.keys(accessories))}</li>
                    <li>{JSON.stringify(Object.values(accessories))}</li>
                </ul>

                <ul>
                    {Object.keys(accessories).map(key => (
                        <li key={key}>{key} = {accessories[key]}</li>
                    ))}
                </ul>


                <ul>
                    {Object.values(accessories).map((value, idx) => (
                        <li key={idx}>{++idx} = {value}</li>
                    ))}
                </ul>

            </section >
        );
    }
}

export default DivEight;