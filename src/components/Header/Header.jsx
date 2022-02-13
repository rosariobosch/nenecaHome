import { useState } from 'react';
//Components
import { CNavbar, CContainer, CNavbarBrand, CForm, CFormInput, CButton, CNavbarToggler, CCollapse, CNavbarNav, CNavItem, CNavLink, CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider } from '@coreui/react';
//Styles
import './Header.scss';
//Images
import logo from '../../assets/images/Header/Logo.png'
import cart from '../../assets/images/Header/Cart.png'

const Header = () => {

    const [visible, setVisible] = useState(false)

    return (
    <header className='header'>
        <CNavbar expand="lg" colorScheme="light">
        <CContainer fluid>
            <CNavbarBrand href="/"><img src={logo} alt="Logo" /></CNavbarBrand>
            <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
            />
            <CCollapse className="navbar-collapse nav-container" visible={visible}>
                <CNavbarNav className='nav-links'>
                    <CDropdown variant="nav-item" popper={false}>
                        <CDropdownToggle>Productos</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownDivider />
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    {/* <CDropdown variant="nav-item" popper={false}>
                        <CDropdownToggle>Preguntas Frecuentes</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownDivider />
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown> */}
                    <CNavItem>
                        <CNavLink href='/faqs'>Preguntas Frencuentes</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="#">Sobre Nosotras</CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink href="/contacto">Contacto</CNavLink>
                    </CNavItem>
                    
                </CNavbarNav>
                <CContainer fluid className='search-bar'>
                    <CForm className="d-flex">
                        <CFormInput type="search" className="me-2" placeholder="Buscar" />
                        <CButton type="submit" color="success" variant="outline">
                                Buscar
                        </CButton>
                    </CForm>
                </CContainer>
                <div className='cart'>
                    <CNavLink href="#">Mis Pedidos</CNavLink>
                    <button className='cart-icon'>
                        <img src={cart} alt="Carrito" />
                    </button>
                </div>
            </CCollapse>
        </CContainer>
        </CNavbar>
    </header>
    )
}

export default Header