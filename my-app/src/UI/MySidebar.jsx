import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const MySidebar = () => {
    return (
        <Sidebar rootStyles={{
            [`.${sidebarClasses.container}`]: {
              backgroundColor: '#61677A',
            },
          }}>
            <Menu menuItemStyles={{
                button: {
                   
                    [`&.active`]: {
                        backgroundColor: 'black',
                        color: 'black',   
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