class LinkedNode {
    #current;
    #isRead;
    #lastNode;
    _last;
    _next;
    _value;

    /**
     * Creates a new node for a linked list.
     * @param {any} value
     * @param {LinkedNode} next
     */
    constructor(value, next = null) {
        this.#current = this;
        this.#isRead = false;
        this.#lastNode = this;
        this._last = null;
        this._value = value;
        if (next) {
            this.next = next;
        }
    }

    /**
     * Gets the size of the linked list.
     */
    get size() {
        let node = this;
        let count = 0;
        while (node) {
            count++;
            node = node._next;
        }
        return count;
    }
    /**
     * Get the node's value
     */
    get value() {
        return this.#current._value;
    }
    /**
     * Set the node's value
     */
    set value(value) {
        this.#current._value = value;
    }
    /**
     * @param {LinkedNode} node
     */
    set next(node) {
        this.#current._next = node;
        this.#current._next._last = this.#current;
        this.#setLastNode();
    }
    /**
     * Move to the next node in the linked list
     * @returns {boolean} a bool reflecting if there is a node at this location.
     */
    moveNext() {
        const canMoveNext = this.#current._next ? true : false;

        if (this.#current === this) {
            if (!this.#isRead) {
                this.#isRead = true;
                return canMoveNext;
            } else {
                this.#isRead = false;
            }
        }

        if (canMoveNext) {
            this.#current = this.#current._next;
        }

        return canMoveNext;
    }

    /**
     * Move to the previous node in the linked list
     * @returns {boolean} a bool reflecting if there is a node at this location.
     */
    movePrevious() {
        const canMoveLast = this.#current._last ? true : false;

        if (this.#current === this.#lastNode) {
            if (!this.#isRead) {
                this.#isRead = true;
                return canMoveLast;
            } else {
                this.#isRead = false;
            }
        }

        if (canMoveLast) {
            this.#current = this.#current._last;
        }
        return canMoveLast;
    }

    /**
     * Convert linked node to an array.
     * @returns {any[]} Returns all node values as an array.
     */
    toArray() {
        // Move to end of the list
        while (this.movePrevious()) {}

        const arr = [];

        while (this.moveNext()) {
            arr.push(this.#current.value);
        }

        return arr;
    }

    where(condition) {
        let node = this;
        const nodeArr = [];

        while (node) {
            if (condition(node.value)) {
                nodeArr.push(node.value);
            }

            node = node._next;
        }

        return LinkedNode.fromArray(nodeArr);
    }

    /**
     * Creates a LinkedNode from an array.
     * @param {any[]} array
     * @returns {LinkedNode}
     */
    static fromArray(array) {
        let isFirst = true;
        return array.reverse().reduce((result, entry) => {
            if (isFirst) {
                result.value = entry;
                isFirst = false;
            } else {
                result = new LinkedNode(entry, result);
            }

            return result;
        }, new LinkedNode());
    }

    #setLastNode() {
        let node = this;
        while (node._next) {
            node = node._next;
        }
        this.#lastNode = node;
    }
}

module.exports = { default: LinkedNode };
