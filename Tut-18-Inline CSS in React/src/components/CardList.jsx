import SeriesData from "../api/seriesData.json";
import { CardData } from "./CardData";
import "../CardList.css"

function CardList() {
  return (
    <div className="container">
      <h1 className="header">List of Best Netflix Series</h1>
     {SeriesData.map((data)=>{

      // We have to return again cause down is the html code.
      return(
        // Here we pass the keys and data(i.e props) to another file.
        <CardData key={data.id} currData={data}/> 
      )
     }

    )}
    </div>
  );
}

export default CardList;
