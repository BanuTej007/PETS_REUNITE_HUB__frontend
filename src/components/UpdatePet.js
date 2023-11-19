import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";
import PetForm from "./PetForm";
import Nav from "./Nav";

function EditPet(){
    const {id} = useParams();
    const [initialValue, setInitialValue] = useState({pet:"",des:"",email:"",loc:"",phone:""});
    const [newData,setNewData] = useState([]);

    useEffect(()=>{
        Axios.get("https://petsreunitehub-backend.onrender.com/petRoute/update-pet/" + id)
        .then((res)=>{
            if(res.status===200){
                const {pet,des,email,loc,phone} = res.data;
                setInitialValue({pet,des,email,loc,phone});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = {pet:newData[0],des:newData[1],email:newData[2],loc:newData[3],phone:newData[4]};
        Axios.put("https://petsreunitehub-backend.onrender.com/petRoute/update-pet/"+id,data)
        .then((res)=>{
            if(res.status === 200)
                alert("Pet details updated successfully")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <div>
            <Nav />
            <form onSubmit={handleSubmit}>
            <PetForm getState={getState} 
                petValue={initialValue.pet}
                desValue={initialValue.des}
                emailValue={initialValue.email}
                locValue={initialValue.loc}
                phoneValue={initialValue.phone}>
                    Edit Pet Details
            </PetForm>
        </form>
        </div>
    )
}
export default EditPet;