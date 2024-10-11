import type { CollectionInterface } from '../../collection';
import akko from './akko';

export default (collection: CollectionInterface): void => {
    collection.add({ name: 'KTT', brands: [akko] });
};
