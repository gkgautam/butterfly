import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
function AddTeacher() {
  const [colum,setColum]=useState('col-3');
  const [colum2,setColum2]=useState('col-9');
  const [newMenu,setNewMenu]=useState(true);
  const updateColumn=(props)=>{
      if(!props.menu){
        console.log("else pe true");
        setColum('col-1');
        setColum2('col-11');
        setNewMenu(!newMenu);
      }
      if(!newMenu){
        console.log("else pe false");
        setColum('col-3');
        setColum2('col-9');
      }
  }
  return (
    <>
      <Header />
      <div className='container-fluid homepage'>
        <div className='container'>
          <div className='row'>

            <div className={`${colum}`}>
              <Sidebar setColumn={updateColumn} />
            </div>
            <div className={`${colum2}`}>



              <div className='row'>
                
              </div>

              

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddTeacher