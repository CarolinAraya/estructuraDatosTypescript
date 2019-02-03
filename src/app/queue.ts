export class QueueNode {
  public after: QueueNode;
  public before: QueueNode;
  public content: string;
}

export class Queue {
  private firstNode: QueueNode = null;
  private lastNode: QueueNode = null;

  public get first(): string {
    return this.firstNode ? this.firstNode.content : null;
  }
  public push(content: string) {
      const node: QueueNode = {
        before: this.lastNode,
        after: null,
        content: content
      };
      if (this.lastNode) {
        this.lastNode.after = node;
      }
      else this.firstNode = node;
      this.lastNode = node;
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




