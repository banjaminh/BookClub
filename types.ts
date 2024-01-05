export interface Book {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image: string;
  book_image_width: number;
  book_image_height: number;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  isbns: {
    isbn10: string;
    isbn13: string;
  }[];
  buy_links: {
    name: string;
    url: string;
  }[];
  book_uri: string;
}

export interface CurrentItem {
  notes_title: string;
  user_notes: {
    date: string;
    comment: string;
  }[];
}

export interface Meeting {
  date: string;
  chapters: string;
}

export interface CurrentBook {
  ISBN: string;
  startDate: string;
  meetings: Record<number, Meeting>;
}

export interface PastBook {
  ISBN: string;
  startDate: string;
  meetings: Record<number, Meeting>;
}

export interface BookClubInfo {
  id: string;
  bookClubName: string;
  members: number[];
  groupProfilePicture: string;
  currentBook: CurrentBook;
  pastBooks: PastBook[];
  nextInLine: string[];
}