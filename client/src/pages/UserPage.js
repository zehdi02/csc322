import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout'
import './UserPage.css'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';


function UserPage(){
    console.log("user page");
    
    const [name,Username]=useState(localStorage.getItem("FullName"));
    const [phone,Phonenumber]=useState(localStorage.getItem("Phone#"))
    const [email,getEmail]=useState(localStorage.getItem("email"))
    const [id,getID]=useState(localStorage.getItem("id"));
    let totalbalance=localStorage.getItem("wallet");
    const [money,Depositmoney]=useState();
    const [accountinfo,display]=useState();
    let depositval;
// const [toDeposit,getoDeposit]=useState(1);
    const navigate = useNavigate();
   // const userDeposit = document.getElementById("userDeposit");

    //Format numeber
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        /* 
        the default value for minimumFractionDigits depends on the currency
        and is usually already 2
        */
      });
      let formatBalance=useState(formatter.format(totalbalance));
    
    //Display Account HTML
    const AccountInfo=()=>{


      console.log('number');
        display(
    <form className="userpage-form">
    <label>Name:</label>
    <input type="text" value={name} readonly />
    <br />
    <label>Email:</label>
    <input type="email" value={email} readonly />
    <br />
    <label>Phone:</label>
    <input type="tel" value={phone} readonly />
    </form>
        );
    };
    
    //Displaye Wallet HTML
    const WalletInfo=()=>{
        display(
        <div className='userwallet-body'>
  <link rel="stylesheet" type="text/css" href="bank_account.css" />
  <div className="flex">
    <div className="element-center">
      <div id="acctBalance">
        <span className="wrap" />
        <h1>
          Total Balance
        </h1>
        <label>{formatBalance}</label>
      </div>
      <div id="inputs">
        <h2>
          Deposit
        </h2>
        <input type="number" id="userDeposit" required onChange={(e)=>{ depositval=e.target.value}} />
        <button id="btnDeposit" onClick={Deposit}>Deposit</button>
        {/* <h2>
          Withdraw
        </h2>
        <input type="text" id="userWithdraw" required />
        <button id="btnWithdraw">Withdraw</button> */}
      </div>
    </div>
  </div>
</div>
          );};

    const logout=()=>{
        window.loginStatus=false;
        localStorage.clear();
        navigate('/sign-in');     
    }
    //deposit money
    
  
    const Deposit=()=>{
      
      totalbalance=Number(totalbalance)+Number(Number(depositval).toFixed(2));
      console.log(totalbalance);
      formatBalance=formatter.format(totalbalance);
      console.log(id);
      /* Store Depost in wallet */
      Axios.post("http://localhost:3001/user-page",{
        id: Number(id),
        wallet: Number(totalbalance),
      }).then((response)=>{
        console.log(response);
      });
      localStorage.removeItem("wallet");
      localStorage.setItem("wallet",totalbalance);
      WalletInfo(); //rerender WalletInfo
      alert("Please refresh page to confirm deposit");
  }     

    return(
        <MainLayout>
  <div className="userpage-container">
     <h1>Personal Page</h1>
    
     <div className='userpage-navbar'>
     <ul>
      <li><a href="#home" onClick={AccountInfo}>Account Information</a></li>
      <li><a href="#news" onClick={WalletInfo}>Wallet</a></li>
      <li><a href="#contact">Purchase History</a></li>
      <li><a href="#about" onClick={logout}>Logout</a></li>
     </ul>
     </div>
      <div>{accountinfo}</div>
     </div>
            </MainLayout>
            
       
    )
}
export default UserPage;
