/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './qrscanner.component';
const styles_QrScannerComponent:any[] = ['[_nghost-%COMP%]   video[_ngcontent-%COMP%] {height: auto; width: 100%;}',
    '[_nghost-%COMP%]   .mirrored[_ngcontent-%COMP%] { transform: rotateY(180deg); -webkit-transform:rotateY(180deg); -moz-transform:rotateY(180deg); }'];
export const RenderType_QrScannerComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_QrScannerComponent,data:{}});
function View_QrScannerComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),5,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,[[2,
          0],['qrCanvas',1]],(null as any),0,'canvas',[['hidden','true']],[[8,'width',
          0],[8,'height',0]],(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,[[1,
          0],['videoWrapper',1]],(null as any),0,'div',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n            ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.canvasWidth;
    const currVal_1:any = _co.canvasHeight;
    _ck(_v,2,0,currVal_0,currVal_1);
  });
}
function View_QrScannerComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),10,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n                '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),7,'p',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n                    You are using an '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['outdated'])),(_l()(),i0.ɵted((null as any),[' browser.\n                    Please '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'a',[['href','http://browsehappy.com/']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['upgrade your browser'])),(_l()(),i0.ɵted((null as any),
          [' to improve your experience.\n                '])),(_l()(),i0.ɵted((null as any),
          ['\n            ']))],(null as any),(null as any));
}
export function View_QrScannerComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵqud(671088640,1,{videoWrapper:0}),i0.ɵqud(671088640,2,{qrCanvas:0}),
      (_l()(),i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),8,(null as any),(null as any),(null as any),(null as any),
          (null as any),(null as any),(null as any))),i0.ɵdid(16384,(null as any),
          0,i1.NgSwitch,([] as any[]),{ngSwitch:[0,'ngSwitch']},(null as any)),(_l()(),
          i0.ɵted((null as any),['\n            '])),(_l()(),i0.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_QrScannerComponent_1)),i0.ɵdid(16384,
          (null as any),0,i1.NgSwitchDefault,[i0.ViewContainerRef,i0.TemplateRef,i1.NgSwitch],
          (null as any),(null as any)),(_l()(),i0.ɵted((null as any),['\n            '])),
      (_l()(),i0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_QrScannerComponent_2)),
      i0.ɵdid(278528,(null as any),0,i1.NgSwitchCase,[i0.ViewContainerRef,i0.TemplateRef,
          i1.NgSwitch],{ngSwitchCase:[0,'ngSwitchCase']},(null as any)),(_l()(),i0.ɵted((null as any),
          ['\n        ']))],(_ck,_v) => {
    var _co:i2.QrScannerComponent = _v.component;
    const currVal_0:any = _co.supported;
    _ck(_v,4,0,currVal_0);
    const currVal_1:any = false;
    _ck(_v,10,0,currVal_1);
  },(null as any));
}
export function View_QrScannerComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'qr-scanner',([] as any[]),
      (null as any),(null as any),(null as any),View_QrScannerComponent_0,RenderType_QrScannerComponent)),
      i0.ɵdid(4440064,(null as any),0,i2.QrScannerComponent,[i0.Renderer2,i0.ElementRef],
          (null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const QrScannerComponentNgFactory:i0.ComponentFactory<i2.QrScannerComponent> = i0.ɵccf('qr-scanner',
    i2.QrScannerComponent,View_QrScannerComponent_Host_0,{canvasWidth:'canvasWidth',
        canvasHeight:'canvasHeight',facing:'facing',debug:'debug',mirror:'mirror',
        stopAfterScan:'stopAfterScan',updateTime:'updateTime'},{onRead:'onRead'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2tldmluL0Rlc2t0b3AvYW5ndWxhcjItcXJzY2FubmVyL3NyYy9xcnNjYW5uZXIuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2tldmluL0Rlc2t0b3AvYW5ndWxhcjItcXJzY2FubmVyL3NyYy9xcnNjYW5uZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMva2V2aW4vRGVza3RvcC9hbmd1bGFyMi1xcnNjYW5uZXIvc3JjL3Fyc2Nhbm5lci5jb21wb25lbnQudHMuUXJTY2FubmVyQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9Vc2Vycy9rZXZpbi9EZXNrdG9wL2FuZ3VsYXIyLXFyc2Nhbm5lci9zcmMvcXJzY2FubmVyLmNvbXBvbmVudC50cy5RclNjYW5uZXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwic3VwcG9ydGVkXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgPGNhbnZhcyAjcXJDYW52YXMgW3dpZHRoXT1cImNhbnZhc1dpZHRoXCIgW2hlaWdodF09XCJjYW52YXNIZWlnaHRcIiBoaWRkZW49XCJ0cnVlXCI+PC9jYW52YXM+XG4gICAgICAgICAgICAgICAgPGRpdiAjdmlkZW9XcmFwcGVyPjwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIHVzaW5nIGFuIDxzdHJvbmc+b3V0ZGF0ZWQ8L3N0cm9uZz4gYnJvd3Nlci5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIDxhIGhyZWY9XCJodHRwOi8vYnJvd3NlaGFwcHkuY29tL1wiPnVwZ3JhZGUgeW91ciBicm93c2VyPC9hPiB0byBpbXByb3ZlIHlvdXIgZXhwZXJpZW5jZS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+IiwiPHFyLXNjYW5uZXI+PC9xci1zY2FubmVyPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDRVk7TUFBQTtNQUErQix1REFDM0I7VUFBQTtVQUFBO01BQXVGLHVEQUN2RjtVQUFBO1VBQUEsMERBQXlCO1VBQUE7O0lBRFA7SUFBc0I7SUFBeEMsV0FBa0IsVUFBc0IsU0FBeEM7Ozs7b0JBR0o7TUFBQTtNQUFvQyx1REFDaEM7VUFBQTtVQUFBLDhCQUFHO01BQ2tCO1VBQUEsMERBQVE7VUFBQSxlQUFpQjtNQUNuQztVQUFBO01BQWtDLHlEQUF3QjtVQUFBLHFEQUNqRTtVQUFBOzs7O01BVnBCLCtDQUNRO1VBQUE7VUFBQSxtREFBQTtVQUFBLHFFQUFxQztpQkFBQSxvQ0FDakM7VUFBQSxpRUFBQTtVQUFBO1VBQUEsNkJBR2U7TUFDZjthQUFBO3FCQUFBLG1EQUtlO1VBQUE7O0lBVkw7SUFBZCxXQUFjLFNBQWQ7SUFLa0I7SUFBZCxZQUFjLFNBQWQ7Ozs7b0JDTlo7TUFBQTthQUFBO1VBQUE7SUFBQTs7Ozs7OyJ9
