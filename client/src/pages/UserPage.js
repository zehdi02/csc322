import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout'
import './UserPage.css'
import { useNavigate } from 'react-router-dom';


function UserPage(){
    const [name,Username]=useState(localStorage.getItem("FullName"));
    const [phone,Phonenumber]=useState(localStorage.getItem("Phone#"))
    const [email,getEmail]=useState(localStorage.getItem("email"))
    const [wallet,getBalance]=useState(localStorage.getItem("wallet"));
    const [money,Depositmoney]=useState();

    //Condtional display functions
    const [accountinfo,display]=useState();
    const [walletshow,Walletdisplay]=useState();
    const navigate = useNavigate();
    //Display Account HTML
    const AccountInfo=()=>{
        Walletdisplay("");
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


        display("");
        // const acctBalanceLbl = document.getElementById("acctBalanceLbl");
        // let totalBalanceFormatted = formatter.format(5);
        // document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

        Walletdisplay(
        <div className='userwallet-body'>
  <link rel="stylesheet" type="text/css" href="bank_account.css" />
  <div className="flex">
    <div className="element-center">
      <div id="acctBalance">
        <span className="wrap" />
        <h1>
          Total Balance
        </h1>
        <label id="acctBalanceLbl" />
      </div>
      <div id="inputs">
        <h2>
          Deposit
        </h2>
        <input type="text" id="userDeposit" required />
        <button id="btnDeposit">Deposit</button>
        <h2>
          Withdraw
        </h2>
        <input type="text" id="userWithdraw" required />
        <button id="btnWithdraw">Withdraw</button>
      </div>
    </div>
  </div>
</div>
        ); };

    const logout=()=>{
        window.loginStatus=false;
        localStorage.clear();
        navigate('/sign-in');     
    }
    const Deposit=()=>{

    }

    

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });

  

    
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
      <div>{walletshow}</div>
     </div>
            </MainLayout>
            
       
    )
}
export default UserPage;
