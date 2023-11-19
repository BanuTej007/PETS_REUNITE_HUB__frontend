import { useState, useEffect } from "react";

function PetForm(props){
    const [pet,setPet] = useState(props.petValue);
    const [des,setDes] = useState(props.desValue);
    const [email,setEmail] = useState(props.emailValue);
    const [loc,setLoc] = useState(props.locValue);
    const [phone,setPhone] = useState(props.phoneValue);

    useEffect(()=>{
        setPet(props.petValue);
        setDes(props.desValue);
        setEmail(props.emailValue);
        setLoc(props.locValue);
        setPhone(props.phoneValue);
    },[props.petValue,props.desValue,props.emailValue,props.locValue,props.phoneValue]);

    const arr=[pet, des, email, loc, phone];
    const handleClick=()=>{
        props.getState(arr);
    }
    return(
        <div style={{maxWidth:"40%", margin:"0px auto"}}>
            <br></br>
            <label class="form-label">Pet</label>
            <input defaultValue={props.petValue} onChange={(event)=>setPet(event.target.value)} class="form-control my-3" placeholder="Enter the pet type" required/>
            <label class="form-label">Description</label>
            <input defaultValue={props.desValue} onChange={(event)=>setDes(event.target.value)} class="form-control my-3" placeholder="Enter description of the pet" required/>
            <label class="form-label">Email</label>
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" required/>
            <label class="form-label">Location</label>
            <input defaultValue={props.locValue} onChange={(event)=>setLoc(event.target.value)} class="form-control my-3" placeholder="Enter pet found location" required/>
            <label class="form-label">Phone Number</label>
            <input defaultValue={props.phoneValue} onChange={(event)=>setPhone(event.target.value)} class="form-control my-3" placeholder="Enter your phone number" required/>
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default PetForm;