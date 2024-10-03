import Heading from "@/components/atoms/Headings";
import Paragraph from "@/components/atoms/Paragraph";
import PriceButton from "@/components/molecules/PriceButtons";
import PrizeBanner from "@/components/molecules/PrizeBanners";

export default function StartJourney() {
  return (
    <section className="bg-gray-50 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-10 rounded-lg shadow-lg w-full max-w-2xl text-center">
        <Heading
          level="h1"
          className="text-3xl font-semibold text-gray-800 mb-6"
        >
          Get started with your iPhone photography journey
        </Heading>
        <div className="flex items-center justify-center space-x-4 mb-6">
          <PriceButton />
        </div>
        <Paragraph className="text-gray-500 text-sm">
          Limited time only launch price.
        </Paragraph>
      </div>
      <PrizeBanner />
    </section>
  );
}
