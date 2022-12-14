export class IVersionedGet {
    _id: any = {};
    ProjectID: number = 0;
    version: string = '';
    description: string = '';
    type: string = '';
}

export class IVersionedPost {
    ProjectID: number = 0;
    version: string = '';
    description: string = '';
    type: string = '';
}