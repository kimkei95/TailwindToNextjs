export default function Link({ href, children, className }) {
  return (
    <a href={href} className={`${className} text-blue-400`}>
      {children}
    </a>
  );
}
