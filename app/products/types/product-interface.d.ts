
export type  Size = "Large" | "Medium" | "Small";

export type IProduct = {
    id: number;
    createdAt: date;
    updatedAt: date;
    name: string;
    quantity: number;
    size: Size;
};
