import type { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  tint?: "yellow" | "blue" | "red";
}

const tintMap = {
  yellow: "bg-[oklch(0.55_0.22_27)]", // ahora rojo (alias mantenido)
  blue: "bg-[oklch(0.35_0.15_260)]",
  red: "bg-[oklch(0.45_0.22_27)]",
};

export function PageHero({ image, eyebrow, title, description, tint = "yellow" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink">
      <div className="relative h-[55vh] min-h-[420px] w-full">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className={`absolute inset-0 ${tintMap[tint]} mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-center">
          {eyebrow && (
            <span className="hl-block self-start text-xs uppercase tracking-[0.3em] font-bold mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-5xl md:text-7xl max-w-3xl">
            <span className="hl-block">{title}</span>
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-base md:text-lg bg-ink text-background px-3 py-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
