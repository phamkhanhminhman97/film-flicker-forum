import { ReactNode } from "react";

interface MovieSectionProps {
  id?: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

const MovieSection = ({ id, title, icon, children }: MovieSectionProps) => {
  return (
    <section id={id} className="space-y-6">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default MovieSection;
