"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var data_service_1 = require("./shared/data.service");
var app_component_1 = require("./app.component");
var todos_component_1 = require("./todos/todos.component");
var authentication_component_1 = require("./authentication/authentication.component");
var todo_form_component_1 = require("./todos/todo-form/todo-form.component");
var todo_list_component_1 = require("./todos/todo-list/todo-list.component");
var todo_item_component_1 = require("./todos/todo-item/todo-item.component");
var todo_service_1 = require("./shared/todo.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(data_service_1.InMemoryDataService)
        ],
        declarations: [
            app_component_1.AppComponent,
            todos_component_1.TodosComponent,
            authentication_component_1.AuthenticationAppComponent,
            todo_form_component_1.TodoFormComponent,
            todo_list_component_1.TodoListComponent,
            todo_item_component_1.TodoItemComponent
        ],
        providers: [
            todo_service_1.TodoService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map