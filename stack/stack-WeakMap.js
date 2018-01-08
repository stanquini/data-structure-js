let Stack = (function () {

    const items = new WeakMap();

    class Stack {

        constructor () {
            items.set(this, []);
        }

        /* push(element(s)) - Adiciona um novo item (ou vários itens) ao topo da pilha */
        push(element){
            let s = items.get(this);
            s.push(element);
        }

        /* pop() - Remove o item do topo da pilha. Tbm devolve o elemento removido */
        pop(){
            let s = items.get(this);
            let r = s.pop();
            return r;
        }

        /* peek() - devolve o elemento que está no topo da  pilha. Esta não é modificada.
        (o elemento não é removido; ele é devolvido apenas como informação) */
        peek(){
            let s = items.get(this);
            return s[s.length-1];
        }

        /* isEmpty() - Devolve true se a pilha não contiver nenhum elemento  e false se o 
        tamanho for maior que 0.*/
        isEmpty(){
            return items.get(this).length == 0;
        }

        /* size() - Devolve o numero de elementos contidos na pilha. É semelhante à propriedade
        length de um array.*/
        size(){
            let s = items.get(this);
            return s.length;
        }

        /* clear() - Remove todos os elementos da pilha */
        clear(){
            items.set(this, []);
        }

        
        print(){
            console.log(this.toString());
        }

        
        toString(){
            return items.get(this).toString();
        }
    }

    return Stack;
})();


(function(){

    let stack = new Stack();

    console.log(stack.isEmpty());

    stack.push(5);
    stack.push(8);
    
    stack.print();

    console.log(stack.isEmpty());
    
    console.log(stack.peek());
    
    console.log(stack.size());

}());
