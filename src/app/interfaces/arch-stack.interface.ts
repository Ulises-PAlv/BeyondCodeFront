export class ITechStack {
    type: string = '';
    technology: string = '';
    concept: string = '';
    description: string = '';
    reason: string = '';
}

export class IArchStackGet {
    _id: any = {};
    projectID: number = 0;
    date: string = '';
    arrayStack: ITechStack[] = [];
}

export class IArchStackPost {
    projectID: number = 0;
    date: string = '';
    arrayStack: ITechStack[] = [];
}