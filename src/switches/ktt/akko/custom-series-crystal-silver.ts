import {
    Material,
    SpringStainlessSteel,
    StemMX,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Crystal Silver',
    profile: 'regular',
    stem: StemMX.Regular(Material.PC(Color.Opaque('#C0C0C0'))), // Assuming silver color for the stem
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
        lower: Material.PC(Color.Transparent('#C0C0C0')),
    },
    force: {
        bottom: Force.GramForce(48, Tolerance.PlusMinus(5)),
        actuation: Force.GramForce(43, Tolerance.PlusMinus(5)),
    },
    travel: {
        pre: Travel.Millimeter(1.0, Tolerance.PlusMinus(0.6)),
        total: Travel.Millimeter(3.0, Tolerance.PlusMinus(0.3)),
    },
} satisfies Switch;
