## Note: We aren't going to use the forwardRef after the new update of React v19.

## forwardRef() 
- React forwardRef allows parents components to move down (or "forward") refs to their children.
- It gives a child component a reference to DOM entity created by its parent component in React.
- This helps the child to read and modify the element from any location where it is used. 
- Syntax => React.forwardRef(
    (props,ref) => 
)



## New method of passing the data from parent to child
- We need to pass the data from parent to child Component without re-rendering and using the unControlled component.
