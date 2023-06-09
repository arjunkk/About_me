//contact details
const Contact = () => {
    return (
        <div>
            <h1>Reach out to me:</h1>
            <div className="Contacts">
                <label>E-mail  :</label>
                <a href="mailto:arjunkkirde@mail.com">arjunkkirde@gmail.com</a>
                <div id="sticky">
                    <a href="https://api.whatsapp.com/send?phone=9374839332" target="_blank" rel="noreferrer">
                        <img src="/images/whatsapp.png" alt="WhatsApp Icon" width="30" height="30"></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;