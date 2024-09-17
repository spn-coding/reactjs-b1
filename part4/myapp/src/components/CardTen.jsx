// import React, { useState } from "react";

// export default function CardTen()
// {
//     let counter = 1;

//     const counterarrs = useState(counter);

//     // console.log(counterarrs);   // (2) [0, ƒ]   => return with array
//     // console.log(counterarrs[0]);    // 0
//     // console.log(counterarrs[1]);    // function () { [native code] }

//     const counterState = counterarrs[0];    // get
//     const setCounterState = counterarrs[1];    // set
//     // console.log(counterState);  // 1000
//     // console.log(setCounterState);   // function () { [native code] }

//     const handleclick = () =>
//     {
//         // console.log('i am working');

//         // counter++;
//         // console.log(counter); // incremented in console, dom ui don't increase ! so we need `state`

//         // setCounterState(counterState++); // error , it is not work
//         setCounterState(counterState + 1);
//     }

//     return (
//         <div>
//             {/* <p>{counter}</p> */}
//             <p>{counterState}</p>
//             <button onClick={handleclick}>Add Now</button>
//         </div>
//     );
// }






import React from "react";

export default class CardTen extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            counter: 1
        }
    }

    handleclick = () =>
    {
        // console.log('i am working');

        this.state.counter++;
        // console.log(this.state.counter); // incremented in console, dom ui don't increase ! so we need `state`

        this.setState({
            counter: this.state.counter
        });
    }

    render()
    {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.handleclick}>Add Now</button>
            </div>
        );
    }
}




// ** useState ကို functional component မှာသာလျှင် အသုံးပြု၍ရသည်

// this keyword သည် class component မှာသာလျှင် အသုံးပြု၍ရသည်