export interface Post {
  _id: number;
  title: string;
  _createdAt: string;
  _updatedAt: string;
  publishedAt: string;
  author: {
    name: string;
    image: string;
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}
