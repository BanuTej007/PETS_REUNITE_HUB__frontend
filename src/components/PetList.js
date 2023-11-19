import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import PetListCard from './PetListCard';
import Nav from './Nav';

function PetList() {
  const [arr, setArr]=useState([]);

  useEffect(()=>{
    Axios.get("https://petsreunitehub-backend.onrender.com/petRoute/")
    .then((res)=>{
      if(res.status===200)
        setArr(res.data);
      else
        Promise.reject();
    })
    .catch((err)=>alert(err));
  },[])
  const ListItems=()=>{
    return arr.map((val,ind)=>{
      return <div style={{margin:"50px 10px"}}><PetListCard obj={val}/></div>
    })
  }

  return(
    <div>
      <Nav />
      <div style={{margin: "50px 40px"}}>
        <h1 style={{fontFamily:"Agbalumo", margin:"0px 30px"}}>Pets List</h1>
        {ListItems()}  
      </div>
    </div>
  );
}

export default PetList;
