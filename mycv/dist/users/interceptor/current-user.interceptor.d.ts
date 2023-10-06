import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { UsersService } from "../users.service";
export declare class CurrentUserInterceptor implements NestInterceptor {
    private userService;
    constructor(userService: UsersService);
    intercept(context: ExecutionContext, handler: CallHandler): Promise<import("rxjs").Observable<any>>;
}
