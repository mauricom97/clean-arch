import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvConfig } from './env-config.interface';

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private readonly configService: ConfigService) { }

  getAppPort(): number {
    return Number(this.configService.get<number>('PORT'))
  }
  getNodeEnv(): string {
    const nodeEnv = this.configService.get<string>('NODE_ENV');
    if (!nodeEnv) {
      throw new Error('NODE_ENV is not set');
    }
    return nodeEnv;
  }
}
