import Fuse from 'fuse.js';
import { collection } from '.';
import { CollectionInterface, MechanicalKeySwitch } from './collection';
import type { Brand, Manufacturer, Switch } from './switch';

const manufacturers: Manufacturer[] = [];
const switches: MechanicalKeySwitch[] = [];

const createId = (
    manufacturer: Manufacturer,
    brand: Brand,
    sw: Switch,
): string => {
    let id = `${manufacturer.name}-${brand.name}-${sw.model}-${sw.profile}`;

    if (sw.variation && sw.variation !== 'undefined') {
        id = `${manufacturer.name}-${brand.name}-${sw.model}-${sw.variation}-${sw.profile}`;
    }

    id = id.replace(/\s/g, '-').toLowerCase();

    return id;
};

const toFriendlyName = (_: Manufacturer, brand: Brand, sw: Switch) => {
    let baseLabel = `${brand.name} ${sw.model}`;

    if (sw.variation && sw.variation !== 'undefined') {
        baseLabel = `${baseLabel} ${sw.variation}`;
    }

    if (sw.profile === 'low') {
        baseLabel = `${baseLabel} (Low Profile)`;
    }

    return baseLabel;
};

const collector: CollectionInterface = {
    add: (manufacturer) => {
        manufacturers.push(manufacturer);
        manufacturer.brands.forEach((brand) => {
            brand.switches.forEach((sw) => {
                switches.push({
                    id: createId(manufacturer, brand, sw),
                    friendlyName: toFriendlyName(manufacturer, brand, sw),
                    brand: brand,
                    manufacturer: manufacturer,
                    spec: sw,
                });
            });
        });
    },
    items: () => switches,
    getById: (id) => switches.find((sw) => sw.id === id) || null,
};

let initialized = false;

const initCollector = () => {
    if (initialized) return;

    collection(collector);
    initialized = true;
};

// Fetch all the switches available in all the collections
export const search = (term: string, count = 10): MechanicalKeySwitch[] => {
    initCollector();
    const fuse = new Fuse(switches, {
        keys: ['id', 'brand.name', 'manufacturer.name', 'spec.model'],
    });

    const results = fuse.search(term, { limit: count });
    return results.map((result) => result.item);
};

export const getSwitchById = (id: string): MechanicalKeySwitch | null => {
    initCollector();
    return collector.getById(id);
};

export const getAllSwitches = (): MechanicalKeySwitch[] => {
    initCollector();
    return collector.items();
};
