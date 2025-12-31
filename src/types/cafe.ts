// let data = {
//     name: '디저트 가게',
//     category: ['dessert', 'food'],
//     menu: [
//         {name: 'tiramisu', price: 6500, category: 'CAKE'},
//         {name: 'strawberry', price: 7500, category: 'CAKE'},
//     ]
// }

export type Cafe = {
    name :string;
    category :string[];
    menu: Menu[]
}

export type Menu = {
    name :string;
    price :number;
    category :string;
}

export type CafeWithoutMenu = Omit<Cafe, 'menu'>;


