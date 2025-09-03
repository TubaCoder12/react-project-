import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Logout } from "../../app/features/Auth/Auth";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
`;

const NavLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #4b5563;
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    color: black;
    font-weight: 600;
  }
  &:hover {
    color: black;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled(Link)`
  position: relative;
  margin: 0 16px;
  display: inline-block;
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: white;
  border: 1px solid black;
  color: black;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 9999px;
`;

const Button = styled.button`
  padding: 8px 20px;
  background: black;
  color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const favourites = useSelector((state) => state.favourites.items);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  return (
    <NavbarWrapper>
      <Container>
        {/* Logo */}
        <Logo>FASCO</Logo>

        {/* Nav Links */}
        <NavLinks>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/deals">Deals</StyledNavLink>
          <StyledNavLink to="/new-arrivals">New Arrivals</StyledNavLink>
          <StyledNavLink to="/packages">Packages</StyledNavLink>
        </NavLinks>

        {/* Right Side */}
        <RightSide>
          <IconWrapper to="/FavouritesItems">
            {favourites.length > 0 ? (
              <FaHeart style={{ color: "red", fontSize: "1.5rem" }} />
            ) : (
              <FaRegHeart style={{ color: "gray", fontSize: "1.5rem" }} />
            )}
            {favourites.length > 0 && <Badge>{favourites.length}</Badge>}
          </IconWrapper>

          <IconWrapper to="/cart">
            <HiOutlineShoppingCart
              style={{ fontSize: "1.5rem", color: "#374151" }}
            />
            {cart.length > 0 && <Badge>{cart.length}</Badge>}
          </IconWrapper>

          {user ? (
            <Button onClick={() => dispatch(Logout())}>Logout</Button>
          ) : (
            <Link to="/login">
              <Button>Sign In</Button>
            </Link>
          )}
        </RightSide>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
