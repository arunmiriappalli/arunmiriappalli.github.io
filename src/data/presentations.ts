export type Presentation = {
  title: string;
  url: string;
  description: string;
  date?: string;
};

// The one talk listed on the old site linked to a page that was never actually
// published, so it isn't carried over. Add real talks/slide decks here as they exist.
export const presentations: Presentation[] = [];
