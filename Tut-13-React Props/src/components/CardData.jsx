// We get the data from the cardList.jsx file
export function CardData(props) {
    return (
        <>
            {/* Here we extract the props bhtira ko currData attribute */}
            <h1>Name: {props.currData.name}</h1>
            <img 
                src={props.currData.img_url} 
                alt={props.currData.name} 
                style={{ height: "150px", width: "auto", marginBottom: "10px" }} 
            />
            <p>Id: {props.currData.id}</p>
            <p>Rating: {props.currData.rating}</p>
            <p>Description: {props.currData.description}</p>
            <p>Cast: {props.currData.cast.join(", ")}</p>
            <p>Genre: {props.currData.genre.join(", ")}</p>
            <a href={props.currData.watch_url} target="_blank" rel="noopener noreferrer">
                <button>Watch Now</button>
            </a>
        </>
    );
}
