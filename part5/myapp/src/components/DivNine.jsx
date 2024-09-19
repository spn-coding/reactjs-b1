// import React, { useState } from "react";

// const shortlabels = [
//     "Name",
//     "Gender",
//     "City"
// ];

// const longlabels = [
//     "Full Name",
//     "Choose Gender",
//     "Enter your Hometown"
// ];


// const DivNine = () =>
// {
//     const [labelState, setLabelState] = useState(shortlabels);

//     const clickHandler = () =>
//     {
//         setLabelState(labelState === shortlabels ? longlabels : shortlabels);
//     }

//     const display = labelState.map((val, idx) => (
//         <div className="form-group" key={idx}>
//             <label htmlFor={`info-${idx}`}>{val}</label>
//             <br />
//             <input type="text" name={`info-${idx}`} id={`info-${idx}`} className="from-control" />
//         </div>
//     ));

//     return (
//         <section>
//             <h2>Register Form</h2>
//             <form action="" method="">
//                 {display}
//             </form>
//             <br />
//             <button type="button" onClick={clickHandler}>
//                 {labelState === shortlabels ? "Show More" : "Hide More"}
//             </button>
//         </section>
//     );
// }

// export default DivNine;









import React from "react";

const shortlabels = [
    "Name",
    "Gender",
    "City"
];

const longlabels = [
    "Full Name",
    "Choose Gender",
    "Enter your Hometown"
];


class DivNine extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            labelState: shortlabels
        }
    }

    clickHandler = () =>
    {
        this.setState({
            labelState: this.state.labelState === shortlabels ? longlabels : shortlabels
        });
    }

    render()
    {
        const display = this.state.labelState.map((val, idx) => (
            <div className="form-group" key={idx}>
                <label htmlFor={`info-${idx}`}>{val}</label>
                <br />
                <input type="text" name={`info-${idx}`} id={`info-${idx}`} className="from-control" />
            </div>
        ));

        return (
            <section>
                <h2>Register Form</h2>
                <form action="" method="">
                    {display}
                </form>
                <br />
                <button type="button" onClick={this.clickHandler}>
                    {this.state.labelState === shortlabels ? "Show More" : "Hide More"}
                </button>
            </section >
        );
    }
}

export default DivNine;