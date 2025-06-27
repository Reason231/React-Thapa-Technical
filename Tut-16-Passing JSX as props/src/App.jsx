export function App() {
  return (
    <div>
      <h1>Profile Card</h1>
      <ProfileCard
        name="Alice"
        // The number should be in the curly bracket
        age={30}
        // greeting is passed as a JSX prop
        greeting={
          <div>
            <strong>I am the inside JSX props</strong>
          </div>
        }
      >
        <p>I am outside of the JSX Props</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
}

function ProfileCard(props){
    return(
        <>
        <p>Name:{props.name}</p>
        <p>Age: {props.age}</p>
        <h3>{props.greeting}</h3>

        {/* ProfileCard ko children liyeko chau i.e outside of JSX props ho*/}
        <h3>{props.children}</h3>
        </>
    )
}