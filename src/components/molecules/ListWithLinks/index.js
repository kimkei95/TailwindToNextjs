import Link from "@/components/atoms/Link";

export default function ListWithLinks({ items }) {
  return (
    <ul className="list-disc pl-6 mt-4 text-gray-800">
      {items.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
}
