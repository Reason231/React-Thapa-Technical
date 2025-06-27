import {Fragment} from "react"

function App() {
 return (
   
   // Due to the use of react.fragment, we don't have to create the parent div for the elements. which improves performance
   <Fragment>
    <div>
      <h1>Hello 1</h1>
    </div>
    <div>
      <h1>Hello 2</h1>
    </div>
   </Fragment>
 )
}
export default App
