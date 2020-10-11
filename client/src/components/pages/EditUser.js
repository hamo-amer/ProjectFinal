  
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import axios from 'axios'
import { useSelector } from "react-redux";



const EditUserModal = (props) => {
  const user = useSelector(state => state.authReducer.user)
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    adress:""
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

     // function edit
  const handleEdit=(idUser,formData)=>{
    axios.put(`/api/users/edit/${idUser}`,formData)
    .then(()=>console.log("update user"))
    .catch(error=>console.log(error))
   }


  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Edit Profil
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="name"
                id="name"
                placeholder={user.name}               
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">phoneNumber</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder={user.phoneNumber}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={handleFormChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder={user.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">password</Label>
              <Input
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Change password..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Adress</Label>
              <Input
                onChange={handleFormChange}
                type="text"
                name="adress"
                id="adress"
                placeholder={user.adress}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleEdit(user._id,formData);
              toggle();
            }}
          >
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditUserModal;