import { Film, TrendingUp, Flame, Clock, Trophy, Star, Users } from "lucide-react";
import MovieCard from "@/components/MovieCard";
import FeaturedMovie from "@/components/FeaturedMovie";
import MovieSection from "@/components/MovieSection";
import CommunityActivity from "@/components/CommunityActivity";
import TopReviewers from "@/components/TopReviewers";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const movies = [
  { id: 1, title: "Chiến Binh Hành Động", poster: movie1, rating: 4.5, year: 2024, genre: "Hành động", description: "Một chiến binh đơn độc phải đối mặt với tổ chức tội phạm nguy hiểm nhất thế giới để cứu gia đình mình.", reviewCount: 234, watchingCount: 45 },
  { id: 2, title: "Thành Phố Tương Lai", poster: movie2, rating: 4.8, year: 2024, genre: "Sci-Fi", description: "Trong tương lai gần, thành phố được điều khiển bởi AI tiên tiến.", reviewCount: 567, watchingCount: 128 },
  { id: 3, title: "Trái Tim Mùa Hè", poster: movie3, rating: 4.2, year: 2024, genre: "Drama", description: "Câu chuyện tình yêu cảm động về hai người gặp nhau vào mùa hè.", reviewCount: 189, watchingCount: 32 },
  { id: 4, title: "Bóng Đêm Ẩn Giấu", poster: movie4, rating: 3.9, year: 2024, genre: "Horror", description: "Một ngôi nhà cổ ẩn chứa bí mật đen tối từ quá khứ.", reviewCount: 145, watchingCount: 18 },
  { id: 5, title: "Vương Quốc Phép Thuật", poster: movie5, rating: 4.6, year: 2024, genre: "Fantasy", description: "Hành trình phiêu lưu đầy mạo hiểm trong vương quốc ma thuật.", reviewCount: 412, watchingCount: 89 },
  { id: 6, title: "Cười Vỡ Bụng", poster: movie6, rating: 4.0, year: 2024, genre: "Comedy", description: "Hài kịch nhẹ nhàng về những tình huống dở khóc dở cười.", reviewCount: 298, watchingCount: 54 },
];

const trendingMovies = [...movies].sort((a, b) => b.rating - a.rating);
const newReleases = movies.slice(0, 4);
const topRated = [...movies].filter(m => m.rating >= 4.5);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Film className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              CineReview
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#trending" className="text-foreground/80 hover:text-primary transition-colors">Nổi bật</a>
            <a href="#community" className="text-foreground/80 hover:text-primary transition-colors">Cộng đồng</a>
            <a href="#new" className="text-foreground/80 hover:text-primary transition-colors">Mới nhất</a>
            <a href="#top" className="text-foreground/80 hover:text-primary transition-colors">Top đánh giá</a>
          </nav>
        </div>
      </header>

      {/* Featured Movie Hero */}
      <div className="pt-16">
        <FeaturedMovie
          id={movies[1].id}
          title={movies[1].title}
          backdrop={movies[1].poster}
          rating={movies[1].rating}
          year={movies[1].year}
          genre={movies[1].genre}
          description={movies[1].description}
        />
      </div>

      {/* Trending Section */}
      <div id="trending" className="container mx-auto px-4 py-16 space-y-16">
        <MovieSection
          title="Xu hướng hôm nay"
          icon={<TrendingUp className="w-8 h-8 text-primary" />}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {trendingMovies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </MovieSection>

        {/* Community Section */}
        <section id="community" className="space-y-6">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Cộng đồng</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CommunityActivity />
            </div>
            <div>
              <TopReviewers />
            </div>
          </div>
        </section>

        {/* Hot Movies Section */}
        <MovieSection
          title="Phim Hot"
          icon={<Flame className="w-8 h-8 text-accent" />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {movies.slice(0, 4).map((movie) => (
              <div key={movie.id} className="group relative overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-elegant">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-96 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{movie.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-semibold">{movie.rating.toFixed(1)}</span>
                    <span className="text-xs text-muted-foreground">• {movie.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MovieSection>

        {/* New Releases Section */}
        <MovieSection
          id="new"
          title="Phim mới cập nhật"
          icon={<Clock className="w-8 h-8 text-primary" />}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {newReleases.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </MovieSection>

        {/* Top Rated Section */}
        <MovieSection
          id="top"
          title="Đánh giá cao nhất"
          icon={<Trophy className="w-8 h-8 text-accent" />}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {topRated.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </MovieSection>

        {/* All Movies Section */}
        <MovieSection
          title="Tất cả phim"
          icon={<Film className="w-8 h-8 text-primary" />}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </MovieSection>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16 bg-card/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Film className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">CineReview</h3>
              </div>
              <p className="text-muted-foreground">
                Cộng đồng đánh giá phim hàng đầu Việt Nam
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Khám phá</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Phim nổi bật</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Phim mới</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Top đánh giá</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Thể loại</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Hành động</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Khoa học viễn tưởng</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Kinh dị</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Hài kịch</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Điều khoản</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Chính sách</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 CineReview - Cộng đồng đánh giá phim hàng đầu</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
