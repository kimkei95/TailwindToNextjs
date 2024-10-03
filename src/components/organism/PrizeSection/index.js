import Heading from "@/components/atoms/Headings";
import PrizeCard from "@/components/molecules/PrizeCards";

export default function PrizesSection() {
  const prizes = [
    {
      title: "iPhone 16 Pro",
      description:
        "The latest and greatest iPhone with a powerful A17 chip and a stunning camera system.",
      imgSrc:
        "https://asset.kompas.com/crops/RsZBQ7S-rU5e6eXmyocfJIIwvOo=/77x57:1100x739/750x500/data/photo/2024/09/10/66df7d8a3059c.jpg",
      imgAlt: "iPhone 16 Pro",
      bgColor: "bg-blue-100",
    },
    {
      title: "AirPods Pro",
      description:
        "Experience incredible sound with noise cancellation and spatial audio.",
      imgSrc: "https://macstore.id/wp-content/uploads/2022/10/MQD83_AV2.jpeg",
      imgAlt: "AirPods Pro",
      bgColor: "bg-green-100",
    },
    {
      title: "$50 Gift Card",
      description:
        "Spend it on anything you like! The perfect way to treat yourself or someone special.",
      imgSrc:
        "https://i0.wp.com/www.cheapgamesng.com/wp-content/uploads/2020/07/50-Apple-Store-iTunes-Gift-Card-Canada.jpg",
      imgAlt: "$50 Gift Card",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <section className="text-center bg-white p-10 rounded-lg shadow-lg max-w-3xl mx-auto">
      <Heading level="h2" className="text-4xl font-bold text-gray-800 mb-6">
        🎉 Prizes You Could Win! 🎉
      </Heading>
      {prizes.map((prize, index) => (
        <PrizeCard
          key={index}
          title={prize.title}
          description={prize.description}
          imgSrc={prize.imgSrc}
          imgAlt={prize.imgAlt}
          bgColor={prize.bgColor}
        />
      ))}
    </section>
  );
}
