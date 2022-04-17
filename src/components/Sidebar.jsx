import { React, useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
function Sidebar(props) {
  const [menu, setMenu] = useState(false);
  const updateMenu = () => {
    setMenu(!menu);
    props.setColumn(menu);
  }
  return (
    <>
      <ProSidebar width="200px" collapsed={menu} collapsedWidth="50px">
        <Menu iconShape="circle">
          <MenuItem onClick={updateMenu} icon={<><i class="fa-solid fa-bars"></i></>} >
            Hide Menu
          </MenuItem>
          <MenuItem icon={<><i class="fa-solid fa-house-chimney"></i></>} ><Link to="/">Home</Link></MenuItem>
          <SubMenu title="Children" icon={<><i class="fa-solid fa-child-reaching"></i></>}>
          <Link to="/addchildren"><MenuItem>Add</MenuItem></Link>
            <MenuItem>View</MenuItem>
            <MenuItem>Edit/Delete</MenuItem>
            <MenuItem>Report</MenuItem>
          </SubMenu>

          <SubMenu title="Teachers" icon={<><i class="fa-solid fa-chalkboard-user"></i></>}>
          <Link to="/addteacher"><MenuItem>Add</MenuItem></Link>
            <MenuItem>View</MenuItem>
            <MenuItem>Edit/Delete</MenuItem>
            <MenuItem>Report</MenuItem>
          </SubMenu>
          <SubMenu title="Attendance" icon={<><i class="fa-solid fa-calendar-days"></i></>}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Manage CDK" icon={<><i class="fa-solid fa-database"></i></>}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Manage CHC" icon={<><i class="fa-solid fa-user-doctor"></i></>}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Education" icon={<><i class="fa-solid fa-user-graduate"></i></>}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <SubMenu title="Resillience" icon={<><i class="fa-solid fa-shop"></i></>}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </>
  )
}

export default Sidebar