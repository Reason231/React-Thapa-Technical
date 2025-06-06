import "./Card.css"
export const Card = ({ currMovie }) => {
    // Destructing the Poster and ImdbId from teh currMovie 
    const { Poster, imdbID } = currMovie;
    return (
      <li className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <img src={Poster} className="poster" alt={imdbID} />
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <button className="ticket__buy-btn">Watch now</button>
            </div>
          </div>
        </div>
      </li>
    );
  };
  