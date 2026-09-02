export interface PawaPayDepositRequest { depositId:string; amount:string; currency:string; payer:{type:'MSISDN';accountDetails:{provider:string;phoneNumber:string}}; customerMessage?:string; }
export interface PawaPayDepositResult { depositId:string; status?:string; [key:string]:unknown }
