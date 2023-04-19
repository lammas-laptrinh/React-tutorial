export interface email {
    email: string ;
}

export interface numbers {
    number: number ;
}
export interface cvv {
    cvv: number ;
}
export interface date {
    date: number ;
}

export interface NewBooking {
    Avatar? : string,
    Checkin?:string,
    Checkout?:string,
    LoaiPhong?:string,
    Ten?:string,
    TrangThai?:boolean,
    sdt?:number,
    id?:string
}