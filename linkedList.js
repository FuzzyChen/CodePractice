var partition = function (head, x) {
    const dummyLess = new ListNode();
    const dummyMore = new ListNode();
    let node = head;
    let less = dummyLess;
    let more = dummyMore;
    while (node) {
        if (node.val < x) {
            less = less.next = node;
        } else {
            more = more.next = node;
        }
        node = node.next;
    }
    less.next = dummyMore.next;
    more.next = null;
    return dummyLess.next;
};

var hasCycle = function (head) {
    const dummy = ListNode()
    let arr = []
    let node = head
    while (node) {
        if (!arr.includes(node)) {
            arr.push(node)
            node = node.next
        } else {
            return true
        }
    }
    return false
};



var removeNthFromEnd = function (head, n) {
    let tmp1 = head, tmp2 = head;
    while (n--) {
        tmp1 = tmp1.next;
    }
    while (tmp1 && tmp1.next) {
        tmp2 = tmp2.next;
        tmp1 = tmp1.next;
    }
    if (!tmp1) {
        head = head.next;
    } else {
        tmp2.next = tmp2.next ? tmp2.next.next : null;
    }
    return head;
};

var reverseList = function (head) {
    let dummy = new ListNode()
    let tmp = dummy
    console.log(dummy)
    let arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    for (i = arr.length - 1; i >= 0; i--) {
        tmp.next = arr[i]
        tmp = tmp.next
    }
    tmp.next = null
    return dummy.next

};


var reverseBetween = function (head, m, n) {
    let dummy = new ListNode()
    let tmp = dummy
    console.log(tmp)
    let arr1 = []
    let arr2 = []
    let arr3 = []
    for (let i = 0; i < m - 1; i++) {
        arr1.push(head)
        head = head.next
    }
    for (let i = 0; i < n + 1 - m; i++) {
        arr2.push(head)
        head = head.next
    }
    while (head) {
        arr3.push(head)
        head = head.next
    }

    let arr = arr1.concat(arr2.reverse())
    arr = arr.concat(arr3)
    for (i = 0; i < arr.length; i++) {
        tmp.next = arr[i]
        tmp = tmp.next
    }
    tmp.next = null
    return dummy.next
};