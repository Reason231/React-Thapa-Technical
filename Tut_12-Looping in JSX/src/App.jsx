import seriesData from "../src/api/seriesData.json";

export function Looping() {
  return (
    <>
      <h1>Series List</h1>

      {/* Loop starts from here */}
      {seriesData.map((series) => (

      // Card design 
        <div key={series.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>

      {/* Details of the card */}
          <h2>{series.name}</h2>
          <img 
                src={series.img_url} 
                alt={series.name} 
                style={{ height: "150px", width: "auto", marginBottom: "10px" }} 
            />
          <p>Rating: {series.rating === "TBD" ? "Not Rated Yet" : series.rating}</p>
          <p>Description: {series.description}</p>
          <p>Cast: {series.cast.join(", ")}</p>
          <p>Genre: {series.genre.join(", ")}</p>
          <a href={series.watch_url} target="_blank" rel="noopener noreferrer">
            <button>Watch Now</button>
          </a>

        </div>


      ))}
    </>
  );
}
