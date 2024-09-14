import React from 'react'
import { Link } from 'react-router-dom';
import scanner from '../components/scanner.jpg';
export default function Sidebar() {
  return (
    <>
    <div className='col-md-2' style={{height:'800px',background:'black',color:'white'}}>
    <div className='menu'>
    <img src={scanner} style={{height:'80px',width:'200px'}}/>
    
      <ul>
      <Link to="attendance"><li><strong>Takeattendence</strong></li></Link>
      <Link to="report"><li><strong>Report</strong></li></Link>
      <Link to="student"><li><strong>Student</strong></li></Link>
      <Link to="Addstudent"><li><strong>Addstudent</strong></li></Link>
      </ul>
    </div>
    
    </div>

</>
)
}