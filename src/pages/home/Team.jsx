import React, { useMemo, useState } from "react";
import { TeamMarquee } from "@/components/ui/team/TeamMarquee";
import { TeamModal } from "@/components/ui/team/TeamModal";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import vijendra from "../../assets/vijendra.webp";
import dheeraj from "../../assets/dheeraj.webp";
import rahul from "../../assets/Rahul.webp";
import aditya from "../../assets/Aditya.webp";
import CustomTextAnimation from "../../components/CustomTextAnimation";
const lorem =
  "" +
  "I am driven by a deep curiosity for how complex systems and teams evolve over time. " +
  "Across startups and enterprises, I have built platforms that balance reliability with speed, " +
  "and I believe craftsmanship, clarity, and empathy are the core of great products. " +
  "My work focuses on building strong foundations, mentoring teams, and creating experiences that scale gracefully. " +
  "I love collaborating across disciplines, simplifying the hard things, and turning ambiguity into momentum. " +
  "Outside work, I explore design, music, and the outdoors—always learning, always iterating.";

const team = [
  {
    name: "Dheeraj R S",
    role: "Director of Customer Success",
    avatar: dheeraj,
    about: "Crafts delightful multi-platform experiences.",
    aboutLong: `Dheeraj is the bridge between Techcanopy and our clients, making sure every project delivers real value. He’s all about understanding client goals, anticipating challenges, and turning ideas into actionable results. With Dheeraj on the team, every engagement is smooth, collaborative, and fun. 
He brings a strategic mindset to every client interaction, ensuring outcomes are measurable and impactful. Dheeraj is known for keeping projects on track, nurturing relationships, and helping clients see the full potential of what we build together.`,
    quote: "Success is creating impact, not just completing tasks.",
    signature: "Dheeraj",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dheeraj-rs-a409658a/",
        icon: FaLinkedin,
      },
      // {
      //   label: "Twitter",
      //   href: "https://x.com/vijendra_rao51",
      //   icon: FaXTwitter,
      // },
    ],
  },
  {
    name: "Vijendra Rao",
    role: "CEO & MD",
    avatar: vijendra,
    about: "Focused on outcomes and developer experience.",
    aboutLong: `Vijendra is the driving force behind Techcanopy, setting the vision and keeping the team energized and aligned. He loves tackling big challenges and turning ambitious ideas into tangible outcomes. From brainstorming sessions to project reviews, Vijendra is always hands-on, making sure innovation, collaboration, and creativity are part of everything we do. 
He has a knack for spotting opportunities where others see challenges and knows how to rally the team to make them happen. Under his leadership, Techcanopy isn’t just building products—it’s building a culture where ideas flourish and teams thrive. `,
    quote: "A vision becomes real when people come together to make it happen.",
    signature: "Vijendra",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/vijendraraotsl/",
        icon: FaLinkedin,
      },
      {
        label: "Twitter",
        href: "https://x.com/vijendra_rao51",
        icon: FaXTwitter,
      },
    ],
  },
  {
    name: "Rahul Tiwari",
    role: "Co-founder & CTO",
    avatar: rahul,
    about: "Architected cloud-native systems at scale.",
    aboutLong: `Rahul is our tech captain, always looking for smarter ways to build products that last and perform. He thrives on solving complex technical puzzles and experimenting with new technologies. His “let’s figure it out” attitude and hands-on approach mean the team is always learning, iterating, and improving. 
Rahul is also the go-to person for turning ambitious ideas into practical, scalable tech. He balances precision with creativity, pushing the boundaries of what our engineering team can achieve while keeping things fun and collaborative. `,
    quote:
      "Innovation happens when curiosity meets persistence and a willingness to try.",
    signature: "Rahul",
    socials: [
      {
        label: "LinkedIn",
        href: "http://linkedin.com/in/rahultiwaritsl",
        icon: FaLinkedin,
      },
      {
        label: "Twitter",
        href: "https://twitter.com/i/flow/login?redirect_after_login=%2FRahul_R_Tiwari",
        icon: FaXTwitter,
      },
    ],
  },
  {
    name: "Aditya Karanth A",
    role: "Director of Engineering",
    avatar: aditya,
    about: `"Delivers complex features with predictable cadence."`,
    aboutLong: `Aditya leads our engineering teams with energy, creativity, and precision, turning challenging ideas into smart, reliable, and scalable products. He was spearheading AI before it even became a buzzword, bringing foresight and innovation to everything he touches. His hands-on, collaborative approach encourages engineers to experiment, learn, and push boundaries. 
Aditya ensures that every project is not just built—it’s engineered to delight, perform, and scale. He loves mentoring the team, sharing insights, and pushing Techcanopy to explore emerging technologies before anyone else. With him, innovation isn’t optional—it’s expected. `,
    quote:
      "Engineering is about turning imagination into reality, one smart solution at a time.",
    signature: "Aditya",
    socials: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/adityakaranth/",
        icon: FaLinkedin,
      },
      // {
      //   label: "Twitter",
      //   href: "https://x.com/vijendra_rao51",
      //   icon: FaXTwitter,
      // },
    ],
  },
];

export function Team() {
  const [active, setActive] = useState(null);
  const items = useMemo(() => team, []);

  return (
    <section className="relative py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <CustomTextAnimation
            text=" Meet the Team"
            type="whipIn"
            className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground"
          />
          <CustomTextAnimation
            text="A diverse, passionate group building future-ready products"
            type="whipIn"
            className="mt-3 md:mt-4 text-foreground/70 max-w-2xl mx-auto"
          />
        </div>
        <TeamMarquee items={items} speed={40} onSelect={(m) => setActive(m)} />
      </div>
      <TeamModal
        open={!!active}
        member={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}

export default Team;
