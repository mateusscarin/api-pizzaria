export interface ItemRequest {
    quantidade: number;
    id_produto: string;
    id_pedido: string;
}

export interface ItemDeleteRequest {
    id_item: string;
}