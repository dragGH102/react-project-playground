import React from 'react';
import logo from './logo.svg';
import './App.css';

// (functional means "everything is based on functions")
// function App()
// is: functional alternative (without constructor / lifecycle) to
/* class App extends React.component {
  // props are accessed via this.props.propName

  render() {
    return (
      <JSX code template>
    );
   }
  }
/*
// can be further simplified as pure ES6 as
/*
  // props are accessed via props.propName

  const App = (props) => ( <JSX code template> )
*/

// -----------------------------------------
// The <JSX code template> below (<div ...></div>)
// is equivalent to pure JS:
/*
 const e = React.createElement;
 return e('div', {className: 'shopping-list'},
      // children of .div.shopping-list
      // basic types (text, number etc. don't require a e()/React.createElement())
      e('h1', {}, `Shopping list for ${props.name}`),
      // ...more children as further comma-separated e()'s parameters of parent e()... ,
      // e.g. ,e('h2', ...) if we were to add a h2 tag as SIBLING of h1
   );
  );
 */
// we can also mix JSX with pure JS
/*
return (
   <div className="App">
    { <pure JS for div.shopping-list as in snippet above> }
   </div>
*/


function App(props: { name: string }) {
  return (
    <div className="App">
      <div className="shopping-list">
        <h1>Shopping List for {props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
