import { Menu, Divider} from '@mantine/core';
import PropTypes from "prop-types";
import React, { useCallback, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Logout, UserCircle, Trash } from 'tabler-icons-react';
import { userContext } from '../context/userContext';
import DisconnectUser from '../hooks/DisconnectUser';

export default function UserOptionsDrawer ({control}) {
     const {user} = useContext(userContext);
     const [redirect, setRedirect] = useState(null);
     const handleClick = useCallback(() => {
          setRedirect(true);
     }, []);

     if (redirect) {
          return <DisconnectUser />
     }

     return (
          <Menu control={control}>
          <Menu.Label><span className='font-bold'>{user?.displayName}</span></Menu.Label>
          <Menu.Item icon={<UserCircle size={14} />}><Link to={'/Profile'}>Your profile</Link></Menu.Item>
          <Menu.Item icon={<Settings size={14} />}><Link to={'/Settings'}>Settings</Link></Menu.Item>
     
          <Divider />
     
          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item color="red" onClick={handleClick} icon={<Logout size={14} />}><span>Logout</span></Menu.Item>
          <Menu.Item color="red" icon={<Trash size={14} />}><span>Delete account</span></Menu.Item>
        </Menu>
     );
}

UserOptionsDrawer.propTypes = {
     control: PropTypes.element.isRequired
}
