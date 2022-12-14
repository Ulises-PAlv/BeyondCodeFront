export class ITechStackGet {
    type: string = '';
    technology: string = '';
    concept: string = '';
    description: string = '';
    reason: string = '';
}

export class ITechStackPost {
    type: string = '';
    technology: string = '';
    concept: string = '';
    description: string = '';
    reason: string = '';
    id: number = 0;
}

export class IArchStackGet {
    _id: any = {};
    ProjectID: number = 0;
    date: string = '';
    arrayStack: ITechStackGet[] = [];
}

export class IArchStackPost {
    ProjectID: number = 0;
    date: string = '';
    arrayStack: ITechStackGet[] = [];
}