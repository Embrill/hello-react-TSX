// interface - это описывание типов данных
// Мы сами описываем всем разделам их типы, как в примере
export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}