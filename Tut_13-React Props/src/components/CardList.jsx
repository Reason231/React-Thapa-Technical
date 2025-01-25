import SeriesData from "../api/seriesData.json";
import { CardData } from "./CardData";

function CardList() {
  return (
    <>
     {SeriesData.map((data)=>{

      // We have to return again cause down is the html code.
      return(
        // Here we pass the keys and data(i.e props) to another file.
        <CardData key={data.id} currData={data}/> 
      )
     }

    )}
    </>
  );
}

export default CardList;
