import {Provider} from "react-redux"
import {store} from "./component/utils/store"

function App() {
 
  return (
    <>
    <Provider store={store}>
    <h2>for pagination</h2>
    </Provider>
 
    </>
  )
}

export default App
