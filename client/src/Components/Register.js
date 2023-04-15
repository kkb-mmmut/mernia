import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from 'react-router';

const Register = () => {
    const [fname,setFname]=useState('');
    const [file,setFile]=useState('');
    const history=useNavigate();
    const setData=(e)=>{
        const value=e.target.value; 
        setFname(value);
    }
    const setFileData=(e)=>{
        const fvalue=e.target.files[0]; 
        setFile(fvalue);
    }

    //add user data
    const addUserData = async(e)=>{
        e.preventDefault();
        var formData =new FormData();
        formData.append("photo",file);
        formData.append("fname",fname);
        const config={
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
        const res=await axios.post("http://localhost:8000/register",formData,config);
        if(res.data.status === 401 || !res.data){
            console.log("error");
        }
        else{
            history("/");
        }
        console.log(res);
    }

    // console.log(fname,file);
  return (
    <>
        <div className='container justify-content-center d-flex'>
            <h1 className='text-center mt-2 fw-light'>Upload the Image to the Server ! </h1>
        </div>
        <div className='container justify-content-center d-flex'>
            
            <Form className='row mt-5 w-50 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Username</Form.Label>
                    <Form.Control type="text" name='fname' onChange={setData} placeholder="Enter Username" />
                    <Form.Text className="text-muted fw-lighter">
                    We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label className='fw-bold'>Upload File</Form.Label>
                    <Form.Control type="file" name='photo' onChange={setFileData} placeholder="Select the file." />
                </Form.Group> 
                <Button variant="primary" type="submit" className='w-50 p-3' onClick={addUserData} style={{margin:"0px auto"}}>
                    Submit
                </Button>
            </Form>
        </div>
    </>
  )
}

export default Register