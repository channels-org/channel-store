export default interface JSONPatch {
  [index: number]: JSONPatchOperation;
}

interface JSONPatchOperation {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
  path: string;
  from?: string;
  value?: any;
}
