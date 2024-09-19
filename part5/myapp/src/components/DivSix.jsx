// import React from "react";

// const DivSix = () =>
// {
//     const x = 10;
//     const y = 20;
//     const z = "30"; // can't calculate

//     return (
//         <div>
//             <p>{100 + 500}</p>
//             <p>{100 + 500 + x}</p>
//             <p>{100 + 500 + y}</p>
//             <p>{100 + 500 + z}</p>
//             <p>{x < y ? "Yes, x is less than y" : "No, x is greater than y"}</p>
//         </div>
//     );
// }

// export default DivSix;




// import React from "react";

// class DivSix extends React.Component
// {

//     state = {
//         x: 10,
//         y: 20,
//         z: "30"
//     }

//     render()
//     {
//         return (
//             <div>
//                 <p>{100 + 500}</p>
//                 <p>{100 + 500 + this.state.x}</p>
//                 <p>{100 + 500 + this.state.y}</p>
//                 <p>{100 + 500 + this.state.z}</p>
//                 <p>{this.state.x < this.state.y ? "Yes, x is less than y" : "No, x is greater than y"}</p>
//             </div>
//         );
//     }
// }

// export default DivSix;






import React from "react";

class DivSix extends React.Component
{
    render()
    {
        const x = 10;
        const y = 20;
        const z = "30";

        return (
            <div>
                <p>{100 + 500}</p>
                <p>{100 + 500 + x}</p>
                <p>{100 + 500 + y}</p>
                <p>{100 + 500 + z}</p>
                <p>{x < y ? "Yes, x is less than y" : "No, x is greater than y"}</p>
            </div>
        );
    }
}

export default DivSix;