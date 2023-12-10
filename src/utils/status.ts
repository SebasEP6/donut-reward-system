export type StatusTypes = 'done' | 'pending';

type StatusColorType = {
  [key in StatusTypes]: string;
};

export const getStatusColor: StatusColorType = {
  done: '#65C97C',
  pending: '#C9656E',
};
