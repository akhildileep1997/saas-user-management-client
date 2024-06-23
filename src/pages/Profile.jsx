import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../connection/baseUrl'
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from 'react-redux'

const Profile = () => {
  const { authUser,token } = useSelector(store => store.user)
  
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    try {
        const id = authUser?.id
          console.log(token);
      const fetchDetails = async () => {
        const response = await axios.get(`${baseUrl}/user/${id}`, {
          headers: {
            Authorization : `Bearer ${token}`
          }
        })
        if (response) {
          setUserDetails(response.data.user)
        }
      }
      fetchDetails()
    } catch (error) {
      console.log(error);
    }
  }, [])
  
 

  return (
    <div className="lg:w-2/4 p-1 border bg-white border-gray-600 flex justify-center gap-1 shadow-lg  rounded-lg">
      <div className="img lg:w-1/2 flex justify-center items-center overflow-hidden ">
        <img
          className="w-full"
          src="https://th.bing.com/th/id/OIP.4yzueUyjHa40lim80J4HkQAAAA?rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>
      <div
        style={{ height: "70vh" }}
        className="details  overflow-auto w-1/2  p-3"
      >
        <ListGroup className="h-full  p-2  mt-2 ">
          <ListGroup.Item className="mt-2  p-3">
            <h2 className="text-center font-bold  text-xs;">Profile Details</h2>
            <div className="divider"></div>
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 shadow-xl p-3">
            <span className="font-bold">Name : </span>
            {userDetails?.name}
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 shadow-xl p-3">
            <span className="font-bold">Email : </span>
            {userDetails?.email}
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 shadow-xl p-3">
            <span className="font-bold">Phone No : </span>
            {userDetails?.mob}
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 shadow-xl p-3">
            <span className="font-bold">Address : </span>
            {userDetails?.address}
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 shadow-xl p-3">
            <span className="font-bold">Company Name : </span>
            {userDetails?.companyName}
          </ListGroup.Item>
          <ListGroup.Item className="mt-2 shadow-xl p-3">
            <span className="font-bold">Position : </span>{" "}
            {userDetails?.position}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default Profile