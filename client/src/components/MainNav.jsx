import { NavLink } from "react-router";

function MainNav() {
  const menus = [
    { id: 1, text: "Login", path: "/" },
    { id: 2, text: "Register", path: "/register" },
  ];

  return (
    <nav>
      <div className="h-16 border flex justify-end items-center px-12 gap-4">
        {menus.map((item) => (
          <NavLink key={item.id} to={item.path}>
            {item.text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default MainNav;
