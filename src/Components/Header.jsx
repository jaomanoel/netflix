import React, {useEffect, useState} from 'react'

import "../CSS/Header.css"


function Header() {
    const [isNotifly, setIsNotifly] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [isNavegation, setIsNavegation] = useState(false);
    const [invisibleHeader, setInvisibleHeader] = useState(false);

    const handleNotifly = event => {
        event.preventDefault();

        setIsNotifly(current => !current);
    };
    
    const handleProfile = event => {
        event.preventDefault();
        
        setIsProfile(current => !current);
    }

    const handleNavegation = event => {
        event.preventDefault();

        setIsNavegation(current => !current);
    }

    useEffect(() => {
        const veryHeader = event => {

            if(window.scrollY > 10){
                setInvisibleHeader(true);
            }else{
                setInvisibleHeader(false);
            }

        }

        window.addEventListener('scroll', veryHeader);
        return () => {
            window.removeEventListener('scroll', veryHeader);
        }
    }, [])
    

    return (
        <div className='Header'>
            <div className='header'>
                <div className={invisibleHeader ? 'header-normal' : 'header-normal invisible'}>
                    <div className='logo'>
                        <img src="./netflix.png" alt="logo Netflix" />
                    </div>

                    <div className='nav'>
                        <div>
                            <a href="#">Início</a>
                            <a href="#">Séries</a>
                            <a href="#">Filmes</a>
                            <a href="#">Bombando</a>
                            <a href="#">Minha lista</a>
                            <a href="#">Navegar por idiomas</a>
                        </div>

                        <div className='profile-nav'>
                            <a href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path>
                                </svg>
                            </a>
                            <a href="#">Infantil</a>
                            <a href="#" className='notifly' onMouseEnter={handleNotifly} onMouseLeave={handleNotifly}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path>
                                </svg>

                                <div className={isNotifly ? 'notifly-container' : 'hidden'} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                    <div className='content'>
                                        <div className='notifly-1'>
                                            <div>
                                                <div className='notifly-img'>
                                                    <div className='bottom'>
                                                        <div className='middle'>
                                                            <div className='top'>
                                                                <img src="./notifly1.jpg" alt="notifly 1"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div>
                                                <p>
                                                    Sugestões para você <br /> Descubra nossas recomendações para você.
                                                </p>
                                                <span>há 4 dias</span>
                                            </div>
                                        </div>

                                        <div className="notifly-2">
                                            <div>
                                                <div className='notifly-img'>
                                                    <div className='bottom'>
                                                        <div className='middle'>
                                                            <div className='top'>
                                                                <img src="./notifly2.jpg" alt="notifly 2"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>
                                            <div>
                                                <p>
                                                    Top 10 de hoje: Brasil <br /> Assistir Tudo
                                                </p>
                                                <span>há 1 mês</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>    
                            <a href="#" className='profile' onMouseEnter={handleProfile} onMouseLeave={handleProfile}>
                                <div>
                                    <img src="./profile.png" alt="profile" />
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                </div>
                          
                                <div className={isProfile ? 'profile-container' : 'hidden'} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill-hidden" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                    </svg>
                                    <div className='content'>
                                        <div>
                                            <a href="#">
                                                <div>
                                                    <img src="./profile2.png" alt="Image do perfil" />
                                                </div>
                                                <div>
                                                    <p>João</p>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div>
                                                    <img src="./profile3.png" alt="Image do perfil infantil" />
                                                </div>
                                                <div>
                                                    <p>Infantil</p>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div>
                                                    <svg width="32" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p>Gerenciar perfis</p>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div>
                                                    <svg width="32" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z" fill="currentColor"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p>Conta</p>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p>Central de Ajuda</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className='exit'>
                                            <p>Sair da Netflix</p>
                                        </div>
                                    </div>
                                </div>

                            </a>
                        </div>
                    </div>
                </div>

                <div className={invisibleHeader ? 'header-responsive' : 'header-responsive invisible'}>
                    <div className='logo'>
                        <img src="./netflix.png" alt="logo Netflix" />
                    </div>
                    
                    <div className='navegation' onMouseEnter={handleNavegation} onMouseLeave={handleNavegation}>
                        <div>
                            <p>Navegar</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                            </svg>
                        </div>

                        <div className={isNavegation ? 'navegation-conteiner' : 'hidden'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill-hidden-navegation" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>

                            <div className='content'>
                                <a href="#">Inicio</a>
                                <a href="#">Series</a>
                                <a href="#">Filmes</a>
                                <a href="#">Bombando</a>
                                <a href="#">Minha lista</a>
                                <a href="#">Navegar por idiomas</a>
                            </div>
                        </div>
                    </div>

                    <div className='profile-nav'>
                        <a href="#">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z" fill="currentColor"></path>
                            </svg>
                        </a>
                        
                        <a href="#" className='notifly' onMouseEnter={handleNotifly} onMouseLeave={handleNotifly}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path>
                            </svg>

                            <div className={isNotifly ? 'notifly-container' : 'hidden'} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                                <div className='content'>
                                    <div className='notifly-1'>
                                        <div>
                                            <div className='notifly-img'>
                                                <div className='bottom'>
                                                    <div className='middle'>
                                                        <div className='top'>
                                                            <img src="./notifly1.jpg" alt="notifly 1"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                        <div>
                                            <p>
                                                Sugestões para você <br /> Descubra nossas recomendações para você.
                                            </p>
                                            <span>há 4 dias</span>
                                        </div>
                                    </div>

                                    <div className="notifly-2">
                                        <div>
                                            <div className='notifly-img'>
                                                <div className='bottom'>
                                                    <div className='middle'>
                                                        <div className='top'>
                                                            <img src="./notifly2.jpg" alt="notifly 2"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                        <div>
                                            <p>
                                                Top 10 de hoje: Brasil <br /> Assistir Tudo
                                            </p>
                                            <span>há 1 mês</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a> 

                        <a href="#" className='profile' onMouseEnter={handleProfile} onMouseLeave={handleProfile}>
                            <div>
                                <img src="./profile.png" alt="profile" />
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                            </div>

                            <div className={isProfile ? 'profile-container' : 'hidden'} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up-fill-hidden" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                                <div className='content'>
                                    <div>
                                        <a href="#">
                                            <div>
                                                <img src="./profile2.png" alt="Image do perfil" />
                                            </div>
                                            <div>
                                                <p>João</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div>
                                                <img src="./profile3.png" alt="Image do perfil infantil" />
                                            </div>
                                            <div>
                                                <p>Infantil</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div>
                                                <svg width="32" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p>Gerenciar perfis</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div>
                                                <svg width="32" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <p>Conta</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p>Central de Ajuda</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className='exit'>
                                        <p>Sair da Netflix</p>
                                    </div>
                                </div>
                            </div>
                        </a>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header