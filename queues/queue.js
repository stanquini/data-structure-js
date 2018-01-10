class Queue {
	
	constructor () {
        this.items = [];
    }

	/*enqueue(element(s)) - Adiciona um novo item (ou vários) no final da fila*/
	enqueue(element) {
		this.items.push(element);
	}


	/*dequeue() - Remove o primeiro item da fila ( o q esta na frente). Também devolve o elemento removido */
	dequeue() {
		return this.items.shift();
	}


	/*front()- Devolve o primeiro elemento da fila - é o primeiro item adicionado que será removido da fila,
				A fila não é modificada (o elemento não será removido ; ele sera devolvido somente para informação)
	*/
	front() {
		return this.items[0];
	}


	/* isEmpty() - Devolve true se a fila não contiver nenhum elemento e false se o tamanho for maior que 0.*/
	isEmpty() {
		return this.items.length == 0;
	}

	size() {
		return this.items.length;
	}

	print() {
		console.log(this.items.toString());
	}

}

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