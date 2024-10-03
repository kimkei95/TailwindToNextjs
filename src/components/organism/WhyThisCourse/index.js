import Heading from "@/components/atoms/Headings";
import ListItem from "@/components/molecules/ListItem";

export default function WhyThisCourse() {
  const listItems = [
    {
      title: "For All Levels",
      description:
        "Whether you’re a complete beginner or already have some experience, this course is designed to provide value for everyone.",
    },
    {
      title: "Easy to Understand",
      description:
        "No confusing terms or technical talk — just straightforward advice you can use right away.",
    },
    {
      title: "Proven Techniques",
      description:
        "Inspired by my popular YouTube videos, these methods have already helped thousands improve their photos.",
    },
    {
      title: "Learn at Your Own Pace",
      description:
        "Enjoy lifetime access to the course, so you can learn whenever it’s convenient for you.",
    },
  ];

  return (
    <div className="text-center lg:text-left">
      <Heading level="h2">Why this course.</Heading>
      <ul className="space-y-6">
        {listItems.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}
