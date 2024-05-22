import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const MySidebar = () => {
    return (
        <Sidebar rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: '#90AEAD',
            },
          }}>
            <Menu menuItemStyles={{
                button: {
                   
                    [`&.active`]: {
                        backgroundColor: 'red',
                        color: 'red',   
                    },
                },
            }}>
                <MenuItem component={<Link to="/posts" />}>Questions</MenuItem>
                <MenuItem component={<Link to="" />}>About</MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default MySidebar;