import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Jelly Purple',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#800080'))), // Assuming purple color
    type: 'tactile',
    lifetime: 50,
    mount: '3pin',
    spring: undefined,
    lubrication: 'none',
    lighting: undefined,
    datasheet: undefined,
    volume: undefined,
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent('#800080')),
    },
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.5)),
        pressure: Travel.Millimeter(0.5, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(40, Tolerance.PlusMinus(5)),
        tactile: Force.GramForce(56, Tolerance.PlusMinus(5)),
        bottom: undefined,
    },
} satisfies Switch;
