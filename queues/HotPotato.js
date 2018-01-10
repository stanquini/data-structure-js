'use strict';

let Queue = (function(){

	const items = new WeakMap();

	class Queue {
	
		constructor () {

	        items.set(this, []);
	    }

		enqueue(element) {

			let q = items.get(this);
			q.push(element);
		}

		dequeue() {

			let q = items.get(this);
			let r = q.shift();
			return r;
		}

		front() {

			let q = items.get(this);
			let r = q[0];
			return r;
		}

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

	let hotPotato = (nameList, num) => {

		let queue = new Queue();

		let i, nameListLength;
		for(i = 0 , nameListLength = nameList.length; i  < nameListLength; i++) {
			
			queue.enqueue(nameList[i]);
		}
		
		let eliminated;

		while(queue.size() > 1) {
			
			let i;
			for(i = 0; i < num; i++) {

				queue.enqueue(queue.dequeue());
			}

			eliminated = queue.dequeue();
			console.log(eliminated + ' was eliminated from the Hot Potato game.')
		}

		return queue.dequeue();

	}

	let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];

	let winner = hotPotato(names, 7);
	
	console.log('The winner is: ' + winner);

}());