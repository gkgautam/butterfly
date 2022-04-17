import React from 'react';

function Header() {
  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col ms-5'>
              <img className='logo-img' src='./blogo.png' alt='blogo'/>
              <div className='user-setting'>
                <div className='user-avatar'>
                  <img src='./avatar.jpg' alt='avatar'/>
                </div>
                <div className='user-dropdown'>
                  <div class="dropdown">
                    <button class="btn  lh-1 mb-0 p-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className='profile-name'>Govind kumar</span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#!">Action</a></li>
                      <li><a class="dropdown-item" href="#!">Another action</a></li>
                      <li><a class="dropdown-item" href="#!">Something else here</a></li>
                    </ul>
                  </div>
                  <div className='designation'>Admin</div>
                </div>
                <div className='user-settingbtn'>
                  <i class="fa-solid fa-gear"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header