// import React, { Fragment } from "react";

// export default function CardFive()
// {
//     const greeting = "I am card five again by variable";
//     return (
//         // <div>
//         //     <h4>I am card five</h4>
//         //     <h4>I am card five again</h4>
//         // </div>

//         // <>
//         //     <h4>I am card five</h4>
//         //     <h4>I am card five again</h4>
//         //     <h5>{greeting}</h5>
//         // </>

//         // <React.StrictMode>
//         //     <h4>I am card five</h4>
//         //     <h4>I am card five again</h4>
//         //     <h5>{greeting}</h5>
//         // </React.StrictMode>

//         // <React.Fragment>
//         //     <h4>I am card five</h4>
//         //     <h4>I am card five again</h4>
//         //     <h5>{greeting}</h5>
//         // </React.Fragment>

//         <Fragment>
//             <h4>I am card five</h4>
//             <h4>I am card five again</h4>
//             <h5>{greeting}</h5>
//         </Fragment>
//     );
// }





import React, { Component, Fragment } from "react";

export default class CardFive extends Component
{

    render()
    {
        const greeting = "I am card five again by variable";
        return (
            // <div>
            //     <h4>I am card five</h4>
            //     <h4>I am card five again</h4>
            // </div>

            // <>
            //     <h4>I am card five</h4>
            //     <h4>I am card five again</h4>
            //     <h5>{greeting}</h5>
            // </>

            // <React.StrictMode>
            //     <h4>I am card five</h4>
            //     <h4>I am card five again</h4>
            //     <h5>{greeting}</h5>
            // </React.StrictMode>

            // <React.Fragment>
            //     <h4>I am card five</h4>
            //     <h4>I am card five again</h4>
            //     <h5>{greeting}</h5>
            // </React.Fragment>

            <Fragment>
                <h4>I am card five</h4>
                <h4>I am card five again</h4>
                <h5>{greeting}</h5>
            </Fragment>

        )
    }
}