// import React, { useState } from "react";

// export default function CardEleven()
// {
//     let counter = 10;

//     const idxarrs = useState(counter);
//     const idxState = idxarrs[0];
//     const setIndexState = idxarrs[1];

//     const handleclick = () =>
//     {
//         setIndexState(idxState + 1);
//     }

//     return (
//         <div>
//             {/* <p>{counter}</p> */}
//             <p>{idxState}</p>
//             <button onClick={handleclick}>Click Here</button>
//         </div>
//     );
// }







// import React from "react";

// export default class CardEleven extends React.Component
// {

//     constructor()
//     {
//         super();
//         this.state = {
//             idx: 1000
//         }
//     }

//     handleclick = () =>
//     {
//         this.state.idx++;
//         this.setState({
//             idx: this.state.idx
//         });
//     }

//     render()
//     {
//         return (
//             <div>
//                 <p>{this.state.idx}</p>
//                 <button onClick={this.handleclick}>Click Here</button>
//             </div>
//         );
//     }
// }







import React from "react";

export default class CardEleven extends React.Component
{
    state = {
        idx: 10
    }

    render()
    {

        const handleclick = () =>
        {
            this.state.idx++;
            this.setState({
                idx: this.state.idx
            });
        }

        return (
            <div>
                <p>{this.state.idx}</p>
                <button onClick={handleclick}>Click Here</button>
            </div>
        );
    }
}