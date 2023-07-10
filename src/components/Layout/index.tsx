import { LayoutProps } from "@interfaces/LayoutProps";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F2F2F2",
        padding: "0 0 0 242px",
      }}
    >
      <Sidebar />
      <Topbar>{children}</Topbar>
    </div>
  );
};

export default Layout;
