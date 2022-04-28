# linked-nodes

## Description

The `linked-nodes` package brings simple linked list/enumerable features to JavaScript.

## Constructing

#### _Description_

There are several ways to create a linked node. Below details a few.

#### _Provide LinkedNode.value and LinkedNode.next via ctor_

```javascript
const LinkedNode = require("linked-nodes");

// Creates a node and gives it a value.
const childNode = new LinkedNode("child node value");

// Creates a node with a value and the next node.
const parentNode = new LinkedNode("parent node value", childNode);
```

#### _Provide LinkedNode.value and assign LinkedNode.next later_

```javascript
const LinkedNode = require("linked-nodes");

// Creates a node and gives it a value.
const parentNode = new LinkedNode("parent node value");
parentNode.next = new LinkedNode("next node value");
```

#### _Provide LinkedNode.value later_

```javascript
const LinkedNode = require("linked-nodes");

// Creates a node
const parentNode = new LinkedNode();
parentNode.value = "some node value";
```

## Properties

`next` - _write only_

#### _Description_

Used to assign the `next` `LinkedNode` in the link.

`size` - _read only_

#### _Description_

Contains the number of nodes in the link.

`value` - _read & write_

#### _Description_

Contains the value of the current node. Also sets the value of the current node.

## Methods

#### **_Static Methods_**

`LinkedNode.fromArray(myArray)`

#### _Description_

Creates a new linked node from the provided array.

#### _Usage_

```javascript
const LinkedNode = require("linked-nodes");

const myArray = [1, 2, 3, 4, 5];
const lNodes = LinkedNode.fromArray(myArray);

console.log(lNodes.value); // Output: 1.

lNodes.moveNext();

console.log(lNodes.valye); // Ouput: 2.
// etc...
```

#### **_Instance Methods_**

`LinkedNode.moveNext()`

#### _Description_

Advances the current LinkedNode.value to the next node, if applicable. Returns `true` if the current node's `next` property is not null, otherwise returns `false`.

#### _Usage_

```javascript
const LinkedNode = require("linked-nodes");

const myArray = [1, 2, 3, 4, 5];
const lNodes = LinkedNode.fromArray(myArray);

do {
    console.log(lNodes.value);
} while (lNodes.moveNext());

/*
Output:
1
2
3
4
5
*/
```

`LinkedNode.movePrevious()`

#### _Description_

Advances the current LinkedNode.value to the previous node, if applicable. Returns `true` if the current node's `next` property is not null, otherwise returns `false`.

#### _Usage_

```javascript
const LinkedNode = require("linked-nodes");

const myArray = [1, 2, 3, 4, 5];
const lNodes = LinkedNode.fromArray(myArray);

// Move to the end of the linkedNodes
do {} while (lNodes.moveNext());

do {
    console.log(lNodes.value);
} while (lNodes.movePrevious());
/*
Output:
5
4
3
2
1
*/
```

`LinkedNode.forEach((nodeValue) => {})`

#### _Description_

Iterates through each of nodes associated with the `LinkedNode` instance being used. This does not affect the current node or value. To change those, use `moveNext()` or `movePrevious()`

#### _Usage_

```javascript
const LinkedNode = require("linked-nodes");

const myArray = [1, 2, 3, 4, 5];
const lNodes = LinkedNode.fromArray(myArray);

const outputArr = [];
lNodes.forEach((val) => {
    ouputArr.push(val);
});

console.log(outputArr);
/*
Output:
[1, 2, 3, 4, 5]
*/
```

`LinkedNode.where((nodeValue) => condition)`

#### _Description_

Returns a linked node with `next` of all nodes meeting the provided condition.

#### _Usage_

```javascript
const LinkedNode = require("linked-nodes");

const myArray = [1, 2, 3, 4, 5];
const lNodes = LinkedNode.fromArray(myArray);
const filteredNodes = lNodes.where((val) => val > 2);

console.log(outputArr.toArray());
/*
Output:
[3, 4, 5]
*/
```

`LinkedNode.toArray()`

#### _Description_

Converts the node to an array.

#### _Usage_

```javascript
const LinkedNode = require("linked-nodes");

const myArray = [1, 2, 3, 4, 5];
const lNodes = LinkedNode.fromArray(myArray);
const nodesToArray = lNodes.toArray();

console.log(nodesToArray);
/*
Output:
[1, 2, 3, 4, 5]
*/
```

`LinkedNode.add(myValue)`

#### _Description_

Creates a new `LinkedNode` and adds it to the end of the link.

#### _Usage_

```javascript
const LinkedNode = require("linked-nodes");

const myArray = [1, 2, 3, 4, 5];
const lNodes = LinkedNode.fromArray(myArray);

// Add a LinkedNode witht the value of 6.
lNodes.add(6);

console.log(lNodes.toArray());
/*
Output:
[1, 2, 3, 4, 5, 6]
*/
```
