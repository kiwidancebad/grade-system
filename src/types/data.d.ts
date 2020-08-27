declare module 'DataTypes' {
  export interface ISkill {
    id: string;
    name: string;
    description: string;
    links: {
      name?: string;
      uri: string;
    }[];
  }

  export interface ITech {
    id: string;
    name: string;
    skills: ISkill[];
  }
}
