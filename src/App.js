import JavaScriptPractice from "./components/JavaScriptPractice/JavaScriptPractice";
import ReRenderingPage from "./components/ReRenderingPage/ReRenderPage";
// using props to pass a value from a function to render in the app
// props are initialised in App where th ecomponent is rendered
function Greetings(props) {

  const bornYear = ()=> {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return(
    <div>
      {/* <p>
        Hello {props.name}, you are {props.age} years old.
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p> */}

      <ReRenderingPage />
    </div>
  )
}

// function Footer() {
//   return(
//     <div>
//       Greeting app created by <a href='https://github.com/norbertcsipak'>norbertcsipak</a>
//     </div>
//   )
// }

// function Header(props) {
//   return(
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// function Content(props) {
//   return(
//     {props}
//   )
// }

// function Total(props) {
//   return(
//     <div>
//       {props.sum}
//     </div>
//   )
// }



function App() {
  // const course = 'Half Stack application development';
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]


  const name = 'Peter';
  const age= 15;

  return (
    <div className="App">
      {/* <h1>Hello world, it is {now.toString()}</h1>
      <p>
        {a} + {b} is {a + b}
      </p>
      <Greetings name="Alex" />
      <Footer /> */}

      {/* <Header course={this.course}/>
      <Content parts={this.parts.name} />
      <Total sum={this.parts.exercises[0] + this.parts.exercises[1] + this.parts.exercises[2]} /> */}

      <Greetings name='Maya' age={26 + age} />
      <Greetings name={name} age={age} />
    </div>
  );
}

export default App;
