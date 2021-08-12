import './App.css'
import FormControler from './container/FormControler'
function App({ store }) {
  console.log('APP Props', store)
  return (
    <div className="App">
      {/* <Form /> */}
      <FormControler />
    </div>
  )
}

export default App
