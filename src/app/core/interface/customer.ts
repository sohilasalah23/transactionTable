export interface user {
    customers: customers,
    transactions:transactions
}



export interface customers {
    id: number,
    name: string
}




 export interface transactions {
    id: number,
    customer_id: number,
    date: string,
    amount: number
}
