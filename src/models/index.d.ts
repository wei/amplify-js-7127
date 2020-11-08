import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Board {
  readonly id: string;
  readonly name: string;
  readonly lists?: (List | null)[];
  readonly owner?: string;
  constructor(init: ModelInit<Board>);
  static copyOf(source: Board, mutator: (draft: MutableModel<Board>) => MutableModel<Board> | void): Board;
}

export declare class List {
  readonly id: string;
  readonly title: string;
  readonly boardID: string;
  readonly cards?: (Card | null)[];
  readonly owner?: string;
  constructor(init: ModelInit<List>);
  static copyOf(source: List, mutator: (draft: MutableModel<List>) => MutableModel<List> | void): List;
}

export declare class Card {
  readonly id: string;
  readonly listID: string;
  readonly content: string;
  readonly owner?: string;
  constructor(init: ModelInit<Card>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card>) => MutableModel<Card> | void): Card;
}