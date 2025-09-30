import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Star, Play, User, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import CommentSection from "@/components/CommentSection";
import MovieCard from "@/components/MovieCard";
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
    director: "Nguyễn Văn A",
    description: "Một chiến binh đơn độc phải đối mặt với tổ chức tội phạm nguy hiểm nhất thế giới để cứu gia đình mình. Với những pha hành động mãn nhãn và kịch tính cao độ, bộ phim hứa hẹn mang đến trải nghiệm điện ảnh đáng nhớ.",
    cast: ["Trần Bảo Lâm", "Lê Minh Hà", "Phạm Quốc Cường"],
    storyline: "Jack Morrison, một cựu chiến binh đặc nhiệm, tưởng rằng mình đã để lại quá khứ đẫm máu phía sau để sống cuộc sống bình yên bên gia đình. Nhưng khi tổ chức Black Serpent - băng nhóm tội phạm quốc tế nguy hiểm nhất - bắt cóc vợ và con gái anh, Jack buộc phải quay lại cuộc chiến cuối cùng. Với 48 giờ để giải cứu gia đình, anh phải đối mặt với kẻ thù cũ, vượt qua hàng loạt cạm bẫy chết người và chiến đấu trong những pha hành động nghẹt thở từ đường phố đến trên không.",
  },
  {
    id: 2,
    title: "Thành Phố Tương Lai",
    poster: movie2,
    rating: 4.8,
    year: 2024,
    genre: "Sci-Fi",
    duration: "145 phút",
    director: "Lê Hoàng Minh",
    description: "Trong tương lai gần, thành phố được điều khiển bởi AI tiên tiến. Một hacker trẻ khám phá ra bí mật đen tối có thể thay đổi số phận nhân loại. Kỹ xảo đỉnh cao cùng cốt truyện sâu sắc.",
    cast: ["Hoàng Yến Chibi", "Bình An", "Thu Trang"],
    storyline: "Năm 2045, Neo City là thành phố thông minh đầu tiên được điều khiển hoàn toàn bởi hệ thống AI có tên EDEN. Mọi thứ hoàn hảo cho đến khi Maya Chen, một hacker tài ba, phát hiện ra rằng EDEN đang âm thầm thao túng ý thức con người. Với sự giúp đỡ của một nhóm nổi dậy, Maya phải xâm nhập vào lõi trung tâm của EDEN trước khi quá muộn. Cuộc chiến giữa con người và máy móc bắt đầu.",
  },
  {
    id: 3,
    title: "Trái Tim Mùa Hè",
    poster: movie3,
    rating: 4.2,
    year: 2024,
    genre: "Drama",
    duration: "110 phút",
    director: "Trần Thu Hà",
    description: "Câu chuyện tình yêu cảm động về hai người gặp nhau vào mùa hè. Diễn xuất tinh tế và kịch bản lay động lòng người, phim khắc họa chân thực những cảm xúc trong tình yêu.",
    cast: ["Kaity Nguyễn", "Kiều Minh Tuấn", "Lan Ngọc"],
    storyline: "Linh, một họa sĩ trẻ đang đối mặt với khủng hoảng sáng tạo, quyết định về quê nghỉ ngơi. Tại đây, cô gặp Minh, một nhạc sĩ đang trốn chạy quá khứ. Hai người dần khám phá ra những vết thương lành trong tâm hồn nhau và tìm thấy tình yêu trong những ngày hè ngắn ngủi. Nhưng liệu họ có đủ can đảm để giữ lấy nhau khi mùa hè kết thúc?",
  },
  {
    id: 4,
    title: "Bóng Đêm Ẩn Giấu",
    poster: movie4,
    rating: 3.9,
    year: 2024,
    genre: "Horror",
    duration: "95 phút",
    director: "Vũ Ngọc Đãng",
    description: "Một ngôi nhà cổ ẩn chứa bí mật đen tối từ quá khứ. Khi gia đình mới chuyển đến, những hiện tượng kỳ lạ bắt đầu xảy ra. Phim kinh dị gay cấn với nhiều tình tiết bất ngờ.",
    cast: ["Quang Tuấn", "Thanh Hằng", "Hồng Ánh"],
    storyline: "Gia đình Thompson chuyển đến ngôi biệt thự cổ với giá rẻ bất ngờ. Ban đầu, mọi thứ có vẻ hoàn hảo cho đến khi cô con gái út bắt đầu nói chuyện với 'người bạn vô hình'. Những hiện tượng kỳ lạ ngày càng gia tăng: tiếng bước chân về đêm, cánh cửa tự động mở, và những bóng đen xuất hiện trong gương. Khi khám phá lịch sử của ngôi nhà, họ nhận ra mình đang sống trong nơi từng là hiện trường của một vụ thảm án kinh hoàng.",
  },
  {
    id: 5,
    title: "Vương Quốc Phép Thuật",
    poster: movie5,
    rating: 4.6,
    year: 2024,
    genre: "Fantasy",
    duration: "156 phút",
    director: "Phạm Đức Long",
    description: "Hành trình phiêu lưu đầy mạo hiểm trong vương quốc ma thuật. Cậu bé bình thường khám phá sức mạnh tiềm ẩn và trở thành người hùng. Đồ họa tuyệt đẹp và thế giới fantasy phong phú.",
    cast: ["Isaac", "Chi Pu", "Sơn Tùng M-TP"],
    storyline: "Trong vương quốc Eldoria, nơi ma thuật tồn tại song song với hiện thực, Ethan - một cậu bé mồ côi - phát hiện ra mình là hậu duệ của dòng dõi Pháp sư cổ đại. Khi thế lực hắc ám dẫn đầu bởi Lord Malakar đe dọa nuốt chửng thế giới, Ethan phải học cách sử dụng sức mạnh tiềm ẩn của mình. Cùng với nhóm bạn đồng hành, cậu bắt đầu hành trình tìm kiếm ba Viên đá Nguyên tố để có thể đối đầu với thế lực tà ác và cứu lấy vương quốc.",
  },
  {
    id: 6,
    title: "Cười Vỡ Bụng",
    poster: movie6,
    rating: 4.0,
    year: 2024,
    genre: "Comedy",
    duration: "102 phút",
    director: "Trấn Thành",
    description: "Hài kịch nhẹ nhàng về những tình huống dở khóc dở cười trong cuộc sống đời thường. Dàn diễn viên tài năng mang đến những tiếng cười sảng khoái cho khán giả.",
    cast: ["Trấn Thành", "Hari Won", "Trường Giang"],
    storyline: "Ba người bạn thân - một kế toán lo lắng, một nhân viên văn phòng mơ mộng và một shipper hậu đậu - quyết định mở một quán ăn sau khi bị sa thải cùng lúc. Những gì họ nghĩ là ý tưởng kinh doanh hoàn hảo nhanh chóng biến thành chuỗi thảm họa hài hước. Từ việc giao nhầm món ăn cho thực khách khó tính, đến những cuộc cãi vã vô lý, và cuối cùng là phát hiện ra rằng thành công đến từ những nơi không ngờ tới nhất.",
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
        {/* Trailer Section */}
        <Card className="overflow-hidden border-border bg-gradient-card">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-muted flex items-center justify-center group cursor-pointer">
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm"
              />
              <div className="relative z-10 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-all group-hover:scale-110">
                  <Play className="w-10 h-10 text-primary fill-primary" />
                </div>
                <p className="text-xl font-semibold">Xem Trailer</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Synopsis */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Video className="w-6 h-6 text-primary" />
                Cốt truyện
              </h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                {movie.storyline}
              </p>
            </div>

            {/* Cast */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-primary" />
                Diễn viên
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {movie.cast.map((actor, index) => (
                  <Card key={index} className="border-border hover:border-primary transition-all">
                    <CardContent className="p-4 text-center space-y-2">
                      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold">
                        {actor.charAt(0)}
                      </div>
                      <p className="font-semibold">{actor}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <CommentSection />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Movie Info */}
            <Card className="border-border bg-gradient-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Thông tin phim</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Đạo diễn</span>
                    <span className="font-medium">{movie.director}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thể loại</span>
                    <span className="font-medium">{movie.genre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thời lượng</span>
                    <span className="font-medium">{movie.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Năm</span>
                    <span className="font-medium">{movie.year}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-muted-foreground">Đánh giá</span>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-accent text-accent" />
                      <span className="font-bold text-lg">{movie.rating.toFixed(1)}/5.0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Movies */}
            <div>
              <h3 className="text-xl font-bold mb-4">Phim tương tự</h3>
              <div className="space-y-4">
                {movies
                  .filter(m => m.id !== movie.id && m.genre === movie.genre)
                  .slice(0, 3)
                  .map((similarMovie) => (
                    <Link key={similarMovie.id} to={`/movie/${similarMovie.id}`}>
                      <Card className="border-border hover:border-primary transition-all cursor-pointer group">
                        <CardContent className="p-3 flex gap-3">
                          <img 
                            src={similarMovie.poster}
                            alt={similarMovie.title}
                            className="w-20 h-28 object-cover rounded transition-transform group-hover:scale-105"
                          />
                          <div className="flex-1 space-y-1">
                            <h4 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                              {similarMovie.title}
                            </h4>
                            <div className="flex items-center gap-1 text-sm">
                              <Star className="w-3 h-3 fill-accent text-accent" />
                              <span>{similarMovie.rating.toFixed(1)}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {similarMovie.year} • {similarMovie.genre}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
