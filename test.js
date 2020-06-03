const input = [1, 4, 4, 2, 4]

var mergeKLists = function (lists) {
    let res = lists[0]

    function mergeList(l1, l2) {
        let dummy = ListNode()
        let tmp = dummy;
        let node1 = l1;
        let node2 = l2
        while (node1 && node2) {
            if (node1.val >= node2.val) {
                tmp.next = node1
                node1 = node1.next
            } else {
                tmp.next = node2
                node2 = node2.next
            }
            tmp = tmp.next
        }
        tmp.next = node1 ? node1 : node2
        return dummy.next
    }

    for (let i = 1; i < lists.length - 1; i++) {
        res = mergeList(res, lists[i])
    }
    return res
};



var mergeTwoLists = function (l1, l2) {
    const dummy = new ListNode()
    let temp = dummy
    let node1 = l1
    let node2 = l2
    while (node1 && node2) {
        if (node1.val >= node2.val) {
            temp.next = node2
            node2 = node2.next
        } else {
            temp.next = node1
            node1 = node1.next
        }
        temp = temp.next
    }
    node1 ? temp.next = node1 : temp.next = node2;
    return dummy.next
};