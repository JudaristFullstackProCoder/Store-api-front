import { Menu, Divider} from '@mantine/core';
import PropTypes from "prop-types";
import React, { useCallback, useContext } from 'react';
import { Settings, Logout, UserCircle } from 'tabler-icons-react';
import { userContext } from '../context/userContext';
import firebase from 'firebase/compat/app';

export default function UserOptionsDrawer ({control}) {
     const user = useContext(userContext);
     const handleClick = useCallback(() => firebase.auth().signOut(), []);
     return (
          <Menu control={control}>
          <Menu.Label>{user.user.displayName}</Menu.Label>
          <Menu.Item icon={<UserCircle size={14} />}>Your profile</Menu.Item>
          <Menu.Item icon={<Settings size={14} />}>Settings</Menu.Item>
     
          <Divider />
     
          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item color="red" icon={<Logout size={14} />}><span onClick={handleClick}>Logout</span></Menu.Item>
        </Menu>
     );
}

UserOptionsDrawer.propTypes = {
     control: PropTypes.element.isRequired
}
