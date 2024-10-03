import Button from "@/components/atoms/Buttons";

export default function PriceButton() {
  return (
    <Button className="bg-blue-600 text-white text-lg font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
      Purchase - $49 <span className="line-through text-gray-400">$99</span>
    </Button>
  );
}
