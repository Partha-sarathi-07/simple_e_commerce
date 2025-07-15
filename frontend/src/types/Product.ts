export interface Product {
    name: string,
    brand: string,
    price: number,
    stock?: number
    category?: string
    description?: string
    releaseDate?: Date
    image: File
}