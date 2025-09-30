import { useState } from "react";
import { MessageSquare, Star, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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
    likes: 12,
  },
  {
    id: 2,
    author: "Trần Thị B",
    content: "Cốt truyện hơi chậm nhưng nhìn chung vẫn ổn. Diễn viên chính rất tốt.",
    rating: 4,
    date: "5 ngày trước",
    likes: 8,
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [newComment, setNewComment] = useState("");
  const [userRating, setUserRating] = useState(0);

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

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold">Đánh giá & Bình luận</h2>
      </div>

      {/* Add Comment */}
      <Card className="border-border">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Đánh giá của bạn:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setUserRating(star)}
                  className="transition-all hover:scale-110"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= userRating
                        ? "fill-accent text-accent"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <Textarea
            placeholder="Chia sẻ suy nghĩ của bạn về bộ phim..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px] bg-background border-border"
          />
          <Button onClick={handleSubmit} variant="default" className="w-full sm:w-auto">
            Gửi bình luận
          </Button>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="border-border">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {comment.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold">{comment.author}</p>
                      <div className="flex items-center gap-2 mt-1">
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
                        <span className="text-xs text-muted-foreground">
                          {comment.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/90">{comment.content}</p>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {comment.likes}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
