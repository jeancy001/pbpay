import { Decimal } from 'decimal.js';
Decimal.set({precision:40,rounding:Decimal.ROUND_HALF_UP});
export function parseAmount(value:string){const d=new Decimal(value); if(!d.isFinite()||d.lte(0)||d.decimalPlaces()>2) throw new Error('Amount must be a positive value with at most two decimal places'); return d.mul(100).toFixed(0);}
export const add=(a:string,b:string)=>new Decimal(a).add(b).toFixed(0); export const subtract=(a:string,b:string)=>new Decimal(a).sub(b).toFixed(0);
export const fee=(amount:string,percent:number)=>new Decimal(amount).mul(percent).div(100).toDecimalPlaces(0).toFixed(0);
export const displayMoney=(minor:string)=>new Decimal(minor).div(100).toFixed(2);
