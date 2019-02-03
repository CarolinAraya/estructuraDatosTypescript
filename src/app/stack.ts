export class StackNode {
  public content: string;
  public next: StackNode;
}

export class Stack {
  private topNode: StackNode = null;

  public pop(): string {
    const result = this.top;
    if (this.topNode) {
      this.topNode = this.topNode.next;
    }
    return result;
  }
  public push(content: string) {
    this.topNode = {
      content: content,
      next: this.topNode
    };
  }
  public get top(): string {
    return this.topNode ? this.topNode.content : null;
  }
}

