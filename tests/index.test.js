const LinkedNode = require("../index").default;
const classInstance = new LinkedNode();
const className = classInstance.constructor.name;

describe(`${className}.${LinkedNode.fromArray.name}()`, () => {
    test("it should match original array", () => {
        // Arrange
        const startArr = [];

        for (let i = 0; i < 5; i++) {
            startArr.push(Math.random());
        }

        const list = LinkedNode.fromArray([...startArr]);

        // Act & Assert
        let i = 0;
        while (list.moveNext()) {
            expect(list.value).toBe(startArr[i++]);
        }
    });
});

describe(`${className}.${classInstance.toArray.name}()`, () => {
    test("it should match original array", () => {
        // Arrange
        const expectedArr = [];

        for (let i = 0; i < 5; i++) {
            expectedArr.push(Math.random());
        }

        const list = LinkedNode.fromArray([...expectedArr]);

        // Act
        const actualArr = list.toArray();

        // Assert
        expect(actualArr.toString()).toBe(expectedArr.toString());
    });
});

describe(`${className}.size`, () => {
    test("it should have the correct number of nodes", () => {
        // Arrange
        const node1 = new LinkedNode("node 1");
        const node2 = new LinkedNode("node 2");
        node1.next = node2;

        // Act
        const node1Size = node1.size;
        const node2Size = node2.size;

        // Assert
        expect(node1Size).toBe(2);
        expect(node2Size).toBe(1);
    });
});

describe(`${className}.${classInstance.movePrevious}()`, () => {
    test("it should give the values back backwards", () => {
        // Arrange
        const originalArr = [1, 2, 3, 4, 5];
        const reversedArr = [...originalArr].reverse();
        const list = LinkedNode.fromArray(originalArr);

        while (list.moveNext()) {}

        // Act & Assert
        let i = 0;
        while (list.movePrevious()) {
            expect(list.value).toBe(reversedArr[i++]);
        }
    });
});
