import BookList from './components/BookList/BookList'
/* import ElementFunctionExample from './components/ElementFunctionExample' */
/* import Greeting from './components/Greeting' */

/* const Breeting = () => {
  return (
    <>
      <h2>Real Breeting</h2>
    </>
  )
} */

const App = () => {
  let inputText = ''
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText) {
      console.log('inputText is equal now: ' + inputText)
    } else {
      console.log('You haven`t written any text yet')
    }
  }
  const handleInput = (e) => {
    console.log(e.target.value)
    inputText = e.target.value
    console.log(inputText)
  }
  return (
    <div className="container">
      {/* <Greeting /> */}
      {/* <Breeting /> */}
      {/* <ElementFunctionExample /> */}
      {/* <hr /> */}
      <h2>New Book List:</h2>
      <BookList />
      <section className="event-section">
      <form onClick={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
        />
        <button type="sumbit">Button</button>
      </form>
      </section>
    </div>
  )
}

export default App
