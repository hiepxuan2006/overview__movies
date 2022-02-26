import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Header.scss";
function Header(props) {
  const [keywords, setKeyword] = useState("");
  const navigate = useNavigate();
  const handleOnchangeInput = (e) => {
    let keywords = e.target.value;
    setKeyword(keywords);
    if (keywords.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`);
    } else {
      navigate("/");
    }
  };
  const gohome = () => {
    navigate("/");
  };
  const [scrollY, setScrollY] = useState();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [window.scrollY]);
  const Nav = [
    {
      display: "Home",
      path: "/",
      icon: "FaHome",
    },
    {
      display: "Movies",
      path: `/movie`,
      icon: "RiMovie2Fill",
    },
    {
      display: "TV Series",
      path: "/tv",
      icon: "RiSlideshow3Fill",
    },
  ];
  const { pathname } = useLocation();

  const active = Nav.findIndex((e) => e.path === pathname);

  return (
    <div
      style={
        scrollY < 80
          ? {
            backgroundColor: "transparent",
            color: '#000'
          }
          : { backgroundColor: "#000" }
      }
      className="navigation"
    >
      <div className="nav__container">
        <div className="nav__logo" onClick={gohome}>
          <img src={logo} alt="" />
        </div>
        <div className="nav__search">
          <BsSearch className="nav__icon" />
          <input
            type="text"
            placeholder="Input title , genres, people"
            onChange={handleOnchangeInput}
            value={keywords}
          />
        </div>
      </div>
      <ul className="header__nav">
        {Nav.map((e, i) => (
          <li key={i} className={`${i === active ? "active" : ""}`}>
            <Link
              style={
                window.scrollY < 50
                  ? {
                    color: 'red'
                  }
                  : { color: '#fff' }
              }
              to={e.path}>{e.display}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
