export type Category = 'pizza' | 'burger' | 'hotdog'

export interface Product {
id: number
name: string
description: string
price: number
image: string
category: Category
rating: number
serves?: string
}

export interface CartItem extends Product {
quantity: number
}

export interface DeliveryInfo {
name: string
address: string
city: string
cep: string
number: string
complement?: string
}

export interface PaymentInfo {
cardName: string
cardNumber: string
cvv: string
expiryMonth: string
expiryYear: string
}