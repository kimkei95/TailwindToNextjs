export default function ImageWithOverlay({ src, alt, beforeText, afterText }) {
  return (
    <div className="relative w-full h-full">
      <img src={src} alt={alt} className="object-cover h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
      <div className="absolute top-0 left-0 p-4">
        <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium uppercase">
          {beforeText}
        </span>
      </div>
      <div className="absolute top-0 right-0 p-4">
        <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium uppercase">
          {afterText}
        </span>
      </div>
    </div>
  );
}
