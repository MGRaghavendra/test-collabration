class Listnode {
  val: number;
  next: Listnode | null;
  constructor(val?: number, next?: Listnode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function RemoveElements(head: Listnode | null, val: number): Listnode | null {
  let prev: Listnode | null = null,
    current: Listnode = head;
  while (current) {
    if (head.val === val) {
      head = head.next;
      prev = head;
      current = current.next;
    } else if (current.val === val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return head;
}
