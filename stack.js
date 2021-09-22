class Stack {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    // add node to the tail
    push(item) {
        let node = new Node(item);
        // if first node
        if (!this.head) {
            this.head = node;
        } else {
            // else find the tail
            let tail = this.head;
            while (tail.next !== null) {
                tail = tail.next;
            }
            tail.next = node;
        }
        this.length++;
    }

    pop() {
        if(this.length == 0 ) {
            return null;
        }
        let tail = this.head;
        let _parent = null;
        while (tail.next !== null) {
            _parent = tail;
            tail = tail.next;
        }
        const _item = tail.item;
        this.length--;
        _parent.next = null;
        return tail.item;
    }
    
    size() { 
		return this.length;
  	}
}

class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}
