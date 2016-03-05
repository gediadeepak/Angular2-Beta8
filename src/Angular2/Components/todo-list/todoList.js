var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var todo_1 = require('./todo');
var tabs_1 = require('../tabs/tabs');
var tab_1 = require('../tabs/tab');
var ToDoList = (function () {
    function ToDoList() {
        this.toDoList = [];
        this.completed = [];
        this.taskComplete = '';
    }
    ToDoList.prototype.addContact = function (name) {
        var contact = new todo_1.ToDo(name);
        this.toDoList.push(contact);
    };
    ToDoList.prototype.removeContact = function (contact) {
        var index = this.toDoList.indexOf(contact);
        this.toDoList.splice(index, 1);
        for (var n = 0; n <= this.completed.length - 1; n++) {
            if (this.completed[n].name == contact.name) {
                this.completed.splice(n, 1);
            }
        }
    };
    ToDoList.prototype.completedList = function (contact, add, index) {
        if (add) {
            this.completed.push(contact);
        }
        else {
            for (var n = 0; n <= this.completed.length - 1; n++) {
                if (this.completed[n].name == contact.name) {
                    this.completed.splice(n, 1);
                }
            }
        }
        for (var n = 0; n <= this.completed.length - 1; n++) {
            this.taskComplete += this.completed[n].name;
        }
    };
    ToDoList = __decorate([
        core_1.Component({
            selector: 'contact-list',
        }),
        core_1.View({
            templateUrl: './components/todo-list/todo.html',
            directives: [tabs_1.Tabs, tab_1.Tab]
        })
    ], ToDoList);
    return ToDoList;
})();
exports.ToDoList = ToDoList;
//# sourceMappingURL=todoList.js.map