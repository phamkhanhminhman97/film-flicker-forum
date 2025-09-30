import { Film, TrendingUp } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import heroCinema from "@/assets/hero-cinema.jpg";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const movies = [
  { id: 1, title: "Chiến Binh Hành Động", poster: movie1, rating: 4.5, year: 2024, genre: "Hành động" },
  { id: 2, title: "Thành Phố Tương Lai", poster: movie2, rating: 4.8, year: 2024, genre: "Sci-Fi" },
  { id: 3, title: "Trái Tim Mùa Hè", poster: movie3, rating: 4.2, year: 2024, genre: "Drama" },
  { id: 4, title: "Bóng Đêm Ẩn Giấu", poster: movie4, rating: 3.9, year: 2024, genre: "Horror" },
  { id: 5, title: "Vương Quốc Phép Thuật", poster: movie5, rating: 4.6, year: 2024, genre: "Fantasy" },
  { id: 6, title: "Cười Vỡ Bụng", poster: movie6, rating: 4.0, year: 2024, genre: "Comedy" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCinema}
            alt="Cinema"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-12 h-12 text-primary" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CineReview
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl">
            Khám phá, đánh giá và chia sẻ những bộ phim yêu thích cùng cộng đồng
          </p>
        </div>
      </div>

      {/* Movies Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Phim Nổi Bật</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2024 CineReview - Cộng đồng đánh giá phim hàng đầu</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
