// src/pages/Login.tsx

import {  useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RoutesName, StorageKey } from "../../constants";
import StorageManager from "../../helpers/storageManager";
import { login, authErrorSelector, logout } from "../../redux/slices/authSlice.ts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks.ts";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const error = useAppSelector(authErrorSelector);




	const handleLogin =  () => {
		 dispatch(login({ username, password, navigate }));

	};

	const handleLogout = () => {
		StorageManager.clear();
    dispatch(logout());
		navigate(RoutesName.HOME);
	};

	if (StorageManager.getItem(StorageKey.IS_AUTHENTICATED) === "true") {
		return (
			<>
				<Typography variant='h5' mb={2} align='center'>
					You already logged in
				</Typography>
				<Button
					variant='contained'
					color='primary'
					fullWidth
					sx={{ mt: 3 }}
					onClick={handleLogout}
				>
					Log out
				</Button>
			</>
		);
	}

	return (
		<Box sx={{ width: 300, mx: "auto", mt: 5 }}>
			<Typography variant='h5' mb={2} align='center'>
				Login
			</Typography>
			<TextField
				label='Username'
				fullWidth
				variant='outlined'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				margin='normal'
			/>
			<TextField
				label='Password'
				type='password'
				fullWidth
				variant='outlined'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				margin='normal'
			/>
			{error && (
				<Typography color='error' variant='body2' align='center' mt={2}>
					{error}
				</Typography>
			)}
			<Button
				variant='contained'
				color='primary'
				fullWidth
				sx={{ mt: 3 }}
				onClick={handleLogin}
			>
				Login
			</Button>
		</Box>
	);
};

export default Login;
