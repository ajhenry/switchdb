import {
    Material,
    SpringStainlessSteel,
    StemMX,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Cream Yellow',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#FFFF99'))), // Assuming cream yellow color for the stem
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
        lower: Material.PC(Color.Transparent('#FFFF99')),
    },
    force: {
        bottom: Force.GramForce(58, Tolerance.PlusMinus(5)),
        actuation: Force.GramForce(50, Tolerance.PlusMinus(5)),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(3.5, Tolerance.PlusMinus(0.3)),
    },
} satisfies Switch;
