export default function Footer() {
  return (
    <footer className="text-primary/50 w-full p-4 text-center">
      <hr className="m-auto mb-4 w-4/5 border-gray-300" />
      <small className="font-header">
        &copy; 2025{" "}
        <a
          className={`text-primary/75`}
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
