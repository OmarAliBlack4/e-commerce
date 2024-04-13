import React, { useEffect, useState } from 'react'
import { Navbar, Container, FormControl, Nav, DropdownButton, Dropdown, Modal, Button } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
import { Link } from 'react-router-dom'
import NavbarSearchHook from '../../hook/search/navbar-search-hook'
const NavBarLog = () => {

    const [onChangeSearch , searchWord] = NavbarSearchHook();
    let sameWord = localStorage.getItem("searchWord")


    const [user , setUser] = useState('');
    //get all user data
    useEffect(()=>{
        if (localStorage.getItem("user") !== null) {
            setUser(JSON.parse(localStorage.getItem("user")));
        } 
    },[])

    // href="/user/profile"
    //log out alert
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  



    //on user log out
    const logOut = ()=>{
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setUser('')
            setShow(false)
            window.location.href = '/';
    }

    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>SIGN OUT ?!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure to Sign Out  ?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={logOut}>
                        Sign Out 
                    </Button>
                    </Modal.Footer>
                </Modal>

            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={logo} className='logo' alt='logo' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        type="search"
                        onChange={onChangeSearch}
                        value={sameWord}
                        placeholder="Search..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto">

                    {
                        user !== ''  ? (
                        <DropdownButton style={{display:"flex", alignItems:"center",justifyContent:"center",margin:"7px 0" }} id="dropdown-basic-button" title={user.name}>
                        
                            {
                                user.role === "admin" ? (
                                        <Link style={{ textDecoration: "none"}} to="/admin/allproducts">
                                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:"10px 0",color:"black", fontWeight:'bold'}}> Dashboard</div>
                                        </Link>
                                ) :(
                                        <Link style={{ textDecoration: "none"}} to="/user/profile">
                                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',margin:"10px 0",color:"black", fontWeight:'bold'}}> Profile</div>
                                        </Link>
                                )
                            }
                        <div onClick={handleShow} style={{display:'flex',alignItems:'center',justifyContent:'center', margin:"10px 0" , cursor:'pointer',fontWeight:'bold'}}> Log Out</div>
                        </DropdownButton>
                        ) : (
                            <Link to='/login' className='nav-text'>
                            <img style={{ marginRight:"5px" }} src={login} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" ,margin:"0"  }}>login</p>
                            </Link>
                        )
                    }

                        <Link to='/cart' className='nav-text position-relative'>
                            <img style={{ marginRight:"5px" }} src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white",margin:"0" }}>Cart</p>
                            <span class="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">
                            0
                            <span class="visually-hidden">unread messages</span>
                            </span>    
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLog;
