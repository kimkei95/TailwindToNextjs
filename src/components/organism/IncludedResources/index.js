import Badge from "@/components/atoms/Badge";
import Heading from "@/components/atoms/Headings";
import ImageWithOverlay from "@/components/atoms/ImageWithOverlay";
import Paragraph from "@/components/atoms/Paragraph";
import ListWithLinks from "@/components/molecules/ListWithLinks";

export default function IncludedResource() {
  const listItems = [
    { text: "iPhone ProRAW Presets Pack 01", href: "#" },
    { text: "iPhone ProRAW Presets Pack 02", href: "#" },
  ];

  return (
    <div className="flex">
      {/* Left side content */}
      <div className="w-1/2 p-8">
        <Badge
          text="Included Resource"
          colorClass="bg-purple-100 text-purple-700"
        />
        <Heading level="h2" className="text-4xl mb-4">
          Included — Two Lightroom preset packs
        </Heading>
        <Paragraph className="text-gray-600 mb-6">Total value $78</Paragraph>
        <Paragraph className="text-gray-800">
          Included with the course is a pack of Lightroom presets that make it
          quick and easy to apply professional looks to your images.
          Specifically designed for photos shot on iPhone.
        </Paragraph>
        <ListWithLinks items={listItems} />
      </div>

      {/* Right side image */}
      <div className="w-1/2">
        <ImageWithOverlay
          src="https://plus.unsplash.com/premium_photo-1661962911608-ea55ac7785da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Building"
          beforeText="Before"
          afterText="After"
        />
      </div>
    </div>
  );
}
