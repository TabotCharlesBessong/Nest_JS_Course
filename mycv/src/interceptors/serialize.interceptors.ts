import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { UserDto } from "src/users/dtos/user-dto";

export class SerializeInterceptor implements NestInterceptor {
  intercept(context:ExecutionContext,handler:CallHandler):Observable<any>{

    return handler.handle().pipe(
      map((data:any) => {
        return plainToClass(UserDto,data,{
          excludeExtraneousValues:true
        })
      })
    )
  }
}