declare global {
  interface Window {
    DzHaven: any
  }
}

export class TaskModel {
  constructor(public id: number, public title: string, public description?: string) {} 
}
