let _items = Symbol();

class Stack {

    constructor () {
        this[_items] = [];
    }

    /* push(element(s)) - Adiciona um novo item (ou vários itens) ao topo da pilha */
    push(element){
        this[_items].push(element);
    }

    /* pop() - Remove o item do topo da pilha. Tbm devolve o elemento removido */
    pop(){
        return this[_items].pop();
    }

    /* peek() - devolve o elemento que está no topo da  pilha. Esta não é modificada.
        (o elemento não é removido; ele é devolvido apenas como informação) */
    peek(){
        return this[_items][this[_items].length-1];
    }

    /* isEmpty() - Devolve true se a pilha não contiver nenhum elemento  e false se o 
        tamanho for maior que 0.*/
    isEmpty(){
        return this[_items].length == 0;
    }

    /* size() - Devolve o numero de elementos contidos na pilha. É semelhante à propriedade
        length de um array.*/
    size(){
        return this[_items].length;
    }
    
    /* clear() - Remove todos os elementos da pilha */
    clear(){
        this[_items] = [];
    }

    print(){
        console.log(this.toString());
    }

    toString(){
        return this[_items].toString();
    }
}

(function(){

    let stack = new Stack();

    stack.push(5);
    stack.push(8);

    let objectSymbols = Object.getOwnPropertySymbols(stack);

    console.log(objectSymbols.length);

    console.log(objectSymbols);

    console.log(objectSymbols[0]);

    stack[objectSymbols[0]].push(1);

    stack.print();

}())

