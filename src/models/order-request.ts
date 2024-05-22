export interface OrderRequest {
    mesa: number;
    nome: string;
}

export interface OrderDeleteRequest {
    id_pedido: string;
}

export interface SendOrderRequest {
    order_id: string;
}

export interface OpenOrdersRequest {
    date_request: Date;
}