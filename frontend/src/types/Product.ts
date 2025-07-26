export interface Product {
    id?: number
    name: string,
    brand: string,
    price: number,
    stockQuantity?: number
    category?: string
    description?: string
    releaseDate?: Date
    image?: Blob
    imageName?: string
}