export type CardData = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

export const cards: CardData[] = [
  {
    id: 0,
    title: "Flash Card App",
    description: "Simple personal flash card for collecting data and testing repetition algorithms",
  },
  {
    id: 1,
    title: "Eshop",
    description: "Description for another project",
  }
];
