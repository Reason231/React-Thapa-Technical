import { useState } from "react";

export const Tut48Form = () => {
    function handleSubmit(e){
        e.preventDefault()
        alert("Form is submitted successfully")
    }

    const [data,setData]=useState(
        {firstname:"",lastName:"",email:"",password:"",Number:""}
    )

    const handleChange=(e)=>{
      console.log(e.target)
      const {id,value}=e.target
      setData((prev)=>({
        ...prev,
        [id]:value
      }))
    }

  return (
    <div className="border-2 border-red-500 justify-center items-center flex flex-col h-screen">
      <div className="border-2 border-black">
        <p>Hello my name is {data.firstname} {data.lastName} and {data.email} and {data.Number}</p>
        <div className="border-2 border-blue-500 flex flex-col justify-start gap-4">
          <section>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account</p>
          </section>

          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="border-2 border-black"
              onChange={(e)=>setData({...data,firstname:e.target.value})}
            ></input>
            <label htmlFor="lastName">lastName</label>
            <input
              type="text"
              id="lastName"
              className="border-2 border-black"
              onChange={(e)=>setData({...data,lastName:e.target.value})}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border-2 border-black"
              onChange={handleChange}
            ></input>
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              className="border-2 border-black"
            ></input>
            <label htmlFor="Number">Number</label>
            <input
              type="number"
              id="Number"
              className="border-2 border-black"
              onChange={handleChange}
            ></input>

            <button onSubmit={handleSubmit} className="border-2 bg-blue-400 rounded-md hover:bg-yellow-200 transition delay-100 duration-200 ease-in-out">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};
