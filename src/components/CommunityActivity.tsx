import { MessageSquare, Star, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Activity {
  id: number;
  type: "review" | "rating" | "discussion";
  user: string;
  movieTitle: string;
  content?: string;
  rating?: number;
  time: string;
}

const mockActivities: Activity[] = [
  {
    id: 1,
    type: "review",
    user: "Nguyễn Văn A",
    movieTitle: "Chiến Binh Hành Động",
    content: "Phim hay tuyệt vời! Kỹ xảo đỉnh cao...",
    rating: 5,
    time: "2 phút trước",
  },
  {
    id: 2,
    type: "rating",
    user: "Trần Thị B",
    movieTitle: "Thành Phố Tương Lai",
    rating: 4,
    time: "15 phút trước",
  },
  {
    id: 3,
    type: "discussion",
    user: "Lê Văn C",
    movieTitle: "Vương Quốc Phép Thuật",
    content: "Ai đã xem ending chưa? Cần thảo luận gấp!",
    time: "30 phút trước",
  },
  {
    id: 4,
    type: "review",
    user: "Phạm Thị D",
    movieTitle: "Trái Tim Mùa Hè",
    content: "Cảm động quá, khóc hết cả hộp khăn giấy",
    rating: 5,
    time: "1 giờ trước",
  },
];

const CommunityActivity = () => {
  const getIcon = (type: Activity["type"]) => {
    switch (type) {
      case "review":
        return <MessageSquare className="w-4 h-4 text-primary" />;
      case "rating":
        return <Star className="w-4 h-4 text-accent" />;
      case "discussion":
        return <TrendingUp className="w-4 h-4 text-primary" />;
    }
  };

  const getActivityText = (activity: Activity) => {
    switch (activity.type) {
      case "review":
        return "đã viết review cho";
      case "rating":
        return "đã đánh giá";
      case "discussion":
        return "đã thảo luận về";
    }
  };

  return (
    <Card className="border-border bg-gradient-card">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Hoạt động cộng đồng
          </h3>
          <Badge variant="outline" className="border-primary text-primary">
            Trực tiếp
          </Badge>
        </div>
        
        <div className="space-y-4">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  {activity.user.charAt(0)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-start gap-2">
                  {getIcon(activity.type)}
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-semibold">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{getActivityText(activity)}</span>{" "}
                      <span className="font-semibold text-primary">{activity.movieTitle}</span>
                    </p>
                    
                    {activity.rating && (
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(activity.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                        ))}
                      </div>
                    )}
                    
                    {activity.content && (
                      <p className="text-sm text-foreground/80 mt-1 line-clamp-1">
                        {activity.content}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityActivity;
