export interface Column {
    id:
      | "productUrl"
      | "name"
      | "price"
      | "units"
      | "soldunits"
      | "profits"
      | "actions";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
  }
  