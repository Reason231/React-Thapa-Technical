## React Fragment concept
- In React.js, a component can't return multiple elements without a wrapper(parent) div. so we can use React fragment
- Full syntax =>  [
 import React from "react"
 return (<React.Fragment> </React.Fragment>)
]
- React fragment vaneko yo shorthand syntax ho => <> </>
- For example: return (
    <>
    <div>
    </div>
    <div>
    </div>
    </>
)

## Q. Why can't we return multiple elements at the same time?
- As after JSX is compiled, it is converted to normal JS object, so you can't return multiple JS object at the same time.
