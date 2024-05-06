import React from "react";
import ReactDOM from "react-dom/client"

//React.createElement() => React Element - JS Object => HTMLElements(render)

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React"
// );

// JSX- HTML like or XML-like JSX

// JSX(transpiled before it reaches JS engine) - PARCEL -Babel

// JSX => babel transpiles it React.createelement

const Title = ()=> (
<h1  className="head">
    Namaste react using JSX
</h1>
)

//React Component 

const HeadingComponent = ()=>(
    <div id="container">
    <Title />
        <h2 className="heading">Hello World! using React component</h2>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />)


