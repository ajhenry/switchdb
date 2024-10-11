import {
    Material,
    SpringStainlessSteel,
    StemMX,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Crystal',
    profile: 'regular',
    stem: StemMX.Regular(Material.PC(Color.Opaque('#FFFFFF'))), // Assuming white color for the stem
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
        lower: Material.PC(Color.Transparent('#FFFFFF')),
    },
    force: {
        bottom: Force.GramForce(48, Tolerance.PlusMinus(5)),
        actuation: Force.GramForce(43, Tolerance.PlusMinus(5)),
    },
    travel: {
        pre: Travel.Millimeter(1.6, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.6, Tolerance.PlusMinus(0.3)),
    },
} satisfies Switch;
