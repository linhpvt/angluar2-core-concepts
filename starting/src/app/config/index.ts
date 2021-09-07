import { InjectionToken } from '@angular/core';
import { DEV_APP_CONFIG } from './dev.config';
import { PROD_APP_CONFIG } from './prod.config';
import { DEFAULT_APP_CONFIG } from './default.config';

// Define an inteface
export interface AppConfig {
  apiUrl?: string;
  cacheSize?: number;
  environment?: string;
}
let env = 'production';

// Define a token to be reference somewhere
export const APP_TOKEN = new InjectionToken('APP_TOKEN', {
  // Available at the root level
  providedIn: 'root',
  // Function instantiates object
  factory: () => {
    let confg: AppConfig;
    switch (env) {
      case 'production':
        confg = { ...DEFAULT_APP_CONFIG, ...PROD_APP_CONFIG };
        break;
      case 'development':
        confg = { ...DEFAULT_APP_CONFIG, ...DEV_APP_CONFIG };
        break;
      default:
        confg = DEFAULT_APP_CONFIG;
    }
    return confg;
  },
});
