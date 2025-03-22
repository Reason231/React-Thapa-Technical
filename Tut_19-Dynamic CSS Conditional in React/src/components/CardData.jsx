import "../CardList.css";

export function CardData(props) {
  // Hami lea chai props ko currData ko keys haru, aauta aauta variable ma rakhyou by destructuring.
  // Note: The varaible name and the json data key should be same
  const { name, id, description, cast, genre, watch_url, img_url, rating } =
    props.currData;

  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Name: {name}</h1>
      <img
        src={img_url}
        alt={name}
        style={{ height: "150px", width: "auto", marginBottom: "10px" }}
      />
      <p>Id: {id}</p>

      {/* Combined Conditonal and Normal ClassName */}
      <p>
        Rating:
        <span
          className={`normalClass ${
            rating >= 8.5 ? "high_rating" : "low_rating"
          }`}
        >
          {rating}
        </span>
      </p>

    {/* Inline conditional CSS */}
      <p style={{color:`${rating >= 8.5 ? "blue" : "red"}`}}>Description: {description}</p>

      
      <p>Cast: {cast.join(", ")}</p>
      <p>Genre: {genre.join(", ")}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        {/* Imported from the varaible */}
        <button>Watch Now</button>
      </a>
    </div>
  );
}
