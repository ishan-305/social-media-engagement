import { EngagementData } from "./data";

export interface LikesPercentage {
  Post_Type: string;
  Likes_Percentage: number;
}

export function calculateLikesPercentage(
  data: EngagementData[]
): LikesPercentage[] {
  // Calculate total likes across all posts
  const totalLikes = data.reduce((sum, post) => sum + post.Likes, 0);

  // Group likes by post type and calculate percentages
  const likesByPostType: { [key: string]: number } = {};
  data.forEach((post) => {
    likesByPostType[post.Post_Type] =
      (likesByPostType[post.Post_Type] || 0) + post.Likes;
  });

  // Calculate integer percentage for each post type
  const percentages: LikesPercentage[] = Object.entries(likesByPostType).map(
    ([postType, likes]) => ({
      Post_Type: postType,
      Likes_Percentage: Math.round((likes / totalLikes) * 100),
    })
  );

  return percentages;
}
