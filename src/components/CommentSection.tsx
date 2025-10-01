import { useState } from "react";
import { MessageSquare, Star, ThumbsUp, TrendingUp, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Comment {
  id: number;
  author: string;
  content: string;
  rating: number;
  date: string;
  likes: number;
}

const mockComments: Comment[] = [
  {
    id: 1,
    author: "Nguyễn Văn A",
    content: "Phim hay tuyệt vời! Kỹ xảo đỉnh cao, diễn xuất xuất sắc. Đáng xem!",
    rating: 5,
    date: "2 ngày trước",
    likes: 24,
  },
  {
    id: 2,
    author: "Trần Thị B",
    content: "Cốt truyện hơi chậm nhưng nhìn chung vẫn ổn. Diễn viên chính rất tốt.",
    rating: 4,
    date: "5 ngày trước",
    likes: 15,
  },
  {
    id: 3,
    author: "Lê Văn C",
    content: "Mình rất thích cách đạo diễn xây dựng nhân vật. Cảm xúc được truyền tải rất tốt.",
    rating: 5,
    date: "1 tuần trước",
    likes: 8,
  },
  {
    id: 4,
    author: "Phạm Thị D",
    content: "Phim ổn nhưng không đặc sắc lắm. Có vài tình tiết hơi rườm rà.",
    rating: 3,
    date: "1 tuần trước",
    likes: 3,
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [sortBy, setSortBy] = useState<"helpful" | "recent">("helpful");

  const handleSubmit = () => {
    if (newComment.trim() && userRating > 0) {
      const comment: Comment = {
        id: comments.length + 1,
        author: "Bạn",
        content: newComment,
        rating: userRating,
        date: "Vừa xong",
        likes: 0,
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setUserRating(0);
    }
  };

  const getSortedComments = () => {
    const sorted = [...comments];
    if (sortBy === "helpful") {
      return sorted.sort((a, b) => b.likes - a.likes);
    }
    return sorted; // recent is default order
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold">Đánh giá & Bình luận</h2>
          <span className="text-muted-foreground">({comments.length})</span>
        </div>
      </div>

      {/* Add Comment */}
      <Card className="border-border bg-gradient-card shadow-elegant">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Viết đánh giá của bạn</h3>
            {userRating > 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Đánh giá:</span>
                <span className="text-accent font-bold">{userRating}/5</span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 p-4 bg-muted/30 rounded-lg">
            <span className="text-sm font-medium">Chọn số sao:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setUserRating(star)}
                  className="transition-all hover:scale-125 active:scale-95"
                >
                  <Star
                    className={`w-7 h-7 ${
                      star <= userRating
                        ? "fill-accent text-accent"
                        : "text-muted-foreground hover:text-accent/50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <Textarea
            placeholder="Chia sẻ suy nghĩ của bạn về bộ phim... Bạn thích điều gì? Diễn xuất ra sao? Cốt truyện có hấp dẫn không?"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[120px] bg-background/50 border-border focus:border-primary transition-colors resize-none"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {newComment.length}/1000 ký tự
            </span>
            <Button 
              onClick={handleSubmit} 
              variant="default" 
              disabled={!newComment.trim() || userRating === 0}
              className="min-w-[120px]"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Đăng đánh giá
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Comments List */}
      <Tabs defaultValue="helpful" className="space-y-4">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger 
            value="helpful" 
            onClick={() => setSortBy("helpful")}
            className="flex items-center gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            Hữu ích nhất
          </TabsTrigger>
          <TabsTrigger 
            value="recent" 
            onClick={() => setSortBy("recent")}
            className="flex items-center gap-2"
          >
            <Clock className="w-4 h-4" />
            Mới nhất
          </TabsTrigger>
        </TabsList>

        <TabsContent value="helpful" className="space-y-4">
          {getSortedComments().map((comment) => (
          <Card key={comment.id} className="border-border hover:border-primary/50 transition-all bg-gradient-card shadow-soft hover:shadow-elegant group">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar className="w-12 h-12 border-2 border-border group-hover:border-primary/30 transition-colors">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold text-lg">
                    {comment.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-base">{comment.author}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < comment.rating
                                  ? "fill-accent text-accent"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">
                          {comment.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed bg-muted/20 p-3 rounded-lg">
                    {comment.content}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Hữu ích ({comment.likes})
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          {getSortedComments().map((comment) => (
          <Card key={comment.id} className="border-border hover:border-primary/50 transition-all bg-gradient-card shadow-soft hover:shadow-elegant group">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar className="w-12 h-12 border-2 border-border group-hover:border-primary/30 transition-colors">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold text-lg">
                    {comment.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-base">{comment.author}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < comment.rating
                                  ? "fill-accent text-accent"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">
                          {comment.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed bg-muted/20 p-3 rounded-lg">
                    {comment.content}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Hữu ích ({comment.likes})
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CommentSection;
