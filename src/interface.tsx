export type BooleanCell = [truthful: string, falsy: string];

export interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
  from?: string;
  boolean?: BooleanCell;
}

export type Order = "asc" | "desc";