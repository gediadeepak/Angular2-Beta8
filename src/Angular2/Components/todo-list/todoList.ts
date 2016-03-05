import {Component, View} from 'angular2/core';
import {ToDo} from './todo';
import {Tabs} from '../tabs/tabs';
import {Tab} from '../tabs/tab';
@Component({
    selector: 'contact-list',
    
})

@View({
    templateUrl: './components/todo-list/todo.html',
    directives: [Tabs, Tab]
})

export class ToDoList {
    toDoList: Array<ToDo> = [];
    completed: Array<ToDo> = [];
    taskComplete: string = '';
    
    addContact(name: string) {
        const contact = new ToDo(name);
        this.toDoList.push(contact);
    }

    removeContact(contact) {
        const index = this.toDoList.indexOf(contact);
        this.toDoList.splice(index, 1);
        for (var n = 0; n <= this.completed.length - 1; n++) {
            if (this.completed[n].name == contact.name) {
                this.completed.splice(n, 1);
            }
        }
    }

    completedList(contact, add: boolean, index: string) {
    
        if (add) {
            this.completed.push(contact);
        } else {
            for (var n = 0; n <= this.completed.length - 1; n++) {
                if (this.completed[n].name == contact.name)
                {
                    this.completed.splice(n, 1);
                }
            }
        }
        for (var n = 0; n <= this.completed.length - 1; n++) {
            this.taskComplete += this.completed[n].name;
        }
    }
}
