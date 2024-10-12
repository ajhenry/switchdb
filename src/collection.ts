import { type Brand, type Manufacturer, type Switch } from './switch';

export interface MechanicalKeySwitch {
    readonly id: string;
    readonly brand: Brand;
    readonly manufacturer: Manufacturer;
    readonly spec: Switch;
    readonly friendlyName: string;
}

export interface CollectionInterface {
    add: (manufacturer: Manufacturer) => void;

    items: () => MechanicalKeySwitch[];

    getById: (id: string) => MechanicalKeySwitch | null;
}
