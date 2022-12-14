export class IEntriesGet {
    entryID: number = 0;
    message: string = '';
    entryDate: string = '';
    entryCreator: string = '';
    evidence: string = '';
}

export class IEntriesPost {
    entryID: number = 0;
    message: string = '';
    entryDate: string = '';
    entryCreator: string = '';
    evidence: string = '';
    id: string = '';
}

export class IForumGet {
    _id: any = {};
    topic: string = '';
    date: string = '';
    creator: string = '';
    type: string = '';
    entries: IEntriesGet[] = [];
}

export class IForumPost {
    topic: string = '';
    date: string = '';
    creator: string = '';
    type: string = '';
    entries: IEntriesGet[] = [];
}