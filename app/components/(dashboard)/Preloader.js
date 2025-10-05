export default function Preloader() {
  return (
    <div
      x-show="loaded"
      x-init="window.addEventListener('DOMContentLoaded', () => {setTimeout(() => loaded = false, 500)})"
      className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary-500 border-t-transparent"></div>
    </div>
  )
}