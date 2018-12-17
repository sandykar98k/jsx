// Import the React and ReactDOM libraries.
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component.
const App = () => {
  const buttonText = 'Click Me';

  // This is JSX and it converts into normal javaScript(This is done by babel).
  return (
    <div>
      <label htmlFor="name">Enter Your Name:</label>
      <input type="text" id="name" />
      <button>{buttonText}</button>
    </div>
  );
};

// Take the react component and show it on the screen.
ReactDOM.render(<App />, document.querySelector('#root'));

// NOTE: why import not require?
// import statement confirm the (ES2015 module system).
// while the require confirm the (CommonJS modules).

// NOTE: JSX is almost identical to HTML with some tiny differences.
