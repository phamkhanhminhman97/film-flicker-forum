import { Trophy, Star, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Reviewer {
  id: number;
  name: string;
  reviewCount: number;
  avgRating: number;
  badge: string;
}

const topReviewers: Reviewer[] = [
  { id: 1, name: "Cinephile Pro", reviewCount: 156, avgRating: 4.2, badge: "Reviewer xuất sắc" },
  { id: 2, name: "Movie Buff", reviewCount: 134, avgRating: 4.5, badge: "Chuyên gia" },
  { id: 3, name: "Film Critic", reviewCount: 98, avgRating: 3.8, badge: "Phê bình viên" },
  { id: 4, name: "Cinema Lover", reviewCount: 87, avgRating: 4.0, badge: "Người đóng góp" },
];

const TopReviewers = () => {
  return (
    <Card className="border-border bg-gradient-card">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Trophy className="w-5 h-5 text-accent" />
          Top Reviewer tháng này
        </h3>
        
        <div className="space-y-3">
          {topReviewers.map((reviewer, index) => (
            <div 
              key={reviewer.id} 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground font-bold">
                    {reviewer.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {index < 3 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground">
                    {index + 1}
                  </div>
                )}
              </div>
              
              <div className="flex-1 space-y-1">
                <p className="font-semibold">{reviewer.name}</p>
                <Badge variant="outline" className="text-xs border-primary/50">
                  {reviewer.badge}
                </Badge>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    <span>{reviewer.reviewCount} reviews</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span>{reviewer.avgRating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopReviewers;
