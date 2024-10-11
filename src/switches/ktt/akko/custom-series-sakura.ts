import { Material, StemMX, Switch } from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Sakura',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#FFB7C5'))), // Assuming sakura (pink) color
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
        lower: Material.PC(Color.Transparent('#FFB7C5')),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.3)),
        pressure: Travel.Millimeter(0.3, Tolerance.PlusMinus(0.2)),
    },
    force: {
        actuation: Force.GramForce(39, Tolerance.PlusMinus(5)),
        tactile: Force.GramForce(55, Tolerance.PlusMinus(5)),
        bottom: undefined, // No end force provided
    },
} satisfies Switch;
