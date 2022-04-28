const LinkedNode = require("linked-nodes").default;
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
        do {
            expect(list.value).toBe(startArr[i++]);
        } while (list.moveNext());
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

describe(`${className}.${classInstance.moveNext.name}()`, () => {
    test("it should iterate only once", () => {
        // Arrange
        const list = new LinkedNode("My only val");

        // Act & Assert
        let count = 0;
        do {
            count++;
            expect(list.value).toBe("My only val");
        } while (list.moveNext());

        expect(list.value).not.toBe(null);
        expect(count).toBe(1);
    });
});

describe(`${className}.${classInstance.movePrevious.name}()`, () => {
    test("it should give the values back backwards", () => {
        // Arrange
        const originalArr = [1, 2, 3, 4, 5];
        const reversedArr = [...originalArr].reverse();
        const list = LinkedNode.fromArray(originalArr);

        do {} while (list.moveNext());

        // Act & Assert
        let i = 0;

        do {
            expect(list.value).toBe(reversedArr[i++]);
        } while (list.movePrevious());

        expect(i).toBe(originalArr.length);
    });
});

describe(`${className}.${classInstance.where.name}()`, () => {
    test("it should filter out the correct values", () => {
        // Arrange
        const originalArr = [1, 2, 3, 4, 5];
        const list = LinkedNode.fromArray([...originalArr]);

        // Act
        const expected = originalArr.filter((val) => val > 3);
        const actual = list.where((val) => val > 3);

        // Assert
        expect(actual.toString()).toBe(expected.toString());
    });
});

describe(`${className}.${classInstance.add.name}()`, () => {
    test("it should add value to the end", () => {
        // Arrange
        const list = new LinkedNode("link 1");

        // Act
        list.add("link 2");
        list.add("link 3");

        // Assert
        for (let i = 1; i < 4; i++) {
            expect(list.value).toBe(`link ${i}`);
            list.moveNext();
        }
    });
});

describe(`${className}.${classInstance.forEach.name}()`, () => {
    test("it should iterate with the same values as the array", () => {
        // Arrange
        const originalArr = [1, 2, 3, 4, 5];
        const list = LinkedNode.fromArray([...originalArr]);

        // Act
        const actualArr = [];
        list.forEach((val) => {
            actualArr.push(val);
        });

        // Assert
        expect(originalArr.toString()).toBe(actualArr.toString());
    });
});
