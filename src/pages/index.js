import Image from "next/image";
import localFont from "next/font/local";
import Button from "@/components/atoms/Buttons";
import Banner from "@/components/organism";
import Card from "@/components/molecules/Cards";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import { gambar, gambar2 } from "@/components/constant/data";
import Banner2 from "@/components/organism/Banner-2";
import WhyThisCourse from "@/components/organism/WhyThisCourse";
import IncludedResource from "@/components/organism/IncludedResources";
import Gallery from "@/components/organism/Gallery";
import StartJourney from "@/components/organism/StartJourney";
import PrizesSection from "@/components/organism/PrizeSection";
import FAQSection from "@/components/organism/FaqSection";
import Footer from "@/components/organism/Footer";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center p-6 bg-white shadow-md mb-10">
        <h1 className="text-xl font-bold text-blue-700">
          iPhone Creator course
        </h1>

        <div className="gap-4 flex">
          <Button textButton="Login" />
          <Button textButton="Purchase" />
        </div>
      </nav>
      <Banner />
      <div className="gap-4 flex items-center justify-center">
        <Button
          buttonClsNm="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full inline-flex items-center shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-colors"
          textButton="Enter to win Prizes"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {gambar.map((item) => (
          <Card key={item.id} cardClassName={"p-4"}>
            <Image src={item.image} width={400} height={600} />
            <Card.Header name={item.name} desc={item.desc} />
          </Card>
        ))}
      </div>
      <Banner2 />
      <div class="flex flex-col lg:flex-row items-center justify-center bg-gray-50 py-16 px-4">
        <div class="mb-8 lg:mb-0 lg:mr-8">
          {gambar2.map((item) => (
            <Card
              key={item.id}
              cardClassName={"w-full max-w-sm rounded-lg shadow-lg"}
            >
              <Image src={item.image} width={300} height={400} />
            </Card>
          ))}
        </div>
        <WhyThisCourse />
      </div>
      <div className="container mx-auto p-6">
        <IncludedResource />
      </div>
      <div className="container mx-auto p-6 items-center">
        <Gallery />
      </div>
      <div>
        <StartJourney />
      </div>
      <div className="container mx-auto p-6">
        <PrizesSection />
      </div>
      <div className="container mx-auto p-6">
        <FAQSection />
      </div>
      <Footer />
    </>
  );
}
