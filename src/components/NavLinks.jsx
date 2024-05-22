import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Collections",
    path: "/collections",
  },
  {
    id: 2,
    text: "Men",
    path: "/men",
  },
  {
    id: 3,
    text: "Women",
    path: "/women",
  },
  {
    id: 4,
    text: "About",
    path: "/about",
  },
  {
    id: 5,
    text: "Contact",
    path: "/contact",
  },
];

function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.text}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavLinks;
