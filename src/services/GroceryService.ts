export const minGroseryPriorityValue = 1;
export const maxGroseryPriorityValue = 5;

export enum GroceryStatus {
    OUT = 'run out',
    HAVE = 'have'
};

export interface GroceryOptions {
    id?: number,
    name?: string,
    priority?: number,
    status?: GroceryStatus
};

export class Grocery {
    private _id: number;
    private _name: string;
    private _priority: number;
    private _status: GroceryStatus;

    constructor(opts: GroceryOptions) {
        this._id = opts.id || 0;
        this._name = opts.name || 'noname';
        this._priority = opts.priority || 1;
        this._status = opts.status || GroceryStatus.HAVE;

        if (this._priority > 5) this._priority = 5;
        if (this._priority < 1) this._priority = 1;
    }

    get id():number {
        return this._id;
    }

    get name():string {
        return this._name;
    }

    get priority():number {
        return this._priority;
    }

    get status():GroceryStatus {
        return this._status;
    }
};

const getGroceryList = ():Grocery[] => {
    return JSON.parse(localStorage.getItem('groceryList') || '[]');
};

const createGrocery = async (grocery: Grocery) => {
    const groceryList: any[] = <Grocery[]>getGroceryList();
    groceryList.push({
        id: grocery.id,
        name: grocery.name,
        status: grocery.status,
        priority: grocery.priority
    });

    return localStorage.setItem('groceryList', JSON.stringify(groceryList));
};

const getGroceryById = ():Grocery => {
    return getGroceryList()[0];
}

export default {
    create: createGrocery,
    getList: getGroceryList,
    getById: getGroceryById
};