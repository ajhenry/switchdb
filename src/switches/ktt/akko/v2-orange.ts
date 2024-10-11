import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'V2',
    variation: 'Orange',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#FFA500'))), // Assuming orange color
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
        lower: Material.PC(Color.Transparent('#FFA500')),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.5)),
        pressure: Travel.Millimeter(1.5, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(40, Tolerance.PlusMinus(5)),
        tactile: Force.GramForce(55, Tolerance.PlusMinus(5)),
        bottom: undefined,
    },
} satisfies Switch;
