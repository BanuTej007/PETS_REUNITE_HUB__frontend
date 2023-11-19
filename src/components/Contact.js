import Nav from './Nav';
import './contact.css';
function Contact(){
    return(
        <div>
            <Nav/>
        <div class="pp1">
            <h2>Visit Us</h2>
            <address>
                Pets Reunite Hub<br />
                123 Pet Street<br/>
                Cityville, PV 12345<br/>
                Country
            </address>

            <h2>Call Us</h2>
            <p>Phone: +1 (123) 456-7890</p>

            <section>
                <h2>Email Us</h2>
                <p>Email: info@petsreunitehub.com</p>
            </section>

            <footer id="pp2">
                &copy; 2023 Pets Reunite Hub. All rights reserved.
            </footer>
            </div>
        </div>
    )
}
export default Contact;