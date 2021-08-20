import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { Avatar } from "@material-ui/core";
import { NavLink, useHistory } from 'react-router-dom';
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from "../features/user/userSlice";
const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = () =>{
    auth.signInWithPopup(provider)
        .then(result =>{
          let user = result.user;
          dispatch(setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          }))
        })
  }
  return (
    <div>
      <Navbar>
        <NavLink to='/'>
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="zomato"
        />
        </NavLink>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexGrow: "1",
          }}
        >
          <SearchBox>
            <SearchBoxRight>
              <div className="right">
                <LocationOnIcon />
                <h3>Surat</h3>
              </div>
              <div className="left">
                <ArrowDropDownIcon />
              </div>
            </SearchBoxRight>

            <SearchBoxLeft>
              <SearchOutlinedIcon />
              <input
                type="text"
                name="search"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </SearchBoxLeft>
          </SearchBox>
          <UserBox>
            <Avatar 
              onClick={handleLogin}
              src={userPhoto}
              className="img"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                overflow: "hidden",
                marginLeft: "20px",
              }}
            />
            <h3>{userName}</h3>
            <ArrowDropDownIcon />
          </UserBox>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;

const Navbar = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  height: 72px;
  display: flex;
  align-items: center;
  img {
    height: 2rem;
    object-fit: contain;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid lightgrey;
  max-width: 64%;
  width: 100%;
  background: #fff;
  margin-left: 30px;
  padding: 10px 0;
  box-shadow: 0 10px 10px -8px rgba(241, 242, 246, 0.8),
    10px 0 10px -8px rgba(241, 242, 246, 0.8),
    -10px 0 10px -8px rgba(241, 242, 246, 0.8);
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .MuiSvgIcon-root,
  h3 {
    font-size: 20px !important;
    cursor: pointer;
  }
  h3 {
    letter-spacing: 1.5px;
    font-weight: 500;
  }
  .img{
    .MuiAvatar-img{
      height: 3rem;
    }
  }
`;

const SearchBoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  padding: 0 10px;
  border-right: 3px solid lightgrey;
  .right {
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
      color: #ff7675 !important;
      font-size: 25px !important;
    }

    h3 {
      font-size: 16px;
      margin-right: 10px;
      color: grey;
      font-weight: 400;
      margin-left: 10px;
    }
  }
  .left {
    .MuiSvgIcon-root {
      font-size: 25px !important;
    }
  }
`;

const SearchBoxLeft = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  width: 70%;
  .MuiSvgIcon-root {
    font-size: 25px !important;
    color: grey;
  }
  input {
    font-size: 16px;
    flex-grow: 1;
    margin-left: 10px;
    font-family: Helvetica, "Lato", sans-serif;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
