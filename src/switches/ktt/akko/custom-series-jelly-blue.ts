import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Jelly Blue',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#0000FF'))), // Assuming blue color
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
        lower: Material.PC(Color.Transparent('#0000FF')),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.3)),
        pressure: Travel.Millimeter(0.3, Tolerance.PlusMinus(0.2)),
    },
    force: {
        actuation: Force.GramForce(40, Tolerance.PlusMinus(5)),
        tactile: Force.GramForce(60, Tolerance.PlusMinus(5)),
        bottom: undefined,
    },
} satisfies Switch;
