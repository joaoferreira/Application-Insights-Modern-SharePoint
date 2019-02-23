var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
var LOG_SOURCE = 'ModernAppInsightsApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var ModernAppInsightsApplicationCustomizer = (function (_super) {
    __extends(ModernAppInsightsApplicationCustomizer, _super);
    function ModernAppInsightsApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModernAppInsightsApplicationCustomizer.prototype.onInit = function () {
        var key = this.properties.key;
        var message;
        if (!key) {
            message = '(No instrumentation key was provided.)';
            console.log("" + message);
        }
        else {
            eval("var appInsights=window.appInsights||function(a){\n        function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var c={config:a},d=document,e=window;setTimeout(function(){var b=d.createElement(\"script\");b.src=a.url||\"https://az416426.vo.msecnd.net/scripts/a/ai.0.js\",d.getElementsByTagName(\"script\")[0].parentNode.appendChild(b)});try{c.cookie=d.cookie}catch(a){}c.queue=[];for(var f=[\"Event\",\"Exception\",\"Metric\",\"PageView\",\"Trace\",\"Dependency\"];f.length;)b(\"track\"+f.pop());if(b(\"setAuthenticatedUserContext\"),b(\"clearAuthenticatedUserContext\"),b(\"startTrackEvent\"),b(\"stopTrackEvent\"),b(\"startTrackPage\"),b(\"stopTrackPage\"),b(\"flush\"),!a.disableExceptionTracking){f=\"onerror\",b(\"_\"+f);var g=e[f];e[f]=function(a,b,d,e,h){var i=g&&g(a,b,d,e,h);return!0!==i&&c[\"_\"+f](a,b,d,e,h),i}}return c\n        }({\n            instrumentationKey:\"" + key + "\"\n        });\n      \n      window.appInsights=appInsights,appInsights.queue&&0===appInsights.queue.length&&appInsights.trackPageView();");
        }
        return Promise.resolve();
    };
    __decorate([
        override
    ], ModernAppInsightsApplicationCustomizer.prototype, "onInit", null);
    return ModernAppInsightsApplicationCustomizer;
}(BaseApplicationCustomizer));
export default ModernAppInsightsApplicationCustomizer;
//# sourceMappingURL=ModernAppInsightsApplicationCustomizer.js.map