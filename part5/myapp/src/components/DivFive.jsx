// import React from "react";

// const DivFive = () =>
// {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <Article />
//             <Post />
//         </div>
//     );
// }

// const Article = () =>
// {
//     return (
//         <div>
//             <h3>This is Article Functional Component</h3>
//             <p>Hello friend are you ready to learn reactjs</p>
//         </div>
//     );
// }


// const Post = () =>
// {
//     return (
//         <div>
//             <h3>This is Post Functional Component</h3>
//             <p>Hello friend are you ready to learn reactjs</p>
//         </div>
//     );
// }

// export default DivFive;





import React from "react";

class DivFive extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>Hello</h1>
                <Article />
                <Post />
            </div>
        );
    }
}

class Article extends React.Component
{
    render()
    {
        return (
            <div>

                <h3>This is Article Functional Component</h3>
                <p>Hello friend are you ready to learn reactjs</p>

            </div>
        );
    }
}

class Post extends React.Component
{
    render()
    {
        return (
            <div>
                <h3>This is Post Functional Component</h3>
                <p>Hello friend are you ready to learn reactjs</p>
            </div>
        );
    }
}



export default DivFive;