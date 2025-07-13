export default function MyDefaultPage({ children }) {
  return (
    <div className="relative">
      {/* Background Layer */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ backgroundImage: 'url("/images/blue_black_background.webp")' }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
