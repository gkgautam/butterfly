import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
function Home() {
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
                <div className="col-6">


                  


                  <div class="card">
                    <div class="card-body py-0">
                      <h5 class="card-title py-2 mb-0">All Teachers</h5>


                      <div className="row">
                        <div className="col-3">
                          <div className="d-flex h-100 justify-content-center flex-column">
                            <h6 class="card-subtitle mb-2 text-black">18</h6>
                          </div>

                        </div>
                        <div className="col-9">
                          <div className="d-flex justify-content-end">
                            <img src='./teacher.jpg' className='' width={150} height={150} alt='teacher' />
                          </div>
                        </div>
                      </div>


                      <div className="my-3">
                        <button type='button' className="btn btn-outline-primary card-link">Add Teacher</button>
                        <button type='button' className="btn btn-outline-primary card-link mx-2">Remove Teacher</button>
                      </div>


                    </div>
                  </div>



                </div>
                <div className="col-6">


                  


                  <div class="card">
                    <div class="card-body py-0">
                      <h5 class="card-title py-2 mb-0">All Children</h5>


                      <div className="row">
                        <div className="col-4">
                          <div className="d-flex h-100 justify-content-center flex-column">
                            <h6 class="card-subtitle mb-2 text-black">4,956</h6>
                          </div>

                        </div>
                        <div className="col-8">
                          <div className="d-flex justify-content-end">
                            <img src='./dd.png' className='' width={180} height={150} alt='teacher' />
                          </div>
                        </div>
                      </div>


                      <div className="my-3">
                        <button type='button' className="btn btn-outline-primary card-link">Add children</button>
                        <button type='button' className="btn btn-outline-primary card-link mx-2">Remove Children</button>
                      </div>


                    </div>
                  </div>



                </div>
                <div className="col-6">


                  


                  <div class="card">
                    <div class="card-body py-0">
                      <h5 class="card-title py-2 mb-0">All Courses</h5>


                      <div className="row">
                        <div className="col-3">
                          <div className="d-flex h-100 justify-content-center flex-column">
                            <h6 class="card-subtitle mb-2 text-black">20</h6>
                          </div>

                        </div>
                        <div className="col-9">
                          <div className="d-flex justify-content-end">
                            <img src='./sd.png' className='' width={150} height={150} alt='teacher' />
                          </div>
                        </div>
                      </div>


                      <div className="my-3">
                        <button type='button' className="btn btn-outline-primary card-link">Add Course</button>
                        <button type='button' className="btn btn-outline-primary card-link mx-2">Delete course</button>
                      </div>


                    </div>
                  </div>



                </div>
              </div>

              

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home