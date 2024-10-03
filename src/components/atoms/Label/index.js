export default function Label({ htmlFor, children, className }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-lg font-semibold text-gray-800 cursor-pointer bg-gray-100 p-4 rounded-lg peer-checked:bg-blue-100 ${className}`}
    >
      {children}
    </label>
  );
}
