export interface IExample {
    greet(word: string): string
}

export default class Example implements IExample {
  public greet(word: string): string {
    return `Hello there ${word}!`
  }
}