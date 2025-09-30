import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: number;
  genre: string;
}

const MovieCard = ({ id, title, poster, rating, year, genre }: MovieCardProps) => {
  return (
    <Link to={`/movie/${id}`}>
      <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-glow cursor-pointer">
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{year} • {genre}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="text-foreground font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
