import { ExtFile } from "@files-ui/react";
import { Data } from "./data";

export interface StateProps {
    isLoading?: true;
    carsData?: Data[];
    errorData?: string;
    files?: ExtFile[];
    productUrl?: string;
    rowsPerPage?: 10;
    page?: 0;
    user?: any;
    userInfo?: string;
    total?: number;
}