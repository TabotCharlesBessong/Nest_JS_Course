import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface ClassContructor {
  new (...args:any[]): {}
}

export const Serialize = (dto:any) => {
  return UseInterceptors(new SerializeInterceptor(dto))
}
export class SerializeInterceptor implements NestInterceptor {

  constructor(private dto:any){}
  intercept(context:ExecutionContext,handler:CallHandler):Observable<any>{

    return handler.handle().pipe(
      map((data:any) => {
        return plainToClass(this.dto,data,{
          excludeExtraneousValues:true
        })
      })
    )
  }
}