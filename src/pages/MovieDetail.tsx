import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CommentSection from "@/components/CommentSection";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const movies = [
  {
    id: 1,
    title: "Chiến Binh Hành Động",
    poster: movie1,
    rating: 4.5,
    year: 2024,
    genre: "Hành động",
    duration: "128 phút",
    description: "Một chiến binh đơn độc phải đối mặt với tổ chức tội phạm nguy hiểm nhất thế giới để cứu gia đình mình. Với những pha hành động mãn nhãn và kịch tính cao độ, bộ phim hứa hẹn mang đến trải nghiệm điện ảnh đáng nhớ.",
  },
  {
    id: 2,
    title: "Thành Phố Tương Lai",
    poster: movie2,
    rating: 4.8,
    year: 2024,
    genre: "Sci-Fi",
    duration: "145 phút",
    description: "Trong tương lai gần, thành phố được điều khiển bởi AI tiên tiến. Một hacker trẻ khám phá ra bí mật đen tối có thể thay đổi số phận nhân loại. Kỹ xảo đỉnh cao cùng cốt truyện sâu sắc.",
  },
  {
    id: 3,
    title: "Trái Tim Mùa Hè",
    poster: movie3,
    rating: 4.2,
    year: 2024,
    genre: "Drama",
    duration: "110 phút",
    description: "Câu chuyện tình yêu cảm động về hai người gặp nhau vào mùa hè. Diễn xuất tinh tế và kịch bản lay động lòng người, phim khắc họa chân thực những cảm xúc trong tình yêu.",
  },
  {
    id: 4,
    title: "Bóng Đêm Ẩn Giấu",
    poster: movie4,
    rating: 3.9,
    year: 2024,
    genre: "Horror",
    duration: "95 phút",
    description: "Một ngôi nhà cổ ẩn chứa bí mật đen tối từ quá khứ. Khi gia đình mới chuyển đến, những hiện tượng kỳ lạ bắt đầu xảy ra. Phim kinh dị gay cấn với nhiều tình tiết bất ngờ.",
  },
  {
    id: 5,
    title: "Vương Quốc Phép Thuật",
    poster: movie5,
    rating: 4.6,
    year: 2024,
    genre: "Fantasy",
    duration: "156 phút",
    description: "Hành trình phiêu lưu đầy mạo hiểm trong vương quốc ma thuật. Cậu bé bình thường khám phá sức mạnh tiềm ẩn và trở thành người hùng. Đồ họa tuyệt đẹp và thế giới fantasy phong phú.",
  },
  {
    id: 6,
    title: "Cười Vỡ Bụng",
    poster: movie6,
    rating: 4.0,
    year: 2024,
    genre: "Comedy",
    duration: "102 phút",
    description: "Hài kịch nhẹ nhàng về những tình huống dở khóc dở cười trong cuộc sống đời thường. Dàn diễn viên tài năng mang đến những tiếng cười sảng khoái cho khán giả.",
  },
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy phim</h1>
          <Link to="/">
            <Button variant="default">Quay về trang chủ</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover blur-2xl scale-110 opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
          <Link to="/">
            <Button variant="ghost" className="absolute top-4 left-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-end">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-48 h-72 object-cover rounded-lg shadow-2xl border-2 border-border"
            />
            <div className="flex-1 space-y-4 pb-4">
              <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <Badge variant="outline" className="border-primary text-primary">
                  {movie.genre}
                </Badge>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span>{movie.rating.toFixed(1)}/5.0</span>
                </div>
              </div>
              <Button variant="rating" size="lg" className="mt-4">
                <Star className="w-5 h-5 mr-2" />
                Đánh giá phim
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Tóm tắt</h2>
          <p className="text-foreground/90 leading-relaxed text-lg">
            {movie.description}
          </p>
        </div>

        <CommentSection />
      </div>
    </div>
  );
};

export default MovieDetail;
