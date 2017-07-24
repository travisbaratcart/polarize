/** TodoMVC model definitions **/

declare interface TodoItemData {
  id?: TodoItemId;
  text?: string;
  completed?: boolean;
}

declare interface CardData {
  id?: CardId;
  question?: string;
  optionType?: optionType; //radio, checkbox
  options?: string[];
}

declare interface optionData {
  name: string,
  value: string,
}

declare type optionType = 'radio' | 'checkbox';

declare type CardId = number;

declare type TodoItemId = number;

declare type TodoFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

declare type TodoStoreState = TodoItemData[];
