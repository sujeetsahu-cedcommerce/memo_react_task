// import logo from './logo.svg';
import './App.css';
import './style.css';
import { createContext } from 'react';
import { useState } from 'react';
import ComponentA from './ComponentA';
import CurrencyConverter from './CurrencyConverter';
import ParentComponent from './ParentComponent';
import TextUtilityApp from './TextUtilityApp';
export const MyContext = createContext();
console.log(MyContext);

function App() {
  const [user,setuser] = useState("sujeet");
  return (
    <div className="">
      <h3>Q1. Here is a scenario where the App component has username which it wants to pass to the component D as a prop without passing it through the intermediate components. Make use of Context API to perform this.</h3>
      <MyContext.Provider value={user}>
        <ComponentA/>
      </MyContext.Provider>
      <h3>Q2. Make a class component named ParentComponent and inside componentDidMount start a timer that console.log a name every 2 seconds. Inside this ParentComponent there is a child functional component called ChildComponent. We don't want to render ChildComponent every time the ParentComponent renders. How will you do this?</h3>
      <ParentComponent/>
      <h3>Q3 Make a Currency Converter as shown here</h3>
      <CurrencyConverter/>
      <h3>Text Utility App</h3>
      <TextUtilityApp/>
    </div>
  );
}
export default App;
