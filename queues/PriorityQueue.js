'use strict';

let PriorityQueue = (function() {

	class QueueElement {

		constructor(element, priority) {

			this.element = element;
			this.priority = priority;
		}
		
	}

	const items = new WeakMap();

	class PriorityQueue {

		constructor() {

			items.set(this, []);
		}

		enqueue(element, priority) {

			let queueElement = new QueueElement(element, priority);
			let q = items.get(this);
			let added = false;

			let i, qLength;
			for (i = 0, qLength = q.length; i < qLength; i++) {

				if(queueElement.priority < q[i].priority) {

					q.splice(i, 0, queueElement);
					added = true;
					break;
				}
			}

			if(!added) {

				q.push(queueElement)
			}

			items.set(this, q);

		}

				/*dequeue() - Remove o primeiro item da fila ( o q esta na frente). Também devolve o elemento removido */
		dequeue(element) {
			
			let q = items.get(this);
			let r = q.shift();
			return r;
		}


		/*front()- Devolve o primeiro elemento da fila - é o primeiro item adicionado que será removido da fila,
					A fila não é modificada (o elemento não será removido ; ele sera devolvido somente para informação)
		*/
		front() {
			
			let q = items.get(this);
			let r = q[0];
			
			return r;
		}


		/* isEmpty() - Devolve true se a fila não contiver nenhum elemento e false se o tamanho for maior que 0.*/
		isEmpty() {
			
			let q = items.get(this);
			let r = q.length == 0;
			
			return r;
		}

		clear(){

            items.set(this, []);
        }

		size() {
			
			let q = items.get(this);
			let r = q.length;
			
			return r;
		}

		print(){

            let q = items.get(this);
            
            let i, qLength;
            for (i = 0, qLength = q.length ; i < qLength; i++){
            
                console.log(`${q[i].element}  - ${q[i].priority}`);
            }
        }
    }

    return PriorityQueue;

}());

(function(){

	let priorityQueue = new PriorityQueue();

	priorityQueue.enqueue("John", 2);
	priorityQueue.enqueue("Jack", 1);
	priorityQueue.enqueue("Camila", 1);
	priorityQueue.enqueue("Maxwell", 2);
	priorityQueue.enqueue("Ana", 3);

	priorityQueue.print();

}())


