'use strict';

let Queue = (function(){

	const items = new WeakMap();

	class Queue {
	
		constructor () {
	        items.set(this, []);
	    }

		/*enqueue(element(s)) - Adiciona um novo item (ou vários) no final da fila*/
		enqueue(element) {
			let q = items.get(this);
			q.push(element);
		}


		/*dequeue() - Remove o primeiro item da fila ( o q esta na frente). Também devolve o elemento removido */
		dequeue() {
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

		size() {
			let q = items.get(this);
			let r = q.length;
			return r;
		}

		print() {
			let q = items.get(this);
			console.log(q.toString());
		}
	}
	return Queue;
}());

(function(){
	let queue = new Queue();

	console.log(queue.isEmpty());

	queue.enqueue("John");
	queue.enqueue("Jack");
	queue.enqueue("Camila");


	queue.print();

	console.log(queue.size());
	console.log(queue.isEmpty());


	queue.dequeue();

	queue.dequeue();

	queue.print();


}())