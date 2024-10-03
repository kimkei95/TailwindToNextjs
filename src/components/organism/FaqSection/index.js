import Heading from "@/components/atoms/Headings";
import FAQItem from "@/components/molecules/FaqItems";

export default function FAQSection() {
  const faqs = [
    {
      id: "faq1",
      question: "Which iPhone do I need?",
      answer:
        "We would recommend a recent Pro model, due to the heavy importance of ProRAW and larger sensor, only usually available on the Pro models.",
    },
    {
      id: "faq2",
      question: "What's included in the course?",
      answer: "You'll receive a mix of written and video content.",
    },
    {
      id: "faq3",
      question: "Who is this course for?",
      answer:
        "Both beginners and experts. We've tailored the course to cater to anyone who wants to get the most out of the iPhone camera.",
    },
  ];

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg text-black">
        <Heading>Frequently Asked Questions</Heading>
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}
