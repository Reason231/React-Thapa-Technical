## Registration Form

In here, we had done the tut49 code only as tut48 only shows the optimized way of writing the code which is waste of time.
- You can see down

## Tut 48: Unoptimized code of handling the input field

    const [firstName, setFirstName] = useState("");

const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [number, setNumber] = useState("");

    Method 1: Unoptimized one
    if(e.target.id === "firstName"){
    if(e.target.iname=== "firstName"){
        setFirstName(e.target.value)
        console.log(firstName)
    }

    Method 2: Still UnOptimized one

    Destructuring the name and value
        const {name,value} = e.target
        switch(name){
            case "firstName" : setFirstName(value)
            break;
            case "lastName" : setLastName(value)
            break;
            case "email" : setEmail(value)
            break;
            case "password" : setPassword(value)
            break;
            case "phoneNumber" : setPhoneNumber(value)
            break;
        }
