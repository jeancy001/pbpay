import { pawaPayRequest } from './pawapay.client.js'; import type { PawaPayDepositRequest,PawaPayDepositResult } from './pawapay.types.js';
/** pawaPay initiation acceptance is NOT settlement confirmation. */
export const initiatePawaPayDeposit=(request:PawaPayDepositRequest)=>pawaPayRequest<PawaPayDepositResult>('/deposits',{method:'POST',body:JSON.stringify(request)});
export const getPawaPayDeposit=(depositId:string)=>pawaPayRequest<PawaPayDepositResult>(`/deposits/${encodeURIComponent(depositId)}`,{method:'GET'});
