function Stack() {

    let items = [];
    /* push(element(s)) - Adiciona um novo item (ou vários itens) ao topo da pilha */
    this.push = function(element){
        items.push(element);
    };

    /* pop() - Remove o item do topo da pilha. Tbm devolve o elemento removido */
    this.pop = function(){
        return items.pop();
    };

    /* peek() - devolve o elemento que está no topo da  pilha. Esta não é modificada.
        (o elemento não é removido; ele é devolvido apenas como informação) */
    this.peek = function(){
        return items[items.length-1];
    };

    /* isEmpty() - Devolve true se a pilha não contiver nenhum elemento  e false se o 
        tamanho for maior que 0.*/
    this.isEmpty = function(){
        return items.length == 0;
    };

    /* size() - Devolve o numero de elementos contidos na pilha. É semelhante à propriedade
        length de um array.*/
    this.size = function(){
        return items.length;
    };

    /* clear() - Remove todos os elementos da pilha */
    this.clear = function(){
        items = [];
    };

    this.print = function(){
        console.log(items.toString());
    };

    this.toString = function(){
        return items.toString();
    };
}

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