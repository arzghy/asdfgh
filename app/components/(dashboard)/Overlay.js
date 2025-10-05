export default function Overlay({ sidebarToggle, setSidebarToggle }) {
  return (
    <div
      onClick={() => setSidebarToggle(false)}
      className={`fixed inset-0 bg-black bg-opacity-50 z-999 ${
        sidebarToggle ? "block" : "hidden"
      }`}
    ></div>
  );
}