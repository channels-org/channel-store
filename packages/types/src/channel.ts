import JSONPatch from './jsonPatch';

export interface Item {
  id: BigInt;
  prev?: BigInt;
  next?: BigInt;
  type: string;
  created: Date;
  updated?: Date;
  data: object;
}

export interface Change {
  id: BigInt;
  ts: Date;
  patch: JSONPatch;
}

export interface Channel {
  spec: 'channels';
  doc: 'state';
  version: string;
  uri?: string;
  stylesheet?: string | boolean;
  title?: string;
  items: Item[];
  changes: Change[];
}

interface ChangeReq {
  change_request_id: string;
  patch: JSONPatch;
}

export interface ChangesRequest {
  change_received: BigInt;
  changes: ChangeReq[];
}

interface ChangeResp extends Change {
  change_request_id: string;
  status: 'accepted' | 'transformed' | 'rejected';
}

export interface ChangesResponse {
  changes: (Change | ChangeResp)[];
}
