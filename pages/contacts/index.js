import DefaultPage from '@/components/DefaultPage';
import MyFooter from '@/components/Footer';
import styles from '@/styles/Contacts.module.scss';
import React from 'react';


export default function Contacts() {
    return (
        <>
        <DefaultPage whiteTitle={'Get In '} blueTitle={'Touch'}>
        <div className={styles.row}>
            <div className={styles.formContainer}>
                <h2>Send a Message</h2>
                <form>
                <label>Name</label>
                <input type="text" placeholder="Diogo Martins" />

                <div className={styles.flexRow}>
                    <div>
                    <label>Email</label>
                    <input type="email" placeholder="diogomartins@gmail.com" />
                    </div>
                    <div>
                    <label>Mobile</label>
                    <input type="text" placeholder="912345678"/>
                    </div>
                </div>

                <label>Message</label>
                <textarea placeholder="Write your message here..."></textarea>
                
                <button type="submit">Submit</button>
                </form>
            </div>
            <div className={styles.column}>
            <div className={styles.infoContainer}>
                <h3>Contact Info</h3>
                <p><strong>Pavilhão de Mecânica III</strong></p>
                <p>Avenida Rovisco Pais, 1 1049-001</p>
                <p>Lisboa, Portugal</p>
                <p>Email: info@tlmoto.tecnico.ulisboa.pt</p>
                <p>Phone: +351 218 419 556</p>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.528704837498!2d-9.140627224030416!3d38.73670337155637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193381fefb1f6d%3A0xe4c8c04a8e06df26!2sPavilh%C3%A3o%20de%20Mec%C3%A2nica%20III!5e0!3m2!1sen!2spt!4v1647583982827!5m2!1sen!2spt"
                className={styles.mapFrame} // Use class instead of inline styles
                allowFullScreen=""
                loading="lazy"
            ></iframe>

            </div>
        </div>
        </DefaultPage>
        <MyFooter />
        </>
  );
};
