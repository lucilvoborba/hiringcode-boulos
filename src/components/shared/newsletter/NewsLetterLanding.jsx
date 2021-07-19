import React from 'react'

export default function NewsLetterLanding() {
    const handleActionForm = (e)=>{
        e.preventDefault();
        localStorage.setItem('emailNewsLetter',e.target.childNodes[0].value)
    };
    return (
        <div id='newsletter' className='wrapper-newsletter-landing'>
            <h4 className='m-0 mb-4'>Assine a nossa newsletter!</h4>
            <form onSubmit={handleActionForm}>
                <input type='email' placeholder='informe seu e-mail'/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
