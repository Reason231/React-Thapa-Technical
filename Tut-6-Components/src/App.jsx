
import './App.css'

const DisplayComponent=()=>{
  return(
    <>
    {/* As we can see that, rather than writing the code of h1 and img, again and again, We have used the one component mulitple times*/}
    <Componets />
    <Componets />
    <Componets />
    <Componets />
    </>
  )
}

// This is one component, and it should be Capital Letter to be component
const Componets=()=>{
  return (
    <>
    <div>
      {/* We don't have to repeat this code again and again */}
      <h1>Hello world from React</h1>
      <img src="../public/1.jpg" alt="" />
    </div>
    </>
  )
}

export default DisplayComponent
