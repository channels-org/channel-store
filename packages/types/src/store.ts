import JSONPatch from './jsonPatch';

export default interface StoreInterface {
  applyChanges(changes: JSONPatch): object;
  onChanges(cb: (changes: JSONPatch) => void): void;
}
