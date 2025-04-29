import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()

        const status = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR

        const message = exception instanceof HttpException
            ? exception.getResponse()
            : exception.message || 'Erro interno do servidor'

        response.status(status).json({
            code: status,
            message:
                typeof message === 'string'
                    ? message
                    : (message as any).message || message,
            path: request.url,
            timestamp: new Date().toISOString()
        })
    }
}