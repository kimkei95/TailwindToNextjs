import Text from "@/components/atoms/Text";

export default function ListItem({ title, description }) {
  return (
    <li className="text-gray-700">
      <h3 className="font-semibold text-lg text-gray-900 mb-1">{title}</h3>
      <Text>{description}</Text>
    </li>
  );
}
