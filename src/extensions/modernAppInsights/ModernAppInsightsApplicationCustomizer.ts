import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'ModernAppInsightsApplicationCustomizerStrings';

const LOG_SOURCE: string = 'ModernAppInsightsApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IModernAppInsightsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  key: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class ModernAppInsightsApplicationCustomizer
  extends BaseApplicationCustomizer<IModernAppInsightsApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    
    let key: string = this.properties.key;
    let message: string;

    if (!key) {
      message = '(No instrumentation key was provided.)';
      console.log(`${message}`);
    }else{
      eval(`var appInsights=window.appInsights||function(a){
        function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var c={config:a},d=document,e=window;setTimeout(function(){var b=d.createElement("script");b.src=a.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",d.getElementsByTagName("script")[0].parentNode.appendChild(b)});try{c.cookie=d.cookie}catch(a){}c.queue=[];for(var f=["Event","Exception","Metric","PageView","Trace","Dependency"];f.length;)b("track"+f.pop());if(b("setAuthenticatedUserContext"),b("clearAuthenticatedUserContext"),b("startTrackEvent"),b("stopTrackEvent"),b("startTrackPage"),b("stopTrackPage"),b("flush"),!a.disableExceptionTracking){f="onerror",b("_"+f);var g=e[f];e[f]=function(a,b,d,e,h){var i=g&&g(a,b,d,e,h);return!0!==i&&c["_"+f](a,b,d,e,h),i}}return c
        }({
            instrumentationKey:"${key}"
        });
      
      window.appInsights=appInsights,appInsights.queue&&0===appInsights.queue.length&&appInsights.trackPageView();`);
    }
    return Promise.resolve();
  }
}
