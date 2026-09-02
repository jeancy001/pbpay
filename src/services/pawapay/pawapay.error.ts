export class PawaPayError extends Error { constructor(public readonly statusCode:number,public readonly details:unknown){super('pawaPay request failed');} }
