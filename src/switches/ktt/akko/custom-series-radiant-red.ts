import {
    Material,
    SpringStainlessSteel,
    StemMX,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Radiant Red',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#FF4500'))), // Assuming a radiant red color
    mount: '5pin',
    type: 'linear',
    lifetime: 50,
    lighting: 'both',
    lubrication: 'none',
    datasheet: undefined,
    volume: undefined,
    spring: SpringStainlessSteel.Extension(),
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent('#FF4500')),
    },
    force: {
        bottom: Force.GramForce(62, Tolerance.PlusMinus(5)),
        actuation: Force.GramForce(53, Tolerance.PlusMinus(5)),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.5, Tolerance.PlusMinus(0.3)),
    },
} satisfies Switch;
