## React Hook Rules
1. Hooks let you use different React features from your components.

2.  It starts with use__ (useState,useEffects,useReducer)

3.  Hooks can only be used at the top level of your component(i.e above of the return() part)

4. Do not initialize Hooks inside loops, conditions or nested functions, but we can update it using the set.  
   - Example of initializing hook inside conditions: 
        if(user){
        const [user,setUser] = useState("")
       }

5. Call Hooks only from React function components or custom Hook.Do not call Hooks from regular Javascript functions or in class components.
   - Example of regular JS function as it is not component: 
        const getData = () =>{
            const [data,setData] = useState(")
        }

6. You can create your own custom hooks by creating functions starting with use_. It ensures that React can identify it as a Hook (Eg: useFetch, useForm)

7. Ensure Hooks are Called in the Same Order. This allows React to properly re-renders.