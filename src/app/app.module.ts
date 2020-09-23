import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

export function ValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.templateOptions.label}" es un campo requerido`;
}

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule,
    FormsModule,
    NgxDyncmpModule,
     FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: ValidatorMessage  },
      ],
    }),
    FormlyBootstrapModule,
    NgbModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
