import { Injectable } from '@nestjs/common';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ServiceLog } from './logs.service'; 

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly serviceNameMapping: Record<string, string> = {
    'clients': 'client',
    'exchange-rate': 'exchange-rate',
    'inflation-rate': 'inflation-rate',
    'logs': 'logs',
    'logs/stats': 'logs-stats',
    'financial-health': 'financial-health', 
    'credit-history': 'credit-history',   
  };

  constructor(private readonly serviceLogService: ServiceLog) {}

  private mapServiceName(route: string): string {
    for (const key in this.serviceNameMapping) {
      if (route.includes(key)) {
        return this.serviceNameMapping[key];
      }
    }
    return 'unknown-service'; 
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { originalUrl, ip } = request;

    const serviceName = this.mapServiceName(originalUrl); 
    const ipAddress = ip;  

    return next.handle().pipe(
      tap(async (response) => {
        await this.serviceLogService.createLog(serviceName, ipAddress);
      }),
    );
  }
}
