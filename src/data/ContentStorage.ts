export default class ContentStorage<T> {
  content: T[];

  constructor() {
    this.content = [];
  }

  receive(content: T[]): void {
    this.content = content;
  }
}