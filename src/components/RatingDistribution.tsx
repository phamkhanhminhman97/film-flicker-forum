import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface RatingDistributionProps {
  distribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  totalReviews: number;
}

const RatingDistribution = ({ distribution, totalReviews }: RatingDistributionProps) => {
  const getPercentage = (count: number) => (count / totalReviews) * 100;

  return (
    <Card className="border-border bg-gradient-card">
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl font-bold">Phân bố đánh giá</h3>
        <div className="space-y-3">
          {[5, 4, 3, 2, 1].map((stars) => {
            const count = distribution[stars as keyof typeof distribution];
            const percentage = getPercentage(count);
            
            return (
              <div key={stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm font-medium">{stars}</span>
                  <Star className="w-3 h-3 fill-accent text-accent" />
                </div>
                <Progress value={percentage} className="flex-1 h-2" />
                <span className="text-sm text-muted-foreground w-12 text-right">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
        <div className="pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Tổng <span className="font-semibold text-foreground">{totalReviews}</span> đánh giá
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingDistribution;
