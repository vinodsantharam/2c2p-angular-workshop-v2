type UserVideoViewModel = {
  id: string;
  name: string;
  language: string;
  genres: string[];
  rating: number;
  status: string;
  ended: string; // Could be a Date object or string, using string for simplicity
  image: string; // URL
};

export type { UserVideoViewModel };
