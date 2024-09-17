// import React, { useState } from "react";
// export default function CardThirteen()
// {

//     const dblock = {
//         display: "block"
//     }

//     const namearrs = useState();
//     const nameState = namearrs[0];
//     const setNameState = namearrs[1];

//     const handleChange = (e) =>
//     {
//         // console.log(e.target.value);
//         setNameState(e.target.value);
//     }

//     return (
//         <div>
//             <label style={dblock}>Hello {nameState}</label>
//             <input type="text" style={dblock} onChange={handleChange} />
//         </div>
//     );
// }





import React from "react";
export default class extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            name: ''
        }
    }

    handleChange = (e) =>
    {
        this.setState({
            name: e.target.value
        })
    }

    render()
    {
        const dblock = {
            display: "block"
        }

        return (
            <div>
                <label style={dblock}>Hello {this.state.name}</label>
                <input type="text" style={dblock} onChange={this.handleChange} />
            </div >
        );
    }
}