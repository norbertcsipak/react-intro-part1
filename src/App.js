import logo from './logo.svg';
import './App.css';

// using props to pass a value from a function to render in the app
// props are initialised in App where th ecomponent is rendered
function Greetings(props) {
  return(
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

function Footer() {
  return(
    <div>
      Greeting app created by <a href='https://github.com/norbertcsipak'>norbertcsipak</a>
    </div>
  )
}

function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a+b);

  return (
    <div className="App">
      <h1>Hello world, it is {now.toString()}</h1>
      <p>
        {a} + {b} is {a + b}
      </p>
      <Greetings name="Alex" />
      <Footer />
    </div>
  );
}

export default App;
