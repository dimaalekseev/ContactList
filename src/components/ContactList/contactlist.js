import React, { Fragment } from "react";
import "./contactlist.css";
import ContactItem from "./ContactItem/contactitem";


const ContactList = ({ContactList}) =>{
    console.log("Array=>", ContactList);
    const listItem=ContactList.map((item)=>{
        return (
        <ContactItem 
            avatar={item.avatar} 
            name={item.name} 
            description={item.description} 
            gender={item.gender}>
        </ContactItem>
    )
    })
    return (
        <Fragment>
        <h2 className="col-7 d-flex justify-content-center">Contact</h2>
        {listItem}
        </Fragment>
    );
}
export default ContactList;