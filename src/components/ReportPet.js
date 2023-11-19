import { useState } from "react";
import PetForm from "./PetForm";
import Axios from "axios";
import Nav from './Nav';
function ReportPet()
{
    const [arr,setArr]=useState([]);
    const getState = (childData)=>{
        setArr(childData);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const data={pet: arr[0],des: arr[1],email: arr[2], loc: arr[3], phone: arr[4]};
        Axios.post("https://petsreunitehub-backend.onrender.com/petRoute/create-pet",data)
        .then((res)=>{
            if(res.status===200)
                alert("Details of found pet have been uploaded to our community! You will be contacted if the owner finds the pet.");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }
    return(
        <div>
            <Nav/>
        <form onSubmit={handleSubmit}>
            <PetForm getState={getState} 
                petValue=""
                desValue=""
                emailValue=""
                locValue="" 
                phoneValue="">
                    Report Pet
                </PetForm>
        </form>
        </div>
    )
}

export default ReportPet;