export interface CTA_Button {
  link?: string;
  internal_link?: PAGE_REFERENCE[];
  text?: string;
}

export interface PAGE_REFERENCE {
  _slug?: string;
}

export interface IMAGE {
  _id?: string;
  url?: string;
}

export interface CATEGORY {
  _id?: string;
  title?: string;
  _slug?: string;
}

export interface CAR {
  _id?: string;
  image?: IMAGE;
  title?: string;
  monthly_price?: string;
  categories?: CATEGORY[];
  _slug?: string;
}

export type Context = {
  kind: "PERSONALIZATION" | "AB_TEST";
  variant_id: string;
  group_id: string;
};
