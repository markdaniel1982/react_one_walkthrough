// import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventsClass from "./components/EventsClass";
// import EventsFunctional from "./components/EventsFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass"
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional"

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mark" age="40" /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component!" name="Dave" /> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component!" name="Dave" /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} />
    </div>
  );
}

export default App;
