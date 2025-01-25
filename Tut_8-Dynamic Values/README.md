## Dynamic Values in JSX
- You can add any variables of your component in JSX using {} syntax.
- For example=>
function MyComponent(){
    const value="Hey";
    return <p>{value}</p>
}
- JSX allows you to write JS expression inside curly bracket which includes operations, functions calls, and other JS expression to produce a value.
- return <div>The result is: {1+2+3}</div>