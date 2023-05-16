import React, { useState } from 'react'
import Axios from 'axios';
import MainLayout from '../layout/MainLayout'

function Dashboard() {
    const [useremail, getEmail] =useState("");
    const [phoneNum, getPhoneNum] =useState("");
    const [myArray, setMyArray] = useState([]);
    let data;
    
    const getUNAccounts=()=>{
   Axios.post("http://localhost:3001/dashboard",{
   }).then((response)=>{
    if(response.data.message){
      console("Data not recived")
    }
    else{
        console.log(response.data);
        data = response.data;
        console.log(data);
        getEmail(data[0].Email)
        getPhoneNum(data[0].Phone)
        setMyArray(data);
        console.log("My array", myArray);
        
    }
   });
    }
//Button is for reject
    const DeleteFromDB= event =>{
        console.log(event.currentTarget)
        console.log(event.currentTarget.id)
        let index=event.currentTarget.id;
        console.log(index);

    Axios.post("http://localhost:3001/dashboard-delete",{
      firstname: myArray[index].FirstName,
      lastname: myArray[index].LastName,
      email: myArray[index].Email,
      password: myArray[index].Password,
      phone: myArray[index].Phone,
      id: myArray[index].userid
        }).then((response)=>{
         if(response.data.message){
           console.log("Data deleted")
         }
         else{
            console.log("Data Not deleted")
         }
        });
         }
         //accept then delete from UNPaccounts db
const AcceptToregUser = event =>{
    console.log(event.currentTarget)
    console.log(event.currentTarget.id)
    let index=event.currentTarget.id;
    console.log(index);
    Axios.post("http://localhost:3001/dashboard-accept",{
      firstname: myArray[index].FirstName,
      lastname: myArray[index].LastName,
      email: myArray[index].Email,
      password: myArray[index].Password,
      phone: myArray[index].Phone,
      id: myArray[index].userid
    }).then((response)=>{
        if(response.data.message){
            console.log(response.data.message);
        }
        else{
           console.log("Data not passed to db")
        }
       });

       Axios.post("http://localhost:3001/dashboard-delete",{
      firstname: myArray[index].FirstName,
      lastname: myArray[index].LastName,
      email: myArray[index].Email,
      password: myArray[index].Password,
      phone: myArray[index].Phone,
      id: myArray[index].userid
        }).then((response)=>{
         if(response.data.message){
           console.log("Data deleted")
         }
         else{
            console.log("Data Not deleted")
         }
        });
         }


         
  return (
    <MainLayout>
        <div className="border"></div>
        <div className="prod-wrapper" >

            

            <div className="prod_browse">
                <h2>Dashboard</h2>
                <button onClick={getUNAccounts}>Get data</button>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="userTableBody">
                    {myArray.map((item, index) => (
                            <tr className='user-info'>
                            <td>
                             {item.Email}
                            </td>
                            <td>
                            {item.Phone}
                            </td>
                            <td>
                                <button className='accept' id={index} onClick={AcceptToregUser} >Accept</button>
                                <button className='reject' id={index} onClick={DeleteFromDB}>Reject</button>
                            </td>
                        </tr> 
                                 ))}
                    </tbody>
                </table>
            </div>

        </div>
    </MainLayout>

  )
}

export default Dashboard