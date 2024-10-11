import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Silver',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#C0C0C0'))), // Assuming silver color
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
        lower: Material.PC(Color.Transparent('#C0C0C0')),
    },
    travel: {
        pre: Travel.Millimeter(1.0, Tolerance.PlusMinus(0.5)),
        total: Travel.Millimeter(3.0, Tolerance.PlusMinus(0.3)),
        pressure: undefined, // No tactile position provided
    },
    force: {
        actuation: Force.GramForce(43, Tolerance.PlusMinus(5)),
        tactile: Force.GramForce(48, Tolerance.PlusMinus(5)),
        bottom: undefined,
    },
} satisfies Switch;
