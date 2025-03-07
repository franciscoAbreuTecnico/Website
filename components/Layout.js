import MyNavbar from "./Navbar";

export default function MyLayout({
    children,
}) {
  return (
    <div className="layout">
        { children }
    </div>
  );
}
