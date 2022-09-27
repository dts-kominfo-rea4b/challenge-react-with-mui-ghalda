// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {
	Avatar,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <>
        <ListItem>
			<ListItemAvatar>
				<Avatar src={data.photo} />
			</ListItemAvatar>
			<ListItemText
				primary={data.name}
				secondaryTypographyProps={{ component: "div" }}
				secondary={
					<React.Fragment>
						<Typography>{data.phone}</Typography>
						<Typography>{data.email}</Typography>
					</React.Fragment>
				}
				title={data.name}
			/>
		</ListItem>
    </>
    );
};

export default Contact;
