export default function GridShape({ className }) {
  return (
    <svg
      // Menerima className untuk pewarnaan
      className={className}
      width="450"
      height="450"
      viewBox="0 0 450 450"
      // Menggunakan warna teks saat ini sebagai warna isian (fill)
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // Opasitas rendah agar terlihat samar seperti di template
        opacity="0.06"
        d="M263.333 450H186.667V337.5H263.333V450ZM186.667 262.5H112.5V187.5H186.667V262.5ZM186.667 112.5V0H263.333V112.5H186.667ZM337.5 112.5H450V187.5H337.5V112.5ZM337.5 262.5V337.5H450V262.5H337.5ZM112.5 450V337.5H0V262.5H112.5V187.5H0V112.5H112.5V0H186.667V112.5H263.333V0H337.5V112.5H450V187.5H337.5V262.5H450V337.5H337.5V450H263.333V337.5H186.667V450H112.5Z"
      />
    </svg>
  );
}