export interface Ingredient {
    id: string
    quantity: string
}

export interface Recipe {
    id: string
    title: string
    description: string
    ingredients: Ingredient[]
    steps: string[]
}