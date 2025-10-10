import { cn } from "@/lib/utils";
import { CardStack } from "../../components/ui/card-stack";

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-secondary-foreground text-secondary dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

export function ImageStack() {
  return (
    <div className="relative w-full h-[70vh] md:h-[100vh] flex items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    content: (
      <div className="relative w-full h-full overflow-hidden rounded-md">
        <img
          src="https://images.unsplash.com/photo-1603969280040-3bbb77278211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Mobile-app"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4">
          <p className="text-white font-semibold text-center">
            Integrating the digital platform with existing systems and
            third-party applications.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    content: (
      <div className="relative w-full h-full overflow-hidden rounded-md">
        <img
          src="https://images.unsplash.com/photo-1746014600929-8e4bf8d370f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Elon Musk"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4">
          <p className="text-white font-semibold text-center">
            Designing intuitive and user-friendly interfaces for the digital
            platform.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="relative w-full h-full overflow-hidden rounded-md">
        <img
          src="https://images.unsplash.com/photo-1634836023845-eddbfe9937da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Tyler Durden"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/30 p-4">
          <p className="text-white font-semibold text-center">
            Implementing security measures to protect the digital platform and
            its data.
          </p>
        </div>
      </div>
    ),
  },
];
