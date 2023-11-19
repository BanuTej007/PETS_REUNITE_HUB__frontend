import Axios from 'axios';
import {Link} from 'react-router-dom';

function PetListCard(props){
    const {_id,pet,des,email,loc,phone}=props.obj;
    const handleClick=()=>{
        Axios.delete("https://petsreunitehub-backend.onrender.com/petRoute/delete-pet/" + _id )
        .then((res)=>{
            if(res.status===200){
                alert("Contact details of the person with your pet:                                             Email:" + email +"    Phone number:  "+ phone);
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return(
        <div className="card" style={{maxWidth:"400px", margin:"20px"}}>
            <div className="card-body">
                <h5 className="card-title"><b>Pet: {pet}</b></h5>
                <p className="card-text">Description: {des}</p>
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Location: {loc}</p>
                <p className="card-text">Phone Number: {phone}</p>
                <Link class="text-decoration-none text-light me-4" to={"/update-pet/"+_id}><button class="btn btn-secondary">Edit</button></Link>
                <button onClick={handleClick} class="btn btn-success">This is my pet</button>
            </div>
        </div>
    )
}
export default PetListCard;