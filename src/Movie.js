import React from 'react'

const Movie = ({name, price, id}) => {
  return(
    <div className="movieList">
    <ul>
      <li>
        <h3>Nama Film : {name}</h3>
      </li>
      <li>
        <h3>Harga Film :{price}</h3>
      </li>
      <li>
        <h3>Id Film : {id}</h3>
      </li>
    </ul>
    
     
    </div>
  );
}
 
export default Movie;
