// 1, 2, 9, 21, 26, 28, 29, 45, 16, 27, 34, 49, 40, 43, 46, 49

// 2.
// The pivot could have been either 14 or 17


// 9, 3, 13, 15, 19, 10, 17, 16, 14, 12

// 12, 9, 13, 3, 19, 10, 15, 16, 17, 14


function qSort(array, start = 0, end = array.length) {
    function partition(array, start, end) {
        const pivot = array[end - 1];
        let j = start;
        for (let i = start; i < end - 1; i++) {
            if (array[i] <= pivot) {
                swap(array, i, j);
                j++;
            }
        }
        swap(array, end-1, j);
        return j;
    };
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
};

console.log(qSort([ 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]));

function mSort(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

console.log(mSort( [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5 ]))

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) { 
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }
    insertBefore(newNode, beforeNode) {
        if(!this.head) {
            return null;
        }
        let currNode = this.head;
        while((currNode !==null) && (currNode.next.value !== beforeNode)) {
            currNode = currNode.next;
        }
        if(currNode.next.value == beforeNode) {
           currNode = new _Node(newNode, beforeNode)
        }
    }
    insertAfter(newNode, afterNode) {
        if(!this.head) {
            return null;
        }
        let currNode = this.head;
        while((currNode !==null) && (currNode.value !== afterNode)) {
            currNode = currNode.next;
        }
        if(currNode.value == afterNode) {
           currNode = new _Node(newNode, currNode.next.value)
        }
    }
    insertAt(newNode, position) {
        if(!this.head) {
            return null;
        }
        let currNode = this.head;
        let currPos = 0
        while ((currNode.next !== null) && (currPos !== position-1)) {
            currNode = currNode.next
            currPos++
        }
        if(currPos === position-1) {
            new _Node(newNode, currNode)
        }
    }
}

let LL = new LinkedList;

function llSort(LL) {
    LL.insertFirst("1");
    LL.insertAfter("1", "2");
    LL.insertAfter("2", "3");
    LL.insertAfter("3", "4");

    mSort(LL)
}
