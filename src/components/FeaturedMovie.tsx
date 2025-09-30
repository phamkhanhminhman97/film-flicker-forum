import { Link } from "react-router-dom";
import { Play, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FeaturedMovieProps {
  id: number;
  title: string;
  backdrop: string;
  rating: number;
  year: number;
  genre: string;
  description: string;
}

const FeaturedMovie = ({ id, title, backdrop, rating, year, genre, description }: FeaturedMovieProps) => {
  return (
    <div className="relative h-[85vh] overflow-hidden group">
      <div className="absolute inset-0">
        <img
          src={backdrop}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <Badge variant="outline" className="border-primary text-primary text-base px-4 py-1">
            {genre}
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            {title}
          </h2>
          
          <div className="flex items-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 fill-accent text-accent" />
              <span className="font-bold">{rating.toFixed(1)}/5.0</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span>{year}</span>
          </div>
          
          <p className="text-lg text-foreground/90 leading-relaxed max-w-xl">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to={`/movie/${id}`}>
              <Button size="lg" variant="default" className="text-base">
                <Play className="w-5 h-5 mr-2 fill-current" />
                Xem ngay
              </Button>
            </Link>
            <Link to={`/movie/${id}`}>
              <Button size="lg" variant="outline" className="text-base">
                <Info className="w-5 h-5 mr-2" />
                Chi tiết
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
