import React from 'react'

export default function HeaderLandingPage() {
    return (
        <header className='header-landing-page'>
            <div className='container-header'>
                <div className='logo'><img src='/static/img/logo/logo_boulos.png' alt='logomarca'/><span>Boulos</span></div>
                <div className='container-nav'>
                    <nav className='nav'>
                        <ul className='font-weight-600'>
                            <li><a href='#xp'>experiência</a></li>
                        </ul>
                    </nav>
                    <div className='container-button'>
                        <button className='bg-primary font-weight-600'><a href='#newsletter'>CONTATO</a></button>
                    </div>
                </div>
            </div>
        </header>
    )
}
