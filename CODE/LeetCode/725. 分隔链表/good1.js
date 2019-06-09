let res = [];

if (!root) {
    res.length = k;
    res.fill(null);
    return res;
}

let len = 0;
let cur = root;
while (cur) {
    len++;
    cur = cur.next;
}

cur = root;
if (k >= len) {
    while (k--) {
        let node = cur;
        res.push(node);
        cur && (cur = cur.next);
        node && (node.next = null);
    }
    return res;
}

let quotient = Math.floor(len / k);
let remainder = len % k;

while (cur) {
    res.push(cur);
    let i = quotient;
    while (--i) {
        cur = cur.next;
    }
    if (remainder) {
        cur = cur.next;
        remainder--;
    }
    
    let node = cur.next;
    cur.next = null;
    cur = node;
}

return res;
