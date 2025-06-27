// ## Direct destructuring
// export function CardData({currData}){
    
    export function CardData(props) {
        
    // Hami lea chai props ko currData ko keys haru, aauta aauta variable ma rakhyou by destructuring.
    // Note: The varaible name and the json data key should be same
    const {name,id,description,cast,genre,watch_url,img_url,rating}=props.currData
    
    // ## Direct destructuring
    // const {name,id,description,cast,genre,watch_url,img_url,rating}=currData

    const buttonStyle={
        backgroundColor:"blue",
        color:"white",
        border:"none"
    }

    return (
        <div style={{border:"1px solid black"}}>
            <h1>Name: {name}</h1>
            <img 
                src={img_url} 
                alt={name} 
                style={{ height: "150px", width: "auto", marginBottom: "10px" }} 
            />
            <p>Id: {id}</p>
            <p>Rating: {rating}</p>
            <p>Description: {description}</p>
            <p>Cast: {cast.join(", ")}</p>
            <p>Genre: {genre.join(", ")}</p>
            <a href={watch_url} target="_blank" rel="noopener noreferrer">

                {/* Imported from the varaible */}
                <button style={buttonStyle}>Watch Now</button>
            </a>
        </div>
    );
}
