export interface IMenuItem {
  id: number;
  title: string;
  action?: () => void;
  subItems?: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'History',
  },
  {
    id: 3,
    title: 'Profile',
    subItems: [
      {
        id: 1,
        title: 'Profile',
      },
    ],
  },
];
