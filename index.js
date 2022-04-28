class LinkedNode {
    #current;
    #lastNode;
    _previous;
    _next;
    _value;

    /**
     * Creates a new node for a linked list.
     * @param {any} value
     * @param {LinkedNode} next
     */
    constructor(value, next = null) {
        this.#current = this;
        this.#lastNode = this;
        this._previous = null;
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
        this.#current._next._previous = this.#current;
        this.#setLastNode();
    }
    /**
     * Move to the next node in the linked list
     * @returns {boolean} a bool reflecting if there is a node at this location.
     */
    moveNext() {
        const canMoveNext = this.#current._next ? true : false;

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
        const canMoveLast = this.#current._previous ? true : false;

        if (canMoveLast) {
            this.#current = this.#current._previous;
        }

        return canMoveLast;
    }

    /**
     * Convert linked node to an array.
     * @returns {any[]} Returns all node values as an array.
     */
    toArray() {
        // Move to end of the list
        do {} while (this.movePrevious());

        const arr = [];

        do {
            arr.push(this.#current.value);
        } while (this.moveNext());

        return arr;
    }

    /**
     * Stringifies the LinkedNode
     * @returns {string}
     */
    toString() {
        return this.toArray().toString();
    }

    /**
     * Adds a new {@link LinkedNode} to the last node in the list.
     * @param {any} value The value of the new {@link LinkedNode}
     * @returns {LinkedNode}
     */
    add(value) {
        this.#lastNode.next = new LinkedNode(value);

        return this;
    }

    /**
     * This callback type is called `conditionFunc` and is displayed as a global symbol.
     * @callback conditionFunc
     * @param {any} nodeValue
     * @return {boolean} True if the node should be included, false if not.
     */

    /**
     * Returns a new filtered set of {@link LinkedNode}s,
     * based on the provided condition.
     * @param {conditionFunc} condition A function that determines if the node should be included.
     * @returns
     */
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
     * This callback type is called `conditionFunc` and is displayed as a global symbol.
     * @callback callbackfn
     * @param {any} nodeValue
     */

    /**
     * Iterate through each node within the LinkedNode.
     * DOES NOT advance nodes. Use moveNext for that.
     * @param {callbackfn} callbackfn
     */
    forEach(callbackfn) {
        let node = this;

        while (node) {
            callbackfn(node.value);
            node = node._next;
        }
    }

    /**
     * Creates a LinkedNode from an array.
     * @callback conditioncallFunc
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
