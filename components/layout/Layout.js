import MyNavbar from "./Navbar";
import MyFooter from "./Footer";

export default function MyLayout({
    children,
}) {
  return (
    <div className="layout">
      <MyNavbar />
        { children }
      <MyFooter />
    </div>
  );
}
