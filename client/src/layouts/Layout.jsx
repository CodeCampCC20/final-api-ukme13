import { Outlet } from "react-router";
import MainNav from "../components/MainNav";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <div className="flex-1 flex flex-col">
          <Outlet />
      </div>
    </div>
  );
}

export default Layout;
