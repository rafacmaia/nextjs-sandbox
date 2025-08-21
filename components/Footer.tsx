export default function Footer() {
  return (
    <footer className="text-primary w-full p-4 text-center opacity-45">
      <hr className="m-auto mb-4 w-4/5 border-gray-300" />
      <small className="font-header">
        &copy; 2025{" "}
        <a
          className={`hover:opacity-50`}
          href={`https://github.com/rafacmaia`}
          target="_blank"
          rel="noreferrer noopener"
        >
          Zou Labs 🐈‍⬛
        </a>
        . All rights reserved.
      </small>
    </footer>
  );
}
