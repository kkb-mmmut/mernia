import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';   
import { useNavigate } from 'react-router';  
import axios from 'axios'; 
const Home = () => {
    const [data,setData]=useState([]);
    console.log(data);
    const getUserData = async() =>{
        const res = await axios.get("/getdata",{
            headers:{
                "Content-Type":"application/json"
            }
        });
        if(res.data.status === 401 || !res.data){
            console.log("error");
        }
        else{
            setData(res.data)
        }
        console.log(res);
    }
    useEffect(()=>{
        getUserData();
    },[])
    const navigate=useNavigate();
    function addUser() {
        navigate("/register");
      }
      function handleDelete() { 
        window.alert("handle delete function !!");
      }
  return (
    <>
        <div className='container mt-2'>
            <h1 className='text-center mt-2 fw-light'>MERN Project to Upload the Image to the Server ! </h1>
            <div className='text-end'>
                    <Button variant='primary' onClick={addUser}>Add User</Button>
            </div>
            <div className='row d-flex justify-content-between align-items-center mt-5'>
                {
                    data.map((index)=>{
                        return( 
                            <Card border="success text-center" style={{ width: '22rem' }}> 
                            <Card.Img variant="top" src={index.image} height={250} width={250}/>
                            <Card.Body>
                            <Card.Title>User Name :{index.name}</Card.Title>
                            <Card.Text>
                                Date Added : {index.date}
                            </Card.Text>
                            <Button variant="danger" onClick={handleDelete}>Delete</Button>
                            </Card.Body>
                            </Card>
                        )
                    })
                }  
            </div>
        </div>
    </>
  )
}

export default Home;
