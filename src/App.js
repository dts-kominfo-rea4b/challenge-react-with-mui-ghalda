import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import { Grid, Divider,  List, Paper} from "@mui/material";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import { deepPurple } from "@mui/material/colors";

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState([contactsJSON]);

  useEffect(() => {
    setContacts(contactsJSON);
  }, []);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <Header/>
      <Grid container spacing ={7} padding={5}>
        <Grid item xs={12} md={6}>
          <ContactForm handleSave={addContact}/>
        </Grid>
        <Grid item xs={12} md={6}>
					<Paper variant="outlined" sx={{ bgcolor: deepPurple[50] }}>
						<List>
							{contacts.map((contact, index) => (
								<div key={index}>
									<Contact data={contact} />
									{index !== contacts.length - 1 && <Divider />}
								</div>
							))}
						</List>
					</Paper>
				</Grid>
      </Grid>
    </div>
  );
};

export default App;
