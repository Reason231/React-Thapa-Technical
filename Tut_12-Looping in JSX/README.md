## Looping in JSX 
- We don't have (for loops) in JSX, so we have to use [.map()] method of arrays

- For example:
 return (
    <ul>
      {students.map((stud)=>
      <li key={stud}> {stud} </li>
      )}
    </ul>
  )

- React.js will complain, if you don't pass key prop to <li>

- React.js uses keys to differentiate elements in a list:
Keys are crucial for identifying which elements in a list have changed, been added, or removed. When rendering lists dynamically, React uses the key prop to track these changes efficiently. Without keys, React would re-render the entire list instead of updating only the modified elements, leading to reduced performance.
