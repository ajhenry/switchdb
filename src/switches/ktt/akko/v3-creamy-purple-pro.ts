import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'V3',
    variation: 'Creamy Purple Pro',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#E6E6FA'))), // Assuming lavender purple color
    type: 'tactile',
    lifetime: 50,
    mount: '3pin',
    spring: undefined,
    lubrication: 'factory',
    lighting: undefined,
    datasheet: undefined,
    volume: undefined,
    housing: {
        upper: Material.PC(Color.Opaque('#C4C0D5')),
        lower: Material.PC(Color.Opaque('#97709A')),
    },
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(3.0),
        pressure: Travel.Millimeter(0.5),
    },
    force: {
        actuation: Force.GramForce(30, Tolerance.PlusMinus(5)),
        tactile: Force.GramForce(55, Tolerance.PlusMinus(5)),
        bottom: undefined,
    },
} satisfies Switch;
