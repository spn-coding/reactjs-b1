// import React, { useState } from "react";

// const CardFourteen = () =>
// {

//     const [firstname, setFirstname] = useState();
//     const [lastname, setLastname] = useState();

//     const fristnameChangeHandler = (e) =>
//     {
//         setFirstname(e.target.value);
//     }

//     const lastnameChangeHandler = (e) =>
//     {
//         setLastname(e.target.value);
//     }

//     return (
//         <div>
//             <form action="" method="">
//                 <div>
//                     <label htmlFor="firstname">First Name</label>
//                     <input type="text" name="firstname" id="firstname" onChange={fristnameChangeHandler} />
//                     <span>{firstname}</span>
//                 </div>
//                 <div>
//                     <label htmlFor="lasttname">Last Name</label>
//                     <input type="text" name="lasttname" id="lasttname" onChange={lastnameChangeHandler} />
//                     <span>{lastname}</span>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default CardFourteen;






import React from "react";
export default class extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            firstname: '',
            lastname: ''
        }
    }

    fristnameChangeHandler = (e) =>
    {
        this.setState({
            firstname: e.target.value
        })
    }

    lastnameChangeHandler = (e) =>
    {
        this.setState({
            lastname: e.target.value
        })
    }

    render()
    {
        return (
            <div>
                <form action="" method="">
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" id="firstname" onChange={this.fristnameChangeHandler} />
                        <span>{this.state.firstname}</span>
                    </div>
                    <div>
                        <label htmlFor="lasttname">Last Name</label>
                        <input type="text" name="lasttname" id="lasttname" onChange={this.lastnameChangeHandler} />
                        <span>{this.state.lastname}</span>
                    </div>
                </form>
            </div>
        );
    }
}