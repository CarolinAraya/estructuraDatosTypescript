export class QueueWeightNode {
  constructor(public content: string, public before: QueueWeightNode, public after: QueueWeightNode) {
  }
  public get weight(): number {
    return this.content ? this.content.length : 0;
  }
}

export class QueueWeight {
  private firstNode: QueueWeightNode = null;
  private lastNode: QueueWeightNode = null;

  public get first(): string {
    return this.firstNode ? this.firstNode.content : null;
  }
  public push(content: string) {
    const node = new QueueWeightNode(content, this.lastNode, null);
    let iter = this.lastNode;
    let afterNode: QueueWeightNode = null;
    //let before: QueueWeightNode = null;


    while (iter) {
      if (content.length >= iter.weight) {
        break;
      }
      afterNode = iter;
      iter = iter.before;
      //before = iter;
    }
    if (afterNode) {
     afterNode.before = new QueueWeightNode( node.after.content, afterNode.before, afterNode.after);
    }

    //after.after = new QueueWeightNode( node.content, iter.before, node);
    //node.after = iter.after;
  }

  public pop(): string {
    const result = this.first;
    if (this.firstNode) {
      this.firstNode = this.firstNode.after;
      this.firstNode.before = null;
    }
    return result;
  }
  public get last(): string {
    return this.lastNode ? this.lastNode.content : null;
  }
}




