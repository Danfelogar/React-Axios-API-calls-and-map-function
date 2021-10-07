import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { Contact } from './Contact';

export const Contacts = () => {

    useEffect(() => {
        getContacts();
        console.log(contacts);
        console.log('se cargo con exito :3');
    }, [])

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getContacts = async () => {
        try{
            const res = await axios.get("https://randomuser.me/api/?results=24")
            setContacts(res.data.results)
            setLoading(true)
        }catch (err) {
            alert(err.message);
        }
    };

    return (
        <Fragment>
            <Row>
                {loading &&
                (
                    contacts.map((contact) =>(
                        <Col sm={ 12 } md={ 6 } lg={ 4 } key={ contact.login.uuid }>
                            <Contact contact={contact} />
                        </Col>
                    ) )
                )
                }
            </Row>
        </Fragment>
    )
}
