const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  
  return (
    <>
      <p>Hello my name is {props.name} and I am {props.age} years old</p>
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
    </div>
  )
}

export default App;