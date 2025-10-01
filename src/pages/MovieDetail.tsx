import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Star, Play, User, Video, MessageSquare, Users, Bookmark, Share2, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CommentSection from "@/components/CommentSection";
import MovieCard from "@/components/MovieCard";
import RatingDistribution from "@/components/RatingDistribution";
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
    imdbScore: 8.2,
    metacriticScore: 78,
    year: 2024,
    genre: "Hành động",
    duration: "128 phút",
    director: "Nguyễn Văn A",
    description: "Một chiến binh đơn độc phải đối mặt với tổ chức tội phạm nguy hiểm nhất thế giới để cứu gia đình mình. Với những pha hành động mãn nhãn và kịch tính cao độ, bộ phim hứa hẹn mang đến trải nghiệm điện ảnh đáng nhớ.",
    cast: ["Trần Bảo Lâm", "Lê Minh Hà", "Phạm Quốc Cường"],
    storyline: "Jack Morrison, một cựu chiến binh đặc nhiệm, tưởng rằng mình đã để lại quá khứ đẫm máu phía sau để sống cuộc sống bình yên bên gia đình. Nhưng khi tổ chức Black Serpent - băng nhóm tội phạm quốc tế nguy hiểm nhất - bắt cóc vợ và con gái anh, Jack buộc phải quay lại cuộc chiến cuối cùng. Với 48 giờ để giải cứu gia đình, anh phải đối mặt với kẻ thù cũ, vượt qua hàng loạt cạm bẫy chết người và chiến đấu trong những pha hành động nghẹt thở từ đường phố đến trên không.",
    reviewCount: 234,
    watchingCount: 45,
    ratingDistribution: { 5: 145, 4: 56, 3: 23, 2: 7, 1: 3 },
  },
  {
    id: 2,
    title: "Thành Phố Tương Lai",
    poster: movie2,
    rating: 4.8,
    imdbScore: 8.7,
    metacriticScore: 85,
    year: 2024,
    genre: "Sci-Fi",
    duration: "145 phút",
    director: "Lê Hoàng Minh",
    description: "Trong tương lai gần, thành phố được điều khiển bởi AI tiên tiến. Một hacker trẻ khám phá ra bí mật đen tối có thể thay đổi số phận nhân loại. Kỹ xảo đỉnh cao cùng cốt truyện sâu sắc.",
    cast: ["Hoàng Yến Chibi", "Bình An", "Thu Trang"],
    storyline: "Năm 2045, Neo City là thành phố thông minh đầu tiên được điều khiển hoàn toàn bởi hệ thống AI có tên EDEN. Mọi thứ hoàn hảo cho đến khi Maya Chen, một hacker tài ba, phát hiện ra rằng EDEN đang âm thầm thao túng ý thức con người. Với sự giúp đỡ của một nhóm nổi dậy, Maya phải xâm nhập vào lõi trung tâm của EDEN trước khi quá muộn. Cuộc chiến giữa con người và máy móc bắt đầu.",
    reviewCount: 567,
    watchingCount: 128,
    ratingDistribution: { 5: 412, 4: 123, 3: 25, 2: 5, 1: 2 },
  },
  {
    id: 3,
    title: "Trái Tim Mùa Hè",
    poster: movie3,
    rating: 4.2,
    imdbScore: 7.8,
    metacriticScore: 72,
    year: 2024,
    genre: "Drama",
    duration: "110 phút",
    director: "Trần Thu Hà",
    description: "Câu chuyện tình yêu cảm động về hai người gặp nhau vào mùa hè. Diễn xuất tinh tế và kịch bản lay động lòng người, phim khắc họa chân thực những cảm xúc trong tình yêu.",
    cast: ["Kaity Nguyễn", "Kiều Minh Tuấn", "Lan Ngọc"],
    storyline: "Linh, một họa sĩ trẻ đang đối mặt với khủng hoảng sáng tạo, quyết định về quê nghỉ ngơi. Tại đây, cô gặp Minh, một nhạc sĩ đang trốn chạy quá khứ. Hai người dần khám phá ra những vết thương lành trong tâm hồn nhau và tìm thấy tình yêu trong những ngày hè ngắn ngủi. Nhưng liệu họ có đủ can đảm để giữ lấy nhau khi mùa hè kết thúc?",
    reviewCount: 189,
    watchingCount: 32,
    ratingDistribution: { 5: 89, 4: 67, 3: 25, 2: 6, 1: 2 },
  },
  {
    id: 4,
    title: "Bóng Đêm Ẩn Giấu",
    poster: movie4,
    rating: 3.9,
    imdbScore: 7.1,
    metacriticScore: 65,
    year: 2024,
    genre: "Horror",
    duration: "95 phút",
    director: "Vũ Ngọc Đãng",
    description: "Một ngôi nhà cổ ẩn chứa bí mật đen tối từ quá khứ. Khi gia đình mới chuyển đến, những hiện tượng kỳ lạ bắt đầu xảy ra. Phim kinh dị gay cấn với nhiều tình tiết bất ngờ.",
    cast: ["Quang Tuấn", "Thanh Hằng", "Hồng Ánh"],
    storyline: "Gia đình Thompson chuyển đến ngôi biệt thự cổ với giá rẻ bất ngờ. Ban đầu, mọi thứ có vẻ hoàn hảo cho đến khi cô con gái út bắt đầu nói chuyện với 'người bạn vô hình'. Những hiện tượng kỳ lạ ngày càng gia tăng: tiếng bước chân về đêm, cánh cửa tự động mở, và những bóng đen xuất hiện trong gương. Khi khám phá lịch sử của ngôi nhà, họ nhận ra mình đang sống trong nơi từng là hiện trường của một vụ thảm án kinh hoàng.",
    reviewCount: 145,
    watchingCount: 18,
    ratingDistribution: { 5: 45, 4: 58, 3: 28, 2: 10, 1: 4 },
  },
  {
    id: 5,
    title: "Vương Quốc Phép Thuật",
    poster: movie5,
    rating: 4.6,
    imdbScore: 8.4,
    metacriticScore: 82,
    year: 2024,
    genre: "Fantasy",
    duration: "156 phút",
    director: "Phạm Đức Long",
    description: "Hành trình phiêu lưu đầy mạo hiểm trong vương quốc ma thuật. Cậu bé bình thường khám phá sức mạnh tiềm ẩn và trở thành người hùng. Đồ họa tuyệt đẹp và thế giới fantasy phong phú.",
    cast: ["Isaac", "Chi Pu", "Sơn Tùng M-TP"],
    storyline: "Trong vương quốc Eldoria, nơi ma thuật tồn tại song song với hiện thực, Ethan - một cậu bé mồ côi - phát hiện ra mình là hậu duệ của dòng dõi Pháp sư cổ đại. Khi thế lực hắc ám dẫn đầu bởi Lord Malakar đe dọa nuốt chửng thế giới, Ethan phải học cách sử dụng sức mạnh tiềm ẩn của mình. Cùng với nhóm bạn đồng hành, cậu bắt đầu hành trình tìm kiếm ba Viên đá Nguyên tố để có thể đối đầu với thế lực tà ác và cứu lấy vương quốc.",
    reviewCount: 412,
    watchingCount: 89,
    ratingDistribution: { 5: 267, 4: 102, 3: 32, 2: 8, 1: 3 },
  },
  {
    id: 6,
    title: "Cười Vỡ Bụng",
    poster: movie6,
    rating: 4.0,
    imdbScore: 7.5,
    metacriticScore: 68,
    year: 2024,
    genre: "Comedy",
    duration: "102 phút",
    director: "Trấn Thành",
    description: "Hài kịch nhẹ nhàng về những tình huống dở khóc dở cười trong cuộc sống đời thường. Dàn diễn viên tài năng mang đến những tiếng cười sảng khoái cho khán giả.",
    cast: ["Trấn Thành", "Hari Won", "Trường Giang"],
    storyline: "Ba người bạn thân - một kế toán lo lắng, một nhân viên văn phòng mơ mộng và một shipper hậu đậu - quyết định mở một quán ăn sau khi bị sa thải cùng lúc. Những gì họ nghĩ là ý tưởng kinh doanh hoàn hảo nhanh chóng biến thành chuỗi thảm họa hài hước. Từ việc giao nhầm món ăn cho thực khách khó tính, đến những cuộc cãi vã vô lý, và cuối cùng là phát hiện ra rằng thành công đến từ những nơi không ngờ tới nhất.",
    reviewCount: 298,
    watchingCount: 54,
    ratingDistribution: { 5: 134, 4: 112, 3: 38, 2: 10, 1: 4 },
  },
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

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
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover blur-3xl scale-110 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/40" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
          <Link to="/">
            <Button variant="ghost" className="absolute top-6 left-6 backdrop-blur-md bg-background/30 hover:bg-background/50 border border-border/50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-end w-full">
            <div className="relative group">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-56 h-80 object-cover rounded-xl shadow-elegant border-2 border-border/50 transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex-1 space-y-5 pb-4">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
                  {movie.title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  {movie.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary px-4 py-1.5 font-semibold">
                  {movie.genre}
                </Badge>
                <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-medium">{movie.year}</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-medium">{movie.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/30 px-3 py-1.5 rounded-full">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="font-medium">{movie.reviewCount} reviews</span>
                </div>
                <div className="flex items-center gap-2 bg-accent/20 px-3 py-1.5 rounded-full">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="font-medium text-accent">{movie.watchingCount} đang xem</span>
                </div>
              </div>

              {/* Rating Scores - Redesigned */}
              <div className="flex flex-wrap gap-4">
                <Card className="border-border/50 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-md shadow-elegant hover:shadow-soft transition-all hover:scale-105">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Star className="w-6 h-6 fill-white text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{movie.rating.toFixed(1)}</div>
                      <div className="text-xs text-muted-foreground font-medium">Cộng đồng</div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-500/20 via-yellow-500/10 to-transparent backdrop-blur-md shadow-elegant hover:shadow-soft transition-all hover:scale-105">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center font-bold text-base shadow-lg">
                      IMDb
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{movie.imdbScore}</div>
                      <div className="text-xs text-muted-foreground font-medium">/10 Score</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-500/30 bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent backdrop-blur-md shadow-elegant hover:shadow-soft transition-all hover:scale-105">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center font-bold text-base text-white shadow-lg">
                      MC
                    </div>
                    <div>
                      <div className="text-3xl font-bold">{movie.metacriticScore}</div>
                      <div className="text-xs text-muted-foreground font-medium">/100 Meta</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button variant="rating" size="lg" className="gap-2 shadow-elegant hover:shadow-soft transition-all">
                  <Star className="w-5 h-5" />
                  Đánh giá ngay
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="gap-2 border-primary/50 hover:bg-primary/10">
                      <Play className="w-5 h-5" />
                      Xem Trailer
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Trailer - {movie.title}</DialogTitle>
                    </DialogHeader>
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <img 
                        src={movie.poster} 
                        alt={movie.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm rounded-lg"
                      />
                      <div className="relative z-10 text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                          <Play className="w-10 h-10 text-primary fill-primary" />
                        </div>
                        <p className="text-muted-foreground">Trailer sẽ được thêm vào sớm</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`gap-2 ${isBookmarked ? 'bg-primary/10 border-primary text-primary' : ''}`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                  {isBookmarked ? 'Đã lưu' : 'Lưu phim'}
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`gap-2 ${isLiked ? 'bg-red-500/10 border-red-500 text-red-500' : ''}`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Đã thích' : 'Yêu thích'}
                </Button>

                <Button variant="outline" size="lg" className="gap-2">
                  <Share2 className="w-5 h-5" />
                  Chia sẻ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Synopsis */}
            <Card className="border-border bg-gradient-card shadow-elegant overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  Cốt truyện
                </h2>
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
                  <p className="text-foreground/90 leading-relaxed text-lg pl-4">
                    {movie.storyline}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cast */}
            <Card className="border-border bg-gradient-card shadow-elegant overflow-hidden">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  Diễn viên chính
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {movie.cast.map((actor, index) => (
                    <Card key={index} className="border-border hover:border-primary transition-all group cursor-pointer bg-gradient-to-br from-muted/30 to-transparent hover:shadow-elegant">
                      <CardContent className="p-6 text-center space-y-3">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-bold text-white shadow-soft group-hover:scale-110 transition-transform">
                          {actor.charAt(0)}
                        </div>
                        <p className="font-bold text-base group-hover:text-primary transition-colors">{actor}</p>
                        <p className="text-xs text-muted-foreground">Diễn viên</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <CommentSection />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rating Distribution */}
            {movie.ratingDistribution && (
              <div className="sticky top-6">
                <RatingDistribution 
                  distribution={movie.ratingDistribution}
                  totalReviews={movie.reviewCount || 0}
                />
              </div>
            )}

            {/* Movie Info */}
            <Card className="border-border bg-gradient-card shadow-elegant overflow-hidden">
              <div className="bg-gradient-primary p-4">
                <h3 className="text-xl font-bold text-white">Thông tin phim</h3>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Đạo diễn</span>
                    <span className="font-bold">{movie.director}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Thể loại</span>
                    <Badge variant="outline" className="border-primary text-primary">
                      {movie.genre}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Thời lượng</span>
                    <span className="font-bold">{movie.duration}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <span className="text-muted-foreground font-medium">Năm phát hành</span>
                    <span className="font-bold">{movie.year}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border border-primary/30">
                    <span className="text-muted-foreground font-medium">Đánh giá TB</span>
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 fill-accent text-accent" />
                      <span className="font-bold text-2xl">{movie.rating.toFixed(1)}</span>
                      <span className="text-muted-foreground">/5.0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Movies */}
            <Card className="border-border bg-gradient-card shadow-elegant overflow-hidden">
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-4 border-b border-border">
                <h3 className="text-xl font-bold">Phim tương tự</h3>
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {movies
                    .filter(m => m.id !== movie.id && m.genre === movie.genre)
                    .slice(0, 3)
                    .map((similarMovie) => (
                      <Link key={similarMovie.id} to={`/movie/${similarMovie.id}`}>
                        <Card className="border-border hover:border-primary transition-all cursor-pointer group bg-gradient-to-br from-muted/20 to-transparent hover:shadow-soft">
                          <CardContent className="p-3 flex gap-3">
                            <div className="relative">
                              <img 
                                src={similarMovie.poster}
                                alt={similarMovie.title}
                                className="w-20 h-28 object-cover rounded-lg transition-transform group-hover:scale-105 shadow-soft"
                              />
                              <div className="absolute top-1 right-1 bg-accent text-white text-xs font-bold px-2 py-0.5 rounded">
                                {similarMovie.rating.toFixed(1)}
                              </div>
                            </div>
                            <div className="flex-1 space-y-2">
                              <h4 className="font-bold line-clamp-2 group-hover:text-primary transition-colors text-sm leading-tight">
                                {similarMovie.title}
                              </h4>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3" />
                                <span>{similarMovie.year}</span>
                                <span>•</span>
                                <span>{similarMovie.genre}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <div className="flex items-center gap-1">
                                  <MessageSquare className="w-3 h-3" />
                                  <span>{similarMovie.reviewCount}</span>
                                </div>
                                <div className="flex items-center gap-1 text-accent">
                                  <Users className="w-3 h-3" />
                                  <span>{similarMovie.watchingCount}</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
