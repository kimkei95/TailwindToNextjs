import Heading from "@/components/atoms/Headings";
import Image from "@/components/atoms/Imagess";
import Paragraph from "@/components/atoms/Paragraph";

export default function PrizeCard({
  title,
  description,
  imgSrc,
  imgAlt,
  bgColor,
}) {
  return (
    <div className={`${bgColor} p-6 mb-6 rounded-lg shadow-md`}>
      <Heading level="h3" className="text-2xl font-semibold text-gray-800">
        {title}
      </Heading>
      <Paragraph className="text-gray-600 mt-2">{description}</Paragraph>
      <Image src={imgSrc} alt={imgAlt} className="mx-auto mt-4 w-72 h-72" />
    </div>
  );
}
