export type IPayPalOrderItem = {
    name?: string;
    description?: string;
    quantity?: string;
    unit_amount?: {
        currency_code?: string;
        value?: string;
    };
}

export type IPayPalOrder = {
    intent?: string;
    purchase_units?: {
        items?: IPayPalOrderItem[];
        amount?: {
            currency_code?: string;
            value?: string;
            breakdown?: {
                item_total: {
                    currency_code?: string;
                    value?: string;
                };
            };
        };
    }[];
    application_context?: {
        return_url?: string;
        cancel_url?: string;
    };
}