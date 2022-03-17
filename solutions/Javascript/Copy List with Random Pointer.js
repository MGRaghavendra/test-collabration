function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

var copyRandomList = function (head) {
  let hash_map = new Map();
  let curr = head;
  while (curr) {
    let copy_node = new Node(curr.val);
    hash_map.set(curr, copy_node);
    curr = curr.next;
  }
  hash_map.set(null, null);
  curr = head;
  while (curr) {
    hash_map.get(curr).next = hash_map.get(curr.next);
    hash_map.get(curr).random = hash_map.get(curr.random);
    curr = curr.next;
  }
  return hash_map.get(head);
};
