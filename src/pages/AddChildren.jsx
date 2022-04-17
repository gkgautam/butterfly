import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
function AddChildren() {
    const [colum, setColum] = useState('col-3');
    const [colum2, setColum2] = useState('col-9');
    const [newMenu, setNewMenu] = useState(true);
    const updateColumn = (props) => {
        if (!props.menu) {
            console.log("else pe true");
            setColum('col-1');
            setColum2('col-11');
            setNewMenu(!newMenu);
        }
        if (!newMenu) {
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
                            <h4 className='teacher-head my-3'>Add Children</h4>
                                <form>
                                    <div class="form-row row">
                                        <div class="col-4 mb-3">
                                            <label for="validationServer01 ">Username <span className='reqparam'>*</span></label>
                                            <input type="text" class="form-control my-2" id="validationServer01"  required />
                                            {/* <div class="valid-feedback">
                                                Looks good!
                                            </div> */}
                                        </div>
                                        <div class="col-4 mb-3">
                                            <label for="validationServer01 ">First name <span className='reqparam'>*</span></label>
                                            <input type="text" class="form-control my-2" id="validationServer01"  required />
                                            {/* <div class="valid-feedback">
                                                Looks good!
                                            </div> */}
                                        </div>
                                        <div class="col-4 mb-3">
                                            <label for="validationServer01 ">Last name <span className='reqparam'>*</span></label>
                                            <input type="text" class="form-control my-2" id="validationServer01"  required />
                                            {/* <div class="valid-feedback">
                                                Looks good!
                                            </div> */}
                                        </div>
                                    </div>

                                    <div class="form-row row">
                                        <div class="col-4 mb-3">
                                            <label for="validationServer01 ">Date of Birth <span className='reqparam'>*</span></label>
                                            <input type="date" class="form-control my-2" id="validationServer01"  required />
                                            {/* <div class="valid-feedback">
                                                Looks good!
                                            </div> */}
                                        </div>
                                        <div class="col-4 mb-3">
                                            <label for="validationServer01 ">Email <span className='reqparam'>*</span></label>
                                            <input type="text" class="form-control my-2" id="validationServer01"  required />
                                            {/* <div class="valid-feedback">
                                                Looks good!
                                            </div> */}
                                        </div>
                                        <div class="col-4 mb-3">
                                            <label for="validationServer01 ">Gender <span className='reqparam'>*</span></label>
                                            <input type="text" class="form-control my-2" id="validationServer01"  required />
                                            {/* <div class="valid-feedback">
                                                Looks good!
                                            </div> */}
                                        </div>
                                    </div>
                                    <div class="form-row row">
                                        <div class="col-4 mb-3">
                                            <label for="validationServer01 ">Mobile Number <span className='reqparam'>*</span></label>
                                            <input type="text" class="form-control my-2" id="validationServer01"  required />
                                            {/* <div class="valid-feedback">
                                                Looks good!
                                            </div> */}
                                        </div>
                                        <div class="col-4 mb-3">
                                            <label for="validationServer01 ">Password <span className='reqparam'>*</span></label>
                                            <input type="text" class="form-control my-2" id="validationServer01"  required />
                                            {/* <div class="valid-feedback">
                                                Looks good!
                                            </div> */}
                                        </div>
                                        <div class="col-4 mb-3">
                                            <label for="validationServer01 ">Role <span className='reqparam'>*</span></label>
                                            <input type="text" class="form-control my-2" id="validationServer01"  required />
                                            {/* <div class="valid-feedback">
                                                Looks good!
                                            </div> */}
                                        </div>
                                    </div>
                                   
                                    
                                    <button class="btn btn-primary mx-2" type="submit">Add Children</button>
                                    <button class="btn btn-primary mx-2" type="submit">Cancel</button>
                                </form>

                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddChildren