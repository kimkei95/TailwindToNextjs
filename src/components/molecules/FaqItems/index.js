import Label from "@/components/atoms/Label";
import Paragraph from "@/components/atoms/Paragraph";

export default function FAQItem({ id, question, answer }) {
  return (
    <div className="border-b border-gray-200 mb-4">
      <input type="checkbox" id={id} className="peer hidden" />
      <Label htmlFor={id}>{question}</Label>
      <div className="max-h-0 overflow-hidden peer-checked:max-h-full peer-checked:mt-4 transition-all duration-500">
        <Paragraph>{answer}</Paragraph>
      </div>
    </div>
  );
}
