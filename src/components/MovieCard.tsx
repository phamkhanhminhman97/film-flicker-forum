import { Star, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: number;
  genre: string;
  reviewCount?: number;
  watchingCount?: number;
}

const MovieCard = ({ id, title, poster, rating, year, genre, reviewCount = 0, watchingCount = 0 }: MovieCardProps) => {
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
          {watchingCount > 0 && (
            <div className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span className="text-xs font-medium">{watchingCount}</span>
            </div>
          )}
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-foreground font-medium">{rating.toFixed(1)}</span>
              </div>
              {reviewCount > 0 && (
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MessageSquare className="w-3 h-3" />
                  <span className="text-xs">{reviewCount}</span>
                </div>
              )}
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            {year} • {genre}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
