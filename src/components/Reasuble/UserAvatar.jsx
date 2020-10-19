import { Avatar, Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const UserAvatar = ({ avatarInitial }) => {
	return <Avatar alt="User Avatar">{avatarInitial}</Avatar>;
};

export default UserAvatar;
