import { useState } from "react";

export function DerivedState() {
  const [users, setUsers] = useState([
    { name: "Alice", age: 25 ,active:true},
    { name: "Bob", age: 30 ,active:false},
    { name: "Charlie", age: 35 ,active:true},
    { name: "Angles", age: 45 }
  ]);



  // Here userCount and avgAge variables  becomes the derivedState as it is itself a state
  const userCount = users.length;

  // To find the average
  const avgAge=users.reduce((accumulator,currElem) => 
    // 0 is the inital value for the acc
    accumulator+currElem.age,0
) / userCount


  // To filter  
const activeUsers = users.filter(user => user.active); // Derived state

  // To sort users by age
  const sortedUsers = [...users].sort((a, b) => a.age - b.age); // Derived state

  return (
    <>
      <div>
        {userCount} from the derivedState.jsx
        <br />
        {avgAge} from the derivedState.jsx
        <br />
        <p>Active Users: {activeUsers.length}</p>;
        <br />
        
        <h3>Sorted Users by Age:</h3>
        {sortedUsers.map((user, index) => (
          <div key={index}>
            <p>
              Sorted Name: {user.name} and Age: {user.age}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
