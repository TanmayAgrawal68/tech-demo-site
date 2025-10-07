import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import avatarA from "../../../assets/customers/customerA.jpg";
import avatarB from "../../../assets/customers/customerB.jpg";
import avatarC from "../../../assets/customers/customerC.jpg";
import avatarD from "../../../assets/customers/customerD.jpg";
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: `Techcanopy Software Lab (TSL) stood out based on their strong digital capabilities and diverse experience in building scalable solutions for platforms. We were pleased to see TSL leveraging innovation and agile methodologies to meet our end-to-end project requirements. TSL has assisted us in the design and development of a high-end mobility solution, all integral to inspiring efficiency, bolstering experiences, and building strong one-on-one relationships. Their ability to leverage the real value out of new and existing technologies has helped us build our platform`,
      name: "Rochan S",
      designation: "Group CTO, Innotera Platform Services",
      src: avatarA,
    },
    {
      quote: `Techcanopy is our trusted technology partner and has made a significant difference to our business. Techcanopy helped us implement a customer experience that we wanted our clients to have with Innvest and now we can manage clients' portfolios at all touchpoints. Techcanopy has demonstrated professionalism via a thorough approach to ensure the successful implementation of solutions. we are pleased to recommend Techcanopy as a reliable partner.`,
      name: "Santhosh Gururaj",
      designation: "Associate Vice President, Innvest",
      src: avatarB,
    },
    {
      quote: `Over the past years, our partnership has grown stronger and more successful, thanks to the unwavering commitment and collaborative spirit which we have achieved.  Your support and dedication has been invaluable and I am truly grateful to the journey we have embarked on together`,
      name: "Client From UAE",
      designation: "Top Telecom Company in UAE",
      src: avatarC,
    },
    {
      quote: `I would like to express my gratitude to the Techcanopy team. God sent you to me, I am so lucky. Before this project, I worked with another vendor for over a year and no results. But on the same project, we spent only 20 months together and got a premium quality results. I can say Techcanopy,  my partners, you are like family to me. Thank you for your outstanding work and partnership.`,
      name: "Client From Thailand",
      designation: "EdTech Company in Thailand",
      src: avatarD,
    },
  ];
  return <AnimatedTestimonials autoplay={true} testimonials={testimonials} />;
}
