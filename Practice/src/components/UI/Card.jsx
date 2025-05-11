export const Card=({moviesData})=>{
    const {Title,Year}=moviesData
    return(
        <>
        <li>
            <span className="mr-4">{Title}</span> 
            <span>{Year}</span>
        </li>
        </>
    )
}