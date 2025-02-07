import Footer from "./MyFooter";
import MyNavbar from "./MyNavbar";

export default function MyLayout({
    children,
}) {
  return (
    <div className="layout">
        <MyNavbar />
        { children }
    </div>
  );
}
