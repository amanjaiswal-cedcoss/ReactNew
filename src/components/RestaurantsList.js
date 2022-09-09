import React, { useState } from 'react'
import RestaurantDetails from './RestaurantDetails'

  let detail={};let flag=false;
const RestaurantsList = (props) => {
  const [id,setId]=useState("restaurantsList")
  const [Detail,setDetail]=useState(detail)

const clickHandler=(event)=>{
  flag=true;
  detail={};
  let index=0;
  index=event.target.closest("div .item").getAttribute("id")
  detail=props.matched[index-1]
  setDetail({...detail})
  setId("hidden")
  
}

const clickHandlerClose=()=>{
  setId("restaurantsList")
}

  if(flag===true){
  return (<>
    <div id={id}>
      <div id="list">
        {props.matched.map((item)=>{ return <a href='#detail'><div id={item.id} key={item.id} className="item" onClick={clickHandler}><img alt="null" src={item.photograph}/><div className="itemDetails"><p id="paraitemName">{item.name}</p><p id="paraCuisine">{item.cuisine_type}</p><p id='paraPlace'>{item.neighborhood}</p></div></div></a>})}
      </div>
      <div>
      </div> 
    </div>
    <RestaurantDetails detail={Detail} clickHandler={clickHandlerClose} />
    </>
  )}
  else{
    return (
      <div id='restaurantsList'>
        <div id="list">
          {props.matched.map((item)=>{ return <a href='#detail'><div id={item.id} key={item.id} className="item" onClick={clickHandler}><img alt="null" src={item.photograph}/><div className="itemDetails"><p id="paraitemName">{item.name}</p><p id="paraCuisine">{item.cuisine_type}</p><p id='paraPlace'>{item.neighborhood}</p></div></div></a>})}
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default RestaurantsList