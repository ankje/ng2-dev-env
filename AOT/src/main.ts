//jit动态编译
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//aot预编译
import { platformBrowser } from '@angular/platform-browser';

//aot里的工厂代码都是由 "node_modules/.bin/ngc" -p tsconfig-aot.json 预编译出来的
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

import { AppModule } from './app/app.module';
import {enableProdMode} from "@angular/core";

if (!/localhost/.test(document.location.host)) {
    //告诉angular此时是生产环境,加速代码执行
    enableProdMode();
}

//jit动态编译
// platformBrowserDynamic().bootstrapModule(AppModule);
//aot预编译
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
