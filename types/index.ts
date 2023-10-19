export type ProductType = {
  _id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  slug: string;
  creator: string;
  views: number;
  made: string;
  category: {
    name: string;
  };
};
