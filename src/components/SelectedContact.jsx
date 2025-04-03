import { useState, useEffect } from 'react';

function SelectedContact({selectedContactId, setSelectedContactId}){
    const [contact, setContact] = useState(null)
    useEffect(()=>{
            async function fetchContacts() {
                try {
                    const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                      const result = await response.json();
                      setContact(result);
                      console.log(result)
                } catch (error) {
                  console.error(error);
                }
              }
              fetchContacts()
        },[])

    return(
        <>
        <p>{contact.name}</p>
        <p>{contact.username}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.website}</p>
        <button onClick={()=>setSelectedContactId(null)}>Return to Contacts</button>
        </>
    )
}

export default SelectedContact