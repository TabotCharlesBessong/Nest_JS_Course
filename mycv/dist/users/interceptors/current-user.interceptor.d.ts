import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { UsersService } from '../users.service';
export declare class CurrentUserInterceptor implements NestInterceptor {
    private usersService;
    constructor(usersService: UsersService);
    intercept(context: ExecutionContext, handler: CallHandler): Promise<import("rxjs").Observable<any>>;
}
