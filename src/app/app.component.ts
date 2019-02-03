import { Component } from '@angular/core';
import { findAll, tree } from './Tree';
import { Stack, StackNode } from './stack';
import { Queue, QueueNode } from './queue';
import { StackWeigthNode, StackWeigth } from './stack-weight';
import { QueueWeight } from './queue-weight';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'tree';

  constructor() {
    const stack = new Stack();
    const queue = new Queue();
    const stackweigth = new StackWeigth();
    const queueWeight = new QueueWeight();

     queueWeight.push('cola pesada');

     queueWeight.push('cola más pesada');
     console.log(queueWeight);
     queueWeight.push('cola mucho más pesada');
     console.log(queueWeight);
     queueWeight.push('cola muchísimo más pesada');
     console.log(queueWeight);
     queueWeight.push('tremendísima cola hiper pesada');
     console.log(queueWeight);
     queueWeight.push('cola pesadas');
     console.log(queueWeight);

    // queueWeight.push('cola');
    // console.log(queueWeight);

    queue.push('colita');
    queue.push('colita rica');
    queue.push('colita hedionda');
    queue.pop();
    queue.pop();

    stackweigth.push('carolina');
    console.log(stackweigth);
    stackweigth.push('paralelepipedo');
    console.log(stackweigth);
    stackweigth.push('peores');
    console.log(stackweigth);
    stackweigth.push('gatunos');
    console.log(stackweigth);
    stackweigth.push('paralelepipedo');
    console.log(stackweigth);
    stack.push('holi');
    stack.pop();

    const result = findAll('C', tree); // todos los nombres que empiezan con C
    console.log(result);
  }
}
