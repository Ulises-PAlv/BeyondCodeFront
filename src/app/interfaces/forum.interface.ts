export class entries {
    entryID: number = 0;
    message: string = '';
    entryDate: string = '';
    entryCreator: string = '';
    evidence: string = '';
}

export class IForum {
    _id: any = {};
    topic: string = '';
    date: string = '';
    creator: string = '';
    type: string = '';
    entries: entries[] = [];
}
