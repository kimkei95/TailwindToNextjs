import Link from "@/components/atoms/Link";
import Paragraph from "@/components/atoms/Paragraph";

export default function PrizeBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-green-50 mt-8 p-6 rounded-lg shadow-lg w-full max-w-2xl text-center">
      <div className="inline-block bg-gradient-to-r from-purple-400 to-green-400 text-white text-lg font-bold py-2 px-4 rounded-lg">
        ✦ Win prizes! ✦
      </div>
      <Paragraph className="text-gray-600 mt-4">
        Buy the course to be automatically put into a draw to
        <Link href="#" className="text-blue-600 font-semibold hover:underline">
          win a new iPhone 16 Pro!
        </Link>
      </Paragraph>
    </div>
  );
}
