import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {enableProdMode} from "@angular/core";

if (!/localhost/.test(document.location.host)) {
    //告诉angular此时是生产环境,加速代码执行
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
