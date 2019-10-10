import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'

//import * as styles from './EmailListForm.module.scss';

const EmailListForm: React.FunctionComponent<{}> = () => {

    const [email, setEmail] = useState('');

    //this.state = {
    //    message: 'demo'
  //  };






    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        addToMailchimp(email)
            .then((data) => {
                console.log(data.result);
                console.log(data.msg);

                let msg = data.msg

                if(msg == 'The email you entered is not valid.'){
                    msg = 'El correo ingresado no es valido.'
                }

                document.getElementById('messages').innerHTML = '<p>' + msg + '</p>';

            })
            .catch((error: Error) => {
                // Errors in here are client side
                // Mailchimp always returns a 200
            });
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };


    return (
        <form onSubmit={handleSubmit} lang="es-419">


            <label htmlFor="email" className="visually-hidden">Correo</label>
            <input
                placeholder="Ingresa tu Correo"
                name="email"
                type="email"
                onChange={handleEmailChange}
            />
            <button type="submit">Enviar</button>
            <div id="messages">&nbsp;</div>
        </form>

    );
};

export default EmailListForm;