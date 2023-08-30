import { CallHandler, ExecutionContext, NestInterceptor, Next } from "@nestjs/common";
import { Observable, map } from "rxjs";

export class SerializeInterceptor implements NestInterceptor {
  intercept(context:ExecutionContext,handler:CallHandler):Observable<any>{
    // run something before a request is followed bya request handler
    console.log('running before request handler')

    return handler.handle().pipe(
      map((data:any) => {
        // run something before the response is sent out
        console.log('am running before the response is sent',data)
      })
    )
  }
}