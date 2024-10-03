import Image from "@/components/atoms/Imagess";

export default function ImageCard({ src, alt }) {
  return (
    <div className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4">
      <Image src={src} alt={alt} className="rounded-lg shadow-lg" />
    </div>
  );
}
