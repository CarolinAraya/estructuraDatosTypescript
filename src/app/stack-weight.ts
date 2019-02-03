export class StackWeigthNode {
  constructor(public content: string, public next: StackWeigthNode) {
  }
  public get weight(): number {
    return this.content ? this.content.length : 0;
  }
}

export class StackWeigth {
  private topNode: StackWeigthNode = null;

  public pop(): string {
    const result = this.top;
    if (this.topNode) {
      this.topNode = this.topNode.next;
    }
    return result;
  }

  public push(content: string) {
    let iter = this.topNode;
    let before: StackWeigthNode = null;

    while (iter) {
      if (content.length <= iter.weight) {
        break;
      }
      before = iter;
      iter = iter.next;
    }
    if (before) {
     /*  const node = new StackWeigthNode(content, before.next);
      before.next = node; */
      before.next = new StackWeigthNode(content, before.next);
    }
    else this.topNode = new StackWeigthNode(content, this.topNode);
  }

  public get top(): string {
    return this.topNode ? this.topNode.content : null;
  }
}




