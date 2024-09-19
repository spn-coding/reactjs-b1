// import React, { useState } from "react";

// const DivSeven = () =>
// {

//     const [counterState, setCounterState] = useState(0);

//     const handleClick = () =>
//     {
//         // setCounterState(counterState + 1);

//         setCounterState(counterState => counterState + 1);
//     }

//     return (
//         <div>
//             <Counterview idx={counterState} clicker={handleClick} />
//         </div>
//     );
// }

// const Counterview = (props) =>
// {

//     const blocker = {
//         display: "block"
//     }

//     return (
//         <div>
//             <span style={blocker}>{props.idx}</span>
//             <button type="button" onClick={props.clicker}>Press Me</button>
//         </div>
//     );
// }

// export default DivSeven;












import React from "react";

class DivSeven extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            counter: 0
        }
    }
    render()
    {
        const handleClick = () =>
        {
            this.state.counter++;
            this.setState({
                counter: this.state.counter
            });
        }

        return (
            <div>
                <Counterview idx={this.state.counter} clicker={handleClick} />
            </div >
        );
    }
}

class Counterview extends React.Component
{
    render()
    {
        const blocker = {
            display: "block"
        }

        return (
            <div>
                <span style={blocker}>{this.props.idx}</span>
                <button type="button" onClick={this.props.clicker}>Press Me</button>
            </div >
        );
    }
}

export default DivSeven;