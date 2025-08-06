// Inside AppNavbar()
const { isLoggedIn, user, logout } = useContext(AuthContext);

...

{/* Right: Login & Cart */}
<Nav className="d-flex align-items-center">
  {!isLoggedIn ? (
    <Nav.Link as={NavLink} to="/login" className="me-3 d-flex align-items-center">
      <FaUser size={22} className="me-1" /> Login
    </Nav.Link>
  ) : (
    <Nav.Link className="me-3 d-flex align-items-center" disabled>
      <FaUser size={22} className="me-1" /> Welcome, {user?.name || "User"}
    </Nav.Link>
  )}

  {isLoggedIn && (
    <Nav.Link onClick={handleLogout} className="me-3">
      Logout
    </Nav.Link>
  )}

  <Nav.Link as={NavLink} to="/cart" className="position-relative">
    <FaShoppingCart size={24} />
    {cartItems.length > 0 && (
      <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
        {cartItems.length}
      </Badge>
    )}
  </Nav.Link>
</Nav>
