import React from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios'
import {Toast,ToastHeader,ToastBody,Button} from 'reactstrap'
import {logout} from '../../js/actions/authActions'
import EditUser   from './EditUser'

const Profil = () => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch=useDispatch()
  // function delete
  const handleDelete=(idUser)=>{
   axios.delete(`/api/users/delete/${idUser}`)
   .then(()=>console.log("user is deleted"))
   .catch(error=>console.log(error))
  };
 
  if (!user) {
    return <h1>Spinner.....</h1>;
  }
  return (
    <div>
     <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Name
          </ToastHeader>
          <ToastBody>
            {user.name}
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Email
          </ToastHeader>
          <ToastBody>
            {user.email}
          </ToastBody>
        </Toast>
        </div>
        <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Adress
          </ToastHeader>
          <ToastBody>
            {user.adress}
          </ToastBody>
        </Toast>
        </div>
        <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Phone Number
          </ToastHeader>
          <ToastBody>
            {user.phoneNumber}
          </ToastBody>
        </Toast>
        </div>
        <Button color="primary" size="lg" onClick={()=>{handleDelete(user._id);dispatch(logout())}}>Delete Profil</Button>{' '}
        <Button color="primary" size="lg"><EditUser /></Button>
    </div>
  );
};

export default Profil;