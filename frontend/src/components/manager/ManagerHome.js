import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import "../../res/css/PlanTimeTable.css"

AOS.init({
      duration: '2000'
});

const ManagerHome = () => {
      return (
        <div class="landing-page">
        <div class="container">
        <div class="header-area">
        <img src={require("../../res/images/logocar.png")} />{" "}
          <div
            style={{
              marginTop: "20px",
              width: "300px",
              color: "#3399FF",
              fontSize: "19px",
            }}
          ><b>BookMyTickets</b></div>
      <ul class="links">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><Link to="/dashboard"><div class="button">Logout </div></Link></li>
      </ul>
      
    </div>
    <div style={{fontSize:"22px",marginBottom:"-50px",textAlign:"center",marginTop:"40px"}}>
      <strong style={{color:"darkblue"}}>Choose your option to go</strong><br></br>
        <span style={{fontSize:"10px"}}>If you had the option to choose to go anywhere in the world right now,
        would it be to "somewhere" or "someone"</span></div>
        <div className="register-photo">
        
        <div class="cards">
        <div className="card" style={{borderRadius:"30px",height:"280px",width:"200px",alignItems:"center"}}>
            <div className='imgCont'>
                <img  src={require("../../res/images/ManagerHome/hom1.png")}/>
            </div>
            <div >
                <a href='#' style={{textDecoration:"none",color:"darkblue"}}><strong>Vehicle Management</strong></a>
            </div>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Manage your vehicle</span>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>details</span>
         </div> 

         <div className="card" style={{borderRadius:"30px",height:"280px",width:"200px",alignItems:"center"}}>
            <div className='imgCont'>
                <img  src={require("../../res/images/ManagerHome/hom2.png")}/>
            </div>
            <div >
                <a href='#' style={{textDecoration:"none",color:"darkblue"}}><strong>Routes Management</strong></a>
            </div>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Manage the vehicle</span>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Routes</span>
         </div>
         
          <div className="card" style={{borderRadius:"30px",height:"280px",width:"200px",alignItems:"center"}}>
            <div className='imgCont'>
                <img  src={require("../../res/images/ManagerHome/hom3.png")}/>
            </div>
            <div >
                <a href='#' style={{textDecoration:"none",color:"darkblue"}}><strong>Plan Timetable</strong></a>
            </div>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Plan the timetable</span>

         </div>
         
          <div className="card" style={{borderRadius:"30px",height:"280px",width:"200px",alignItems:"center",marginBottom:"40px"}}>
            <div className='imgCont'>
                <img  src={require("../../res/images/ManagerHome/hom4.png")}/>
            </div>
            <div >
                <a href='#' style={{textDecoration:"none",color:"darkblue"}}><strong>Monitor Networks</strong></a>
            </div>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Monitor overcrowding</span>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Networks</span>
         </div>
         
          <div className="card" style={{borderRadius:"30px",height:"280px",width:"200px",alignItems:"center"}}>
            <div className='imgCont'>
                <img  src={require("../../res/images/ManagerHome/hom5.png")}/>
            </div>
            <div >
                <a href='#' style={{textDecoration:"none",color:"darkblue"}}><strong>Calculate Amounts</strong></a>
            </div>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Calculate Total</span>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Amounts</span>
         </div> 

         <div className="card" style={{borderRadius:"30px",height:"280px",width:"200px",alignItems:"center"}}>
            <div className='imgCont'>
                <img  src={require("../../res/images/ManagerHome/hom6.png")}/>
            </div>
            <div >
                <a href='#' style={{textDecoration:"none",color:"darkblue"}}><strong>Check Suspects</strong></a>
            </div>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Find the Suspects</span>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>identified</span>
         </div> 

         <div className="card" style={{borderRadius:"30px",height:"280px",width:"200px",alignItems:"center"}}>
            <div className='imgCont'>
                <img  src={require("../../res/images/ManagerHome/hom7.png")}/>
            </div>
            <div >
                <a href='#' style={{textDecoration:"none",color:"darkblue"}}><strong>Employee Management</strong></a>
            </div>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Manage your</span>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Employees</span>
         </div> 

         <div className="card" style={{borderRadius:"30px",height:"280px",width:"200px",alignItems:"center"}}>
            <div className='imgCont'>
                <img  src={require("../../res/images/ManagerHome/hom8.png")}/>
            </div>
            <div >
                <a href='#' style={{textDecoration:"none",color:"darkblue"}}><strong>Calculate Penalty</strong></a>
            </div>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Calculate Penalty</span>
            <span style={{fontSize:"14px",color:"#B2BEB5"}}>Amounts</span>
         </div> 

    

</div>
 
</div>
    </div>
    </div>
      );
}

export default ManagerHome