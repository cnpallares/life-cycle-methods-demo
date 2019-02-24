// Angular
import { NgModule } from "@angular/core";

// Our stuff
import { MyChildComponent } from "./my-child/my-child.component";
import { SpyDirective } from "./spy.directive";

@NgModule({
  declarations: [MyChildComponent, SpyDirective],
  exports: [MyChildComponent, SpyDirective]
})
export class CarlesModule {}
