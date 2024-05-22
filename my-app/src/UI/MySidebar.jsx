import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses, menuClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const MySidebar = () => {
    return (
        <Sidebar rootStyles={{
            [`.${sidebarClasses.container}`]: {
                backgroundColor: '#90AEAD',
            },
        }}>
            <Menu menuItemStyles={{
                button: ({ level, active }) => {
                    if (active)
                        return {
                            backgroundColor: active ? '#000000' : undefined,
                        }
                }
            }}>
                <MenuItem rootStyles={{
                    ['.' + menuClasses.button]: {
                        fontcolor: 'black',
                        '&:hover': {
                            backgroundColor: '#efefef',
                        },
                    }
                }} component={<Link to="/posts" />}>Questions</MenuItem>
                <MenuItem component={<Link to="" />}>About</MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default MySidebar;