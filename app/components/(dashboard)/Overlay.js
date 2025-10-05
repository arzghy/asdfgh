"use client"
export default function Overlay({ sidebarToggle, setSidebarToggle }) {
  return (
    <div
      onClick={() => setSidebarToggle(false)}
      className={`fixed inset-0 z-9 bg-gray-900/50 ${sidebarToggle ? "block lg:hidden" : "hidden"}`}
    ></div>
  )
}
