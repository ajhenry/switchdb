import {
    Material,
    SpringStainlessSteel,
    StemMX,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Pink',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#FFB6C1'))),
    mount: '5pin',
    type: 'linear',
    lifetime: 50,
    lighting: 'both',
    lubrication: 'none',
    datasheet: undefined,
    volume: undefined,
    spring: SpringStainlessSteel.Regular(),
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent('#FFB6C1')),
    },
    force: {
        bottom: Force.GramForce(55, Tolerance.PlusMinus(5)),
        actuation: Force.GramForce(45, Tolerance.PlusMinus(5)),
    },
    travel: {
        pre: Travel.Millimeter(2.0, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.5)),
    },
} satisfies Switch;
