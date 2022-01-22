import React, { useState } from 'react';



const Tour = ({tour}) => {

  //const [Onetour, setOnetour] = useState(tour);

  const {id, name,info,image,price} = tour

  return (
    <article className='single-tour'>
      <img src = {image} alt= {name}></img>
      <footer>
        <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{info}</p>
        <button className='delete-btn'>Not Interested</button>
      </footer>
    </article>

  );
};

export default Tour;
