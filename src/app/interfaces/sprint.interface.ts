export class IBacklog {
    title: string = '';
    priority: number = 0;
    description: string = '';
    note: string = '';
    status: number = 0;
}

export class ISprintGet {
    _id: any = {};
    projectID: number = 0;
    type: number = 0;
    sprintNumber: number = 0;
    backlog: IBacklog[] = [];
}

export class ISprintPost {
    projectID: number = 0;
    type: number = 0;
    sprintNumber: number = 0;
    backlog: IBacklog[] = [];
}