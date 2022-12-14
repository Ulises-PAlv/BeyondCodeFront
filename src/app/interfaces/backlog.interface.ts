export class IBacklogGet {
    title: string = '';
    priority: string = '';
    description: string = '';
    note: string = '';
    status: string = '';
}

export class IBacklogPost {
    title: string = '';
    priority: string = '';
    description: string = '';
    note: string = '';
    status: string = '';
    id: number = 0;
}

export class ISprintGet {
    _id: any = {};
    ProjectID: number = 0;
    date: string = '';
    type: string = '';
    sprintNumber: number = 0;
    backlog: IBacklogGet[] = [];
}

export class ISprintPost {
    ProjectID: number = 0;
    date: string = '';
    type: string = '';
    sprintNumber: number = 0;
    backlog: IBacklogGet[] = [];
}