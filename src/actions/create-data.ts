import { Data } from "@/interfaces/data";

export function createData(
    productUrl: string,
    name: string,
    price: number,
    units: number,
    soldunits: number,
    status?: string,
    id?: string
  ): Data {
    const profits = price * soldunits;
    return { productUrl, name, price, units, soldunits, profits, status, id };
  }