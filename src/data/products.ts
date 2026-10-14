import { Product } from '../types'

export const products: Product[] = [
// ============ PIZZAS (10) ============
{
id: 1,
name: 'Pizza Margherita',
description:
    'A clássica italiana: molho de tomate, mussarela de búfala, manjericão fresco e um toque de azeite. Simples e perfeita.',
price: 59.9,
image:
    'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80',
category: 'pizza',
rating: 4.9,
serves: 'Serve de 2 a 3 pessoas',
},
{
id: 2,
name: 'Pizza Calabresa',
description:
    'Molho de tomate, mussarela, calabresa fatiada, cebola roxa e orégano. Um clássico brasileiro que nunca falha.',
price: 54.9,
image:
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
category: 'pizza',
rating: 4.7,
serves: 'Serve de 2 a 3 pessoas',
},
{
id: 3,
name: 'Pizza Quatro Queijos',
description:
    'Mussarela, provolone, gorgonzola e parmesão sobre molho de tomate. Para os amantes de queijo.',
price: 64.9,
image:
    'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80',
category: 'pizza',
rating: 4.8,
serves: 'Serve de 2 a 3 pessoas',
},
{
id: 4,
name: 'Pizza Pepperoni',
description:
    'Molho de tomate, mussarela e fatias generosas de pepperoni levemente picante. A favorita dos americanos.',
price: 62.9,
image:
    'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80',
category: 'pizza',
rating: 4.9,
serves: 'Serve de 2 a 3 pessoas',
},
{
id: 5,
name: 'Pizza Portuguesa',
description:
    'Mussarela, presunto, ovos, cebola, azeitona e ervilha. A pizza mais completa do cardápio.',
price: 59.9,
image:
    'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&q=80',
category: 'pizza',
rating: 4.6,
serves: 'Serve de 2 a 3 pessoas',
},
{
id: 6,
name: 'Pizza Frango com Catupiry',
description:
    'Frango desfiado temperado, catupiry cremoso e orégano. Combinação que virou tradição no Brasil.',
price: 61.9,
image:
    'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=600&q=80',
category: 'pizza',
rating: 4.8,
serves: 'Serve de 2 a 3 pessoas',
},
{
id: 7,
name: 'Pizza Vegetariana',
description:
    'Abobrinha, berinjela, pimentão, tomate seco, cebola e mussarela. Leve e saborosa.',
price: 57.9,
image:
    'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=600&q=80',
category: 'pizza',
rating: 4.5,
serves: 'Serve de 2 a 3 pessoas',
},
{
id: 8,
name: 'Pizza Bacon Supreme',
description:
    'Mussarela, bacon crocante, cebola caramelizada e um toque de mel. Doce e salgada na medida.',
price: 66.9,
image:
    'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&q=80',
category: 'pizza',
rating: 4.9,
serves: 'Serve de 2 a 3 pessoas',
},
{
id: 9,
name: 'Pizza Napolitana',
description:
    'Molho de tomate, mussarela, rodelas de tomate, parmesão e manjericão. Simples como na Itália.',
price: 55.9,
image:
    'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&q=80',
category: 'pizza',
rating: 4.7,
serves: 'Serve de 2 a 3 pessoas',
},
{
id: 10,
name: 'Pizza Doce de Chocolate',
description:
    'Massa fina com Nutella, morangos frescos e raspas de chocolate branco. A sobremesa perfeita.',
price: 49.9,
image:
    'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=600&q=80',
category: 'pizza',
rating: 4.9,
serves: 'Serve de 2 a 3 pessoas',
},

// ============ HAMBÚRGUERES (5) ============
{
id: 11,
name: 'Cheeseburger Clássico',
description:
    'Pão brioche, hambúrguer 180g, queijo cheddar, alface, tomate e molho especial da casa.',
price: 32.9,
image:
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
category: 'burger',
rating: 4.8,
serves: 'Acompanha batata rústica',
},
{
id: 12,
name: 'Bacon Burger',
description:
    'Hambúrguer 180g, cheddar duplo, bacon crocante, cebola caramelizada e molho barbecue.',
price: 38.9,
image:
    'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=80',
category: 'burger',
rating: 4.9,
serves: 'Acompanha batata rústica',
},
{
id: 13,
name: 'Smash Burger',
description:
    'Dois discos de 90g prensados na chapa, queijo americano, picles e mostarda amarela.',
price: 34.9,
image:
    'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80',
category: 'burger',
rating: 4.7,
serves: 'Acompanha batata rústica',
},
{
id: 14,
name: 'Frango Crispy Burger',
description:
    'Filé de frango empanado crocante, maionese temperada, alface americana e pão brioche.',
price: 33.9,
image:
    'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80',
category: 'burger',
rating: 4.6,
serves: 'Acompanha batata rústica',
},
{
id: 15,
name: 'Veggie Burger',
description:
    'Hambúrguer de grão-de-bico, queijo vegano, rúcula, tomate e maionese de ervas.',
price: 35.9,
image:
    'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80',
category: 'burger',
rating: 4.5,
serves: 'Acompanha batata rústica',
},

// ============ HOT DOGS (5) ============
{
id: 16,
name: 'Hot Dog Clássico',
description:
    'Pão de leite, salsicha, purê de batata, milho, vinagrete e batata palha. Do jeitinho brasileiro.',
price: 22.9,
image:
    'https://images.unsplash.com/photo-1612392062798-23e5f7e6c5b2?w=600&q=80',
category: 'hotdog',
rating: 4.8,
serves: 'Acompanha refrigerante lata',
},
{
id: 17,
name: 'Hot Dog Cheddar',
description:
    'Pão brioche, salsicha, cheddar cremoso, bacon em cubos e cebola crispy.',
price: 27.9,
image:
    'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=600&q=80',
category: 'hotdog',
rating: 4.9,
serves: 'Acompanha refrigerante lata',
},
{
id: 18,
name: 'Hot Dog Frango',
description:
    'Pão de leite, salsicha, frango desfiado temperado, catupiry e orégano.',
price: 26.9,
image:
    'https://images.unsplash.com/photo-1612392062126-5f1c3b03b6e5?w=600&q=80',
category: 'hotdog',
rating: 4.7,
serves: 'Acompanha refrigerante lata',
},
{
id: 19,
name: 'Hot Dog Vegetariano',
description:
    'Pão integral, salsicha vegetal, cenoura ralada, beterraba e maionese vegana.',
price: 24.9,
image:
    'https://images.unsplash.com/photo-1612392061787-2d078b3e5cdc?w=600&q=80',
category: 'hotdog',
rating: 4.5,
serves: 'Acompanha refrigerante lata',
},
{
id: 20,
name: 'Hot Dog Especial laMov',
description:
    'Pão brioche, duas salsichas, cheddar, bacon, ovo de codorna, milho e batata palha.',
price: 32.9,
image:
    'https://images.unsplash.com/photo-1612392062798-23e5f7e6c5b2?w=600&q=80',
category: 'hotdog',
rating: 5.0,
serves: 'Acompanha refrigerante lata',
},
]

export const categories = [
{
id: 'pizza',
title: 'Pizzas',
description: '10 sabores entre clássicos e especiais',
image:
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
},
{
id: 'burger',
title: 'Hambúrgueres',
description: '5 blends artesanais preparados na hora',
image:
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
},
{
id: 'hotdog',
title: 'Hot Dogs',
description: '5 versões do clássico ao especial da casa',
image:
    'https://images.unsplash.com/photo-1612392062798-23e5f7e6c5b2?w=800&q=80',
},
] as const