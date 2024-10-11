import {
    Material,
    SpringStainlessSteel,
    StemMX,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Rose Red',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#FF6347'))), // Assuming red color for the stem
    mount: '5pin',
    type: 'linear',
    lifetime: 50,
    lighting: 'both',
    lubrication: 'none',
    datasheet: undefined,
    volume: undefined,
    spring: SpringStainlessSteel.Progressive(),
    housing: {
        upper: Material.PC(Color.Transparent()),
        lower: Material.PC(Color.Transparent('#FF6347')),
    },
    force: {
        bottom: Force.GramForce(55, Tolerance.PlusMinus(5)),
        actuation: Force.GramForce(43, Tolerance.PlusMinus(5)),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.5, Tolerance.PlusMinus(0.3)),
    },
} satisfies Switch;
