export default function Heading({ level, children }) {
  const Tag = level;
  return <h3 className="text-4xl font-bold text-gray-800 mb-6">{children}</h3>;
}
