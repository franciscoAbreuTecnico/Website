import Footer from "./Footer";
import MyNavbar from "./MyNavbar";

export default function MyLayout({
    children,
}) {
  return (
    <div className="layout">
        <MyNavbar />
        { children }
        <Footer />
    </div>
  );
}
