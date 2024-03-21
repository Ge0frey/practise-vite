import ClickEvent from "./functionClick"
import ClassClick from "./classClick"

const Hello = ({name, age }) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return (
    <>
      <p>Hello my name is {name} and I am {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </>
  )
}

const App = () => {
  const name = "peter"
  const age = 10

  return (
    <div>
      <h1>GREETINGS</h1>
      <Hello name = "Maya" age = {26+10} />
      <Hello name = {name} age = {age}/>  
      <ClickEvent />
      <ClassClick />
    </div>
  )
}

export default App;