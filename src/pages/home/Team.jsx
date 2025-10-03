import React, { useMemo, useState } from "react";
import { TeamMarquee } from "@/components/ui/team/TeamMarquee";
import { TeamModal } from "@/components/ui/team/TeamModal";

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
    name: "Jane Doe",
    role: "Founder & CEO",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=480&h=640&fit=crop",
    about: "Focused on outcomes and developer experience.",
    aboutLong: lorem,
    quote: "Great products are built at the intersection of heart and rigor.",
    signature: "Jane",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "/vite.svg" },
      { label: "Twitter", href: "https://x.com", icon: "/vite.svg" },
    ],
  },
  {
    name: "Aarav Mehta",
    role: "CTO",
    avatar:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=480&h=640&fit=crop",
    about: "Architected cloud-native systems at scale.",
    aboutLong: lorem,
    quote: "Performance is a feature—measured, designed, and iterated.",
    signature: "Aarav",
    socials: [
      { label: "GitHub", href: "https://github.com", icon: "/vite.svg" },
      { label: "LinkedIn", href: "https://linkedin.com", icon: "/vite.svg" },
    ],
  },
  {
    name: "Nisha Patel",
    role: "Design Lead",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=480&h=640&fit=crop",
    about: "Crafts delightful multi-platform experiences.",
    aboutLong: lorem,
    quote: "Design is how it works, but also how it feels.",
    signature: "Nisha",
    socials: [
      { label: "Dribbble", href: "https://dribbble.com", icon: "/vite.svg" },
      { label: "Behance", href: "https://behance.net", icon: "/vite.svg" },
    ],
  },
  {
    name: "Rohit Kumar",
    role: "Engineering Manager",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=480&h=640&fit=crop",
    about: "Delivers complex features with predictable cadence.",
    aboutLong: lorem,
    quote: "Teams ship reliably when systems are simple and goals are clear.",
    signature: "Rohit",
    socials: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "/vite.svg" },
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
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Meet the Team
          </h2>
          <p className="mt-3 md:mt-4 text-foreground/70 max-w-2xl mx-auto">
            A diverse, passionate group building future-ready products.
          </p>
        </div>
        <TeamMarquee items={items} speed={90} onSelect={(m) => setActive(m)} />
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
