// src/@types/express/index.d.ts
declare namespace Express {
    export interface Request {
        user: {
            userId: number;
        };
    }
}