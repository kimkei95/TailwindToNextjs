import Heading from "@/components/atoms/Headings";
import Paragraph from "@/components/atoms/Paragraph";
import ImageCard from "@/components/molecules/ImagesCard";

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1722363615532-e2d23590fd6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1727324735318-c25d437052f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 2",
    },
    {
      src: "https://koreaagain.net/wp-content/uploads/2024/07/20240703-%EC%BD%94%EC%96%B4-3-1024x683.jpg",
      alt: "Image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1519057016395-76b7690327e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Image 4",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <Heading
        level="h1"
        className="text-4xl font-bold text-center text-black mb-8"
      >
        Shot on iPhone.
      </Heading>
      <Paragraph className="text-center mb-12 text-black">
        All of the photos you see here are shot on the iPhone.
        <br />
        This is exactly the type of images you will be able to reproduce after
        taking this course.
      </Paragraph>
      <div className="flex overflow-x-auto">
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
}
