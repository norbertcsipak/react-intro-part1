
// using props to pass a value from a function to render in the app
// props are initialised in App where th ecomponent is rendered
// function Greetings(props) {
//   return(
//     <div>
//       <p>Hello {props.name}</p>
//     </div>
//   )
// }

// function Footer() {
//   return(
//     <div>
//       Greeting app created by <a href='https://github.com/norbertcsipak'>norbertcsipak</a>
//     </div>
//   )
// }

function Header(props) {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

function App() {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercise1 = 10;
  const part2 = 'Using props to pass data';
  const exercise2 = 7;
  const part3 = 'State of a component';
  const exercise3 = 14;

  return (
    <div className="App">
      {/* <h1>Hello world, it is {now.toString()}</h1>
      <p>
        {a} + {b} is {a + b}
      </p>
      <Greetings name="Alex" />
      <Footer /> */}

      <Header course={course}/>
      <p>
        {part1} {exercise1}
      </p>
      <p>
        {part2} {exercise2}
      </p>
      <p>
        {part3} {exercise3}
      </p>
      <p>
        Number of exercises {exercise1 + exercise2 + exercise3}
      </p>
    </div>
  );
}

export default App;
