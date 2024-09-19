// import React, { Fragment, useState, useEffect } from "react";

// const DivEleven = () =>
// {
//     const [idxState, setIdxState] = useState(0);

//     useEffect(() =>
//     {
//         const getlocaldb = localStorage.getItem("mydb");
//         if (getlocaldb !== null)
//         {
//             setIdxState(parseInt(getlocaldb));
//         }
//     }, []);

//     const clickHandler = () =>
//     {
//         setIdxState(idxState => idxState + 1);
//         localStorage.setItem("mydb", idxState); // auto save
//     }

//     const saveclickHandler = () =>
//     {
//         localStorage.setItem("mydb", idxState);
//     }

//     const resetclickHandler = () =>
//     {
//         setIdxState(0);
//         localStorage.clear();
//     }

//     return (
//         <Fragment>
//             <p>{idxState}</p>
//             <button type="button" onClick={clickHandler}>Click Me</button>
//             <button type="button" onClick={saveclickHandler}>Save Me</button>
//             <button type="button" onClick={resetclickHandler}>Reset Me</button>
//         </Fragment>
//     );
// }

// export default DivEleven;








import React, { Fragment } from "react";

class DivEleven extends React.Component
{

    constructor()
    {
        super();
        this.state = {
            idx: 0
        }
    }

    componentDidMount()
    {
        // console.log("i am did mount");

        const getlocaldb = localStorage.getItem("mydb");

        if (getlocaldb !== null)
        {
            this.setState({
                idx: +getlocaldb
            });
        }
    }

    render()
    {
        const clickHandler = () =>
        {
            this.setState({
                idx: this.state.idx + 1
            });
            localStorage.setItem("mydb", this.state.idx); // auto save
        }

        const saveclickHandler = () =>
        {
            localStorage.setItem("mydb", this.state.idx);
        }

        const resetclickHandler = () =>
        {
            this.setState({
                idx: 0
            });
            localStorage.clear();
        }

        return (
            <Fragment>
                <p>{this.state.idx}</p>
                <button type="button" onClick={clickHandler}>Click Me</button>
                <button type="button" onClick={saveclickHandler}>Save Me</button>
                <button type="button" onClick={resetclickHandler}>Reset Me</button>
            </Fragment>
        );
    }

}

export default DivEleven;




// componentDidMount(){}    -> just use in class componnent