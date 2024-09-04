export interface TrekCard {
  _id: string;
  slug: {
    current: string;
  };
  trekName: string;
  backgroundImageUrl: string;
  duration: string;
  location: string;
  distance: string;
  bestTime: string[];
  rating: number;
}

export interface AboutProps {
  heading: string;
  description1: string;
  description2: string;
  aboutImage: string;
  cardHeader1: string;
  cardHeader2: string;
  cardHeader3: string;
  cardHeader4: string;
  cardDesc1: string;
  cardDesc2: string;
  cardDesc3: string;
  cardDesc4: string;
}
<<<<<<< HEAD
interface Slug {
  _type: string;
  current: string;
}

interface Image {
  _type: string;
  asset: {
    _id: string;
    url: string;
  };
}

interface Data {
  productName: string;
  price: number;
  description: string;
  slug: Slug;
  images: Image[];
}

export interface ProductProps {
  data: Data[];
}
export interface ProductIdProps {
  data: {
    productName: string;
    price: number;
    description: string;
    slug: Slug;
    images: Image[];
  };
}

export const quantity = [
  {
    label: 1,
    value: "1",
  },
  {
    label: 2,
    value: "2",
  },
  {
    label: 3,
    value: "3",
  },
  {
    label: 4,
    value: "4",
  },
  {
    label: 5,
    value: "5",
  },
  {
    label: 6,
    value: "6",
  },
  {
    label: 7,
    value: "7",
  },
  {
    label: 8,
    value: "8",
  },
  {
    label: 9,
    value: "9",
  },
  {
    label: 10,
    value: "10",
  },
];
=======
>>>>>>> b797115820d624260aa03a194286938b1aa4b457
