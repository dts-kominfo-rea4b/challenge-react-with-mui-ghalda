// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import{
    Button,
    Card,
    CardContent,
    CardActions,
    TextField,
} from "@mui/material"
import { useState } from "react";
import { Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

const ContactForm = ({ handleSave}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const defaultContact ={
        name: "",
        phone: "",
        email: "",
        photo: "",
    };

    const [contact, setContact] = useState(defaultContact);

    const handleChange = (e) => {
        setContact((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }));
    };
    return (
        <>
        <Card
        sx={{
            ".MuiTextField-root": { mb: 3 },
            p: 1,
            bgcolor: deepPurple[50],
        }}
        component="form"
        onSubmit={(e) => {
            e.preventDefault();
            handleSave(contact);
            setContact(defaultContact);
        }}
        >
            <Typography variant="h3" my={2} >
                Add New Contact
            </Typography>
            <CardContent>
                <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                autoComplete="name"
                required
                name="name"
                value={contact.name}
                fullWidth
                onChange={handleChange}
                color="secondary"
                />
                <TextField
                id="filled-basic"
                label="Phone"
                variant="filled"
                autoComplete="phone"
                required
                name="phone"
                value={contact.phone}
                fullWidth
                onChange={handleChange}
                color="secondary"
                />
                <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                required
                name="email"
                fullWidth
                type={"email"}
                value={contact.email}
                onChange={handleChange}
                color="secondary"
                />
                <TextField
                id="filled-basic"
                label="Photo URL"
                variant="filled"
                required
                name="photo"
                fullWidth
                value={contact.photo}
                onChange={handleChange}
                color="secondary"
                />
            </CardContent>
            <CardActions>
                <Button variant="contained" color="secondary" type="submit" size="medium">
                    Add New
                </Button>
            </CardActions>
        </Card>
        </>
    );
}

export default ContactForm;