import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'V3',
    variation: 'Cream Blue',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#ADD8E6'))), // Assuming cream blue color
    type: 'tactile',
    lifetime: 50,
    mount: '3pin',
    spring: undefined, // Not provided in the example
    lubrication: 'none',
    lighting: undefined,
    datasheet: undefined,
    volume: undefined,
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent('#ADD8E6')),
    },
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.5, Tolerance.PlusMinus(0.3)),
        pressure: Travel.Millimeter(0.5, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(38, Tolerance.PlusMinus(5)),
        tactile: Force.GramForce(53, Tolerance.PlusMinus(5)),
        bottom: undefined, // No end force provided
    },
} satisfies Switch;
