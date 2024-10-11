import {
    Material,
    SpringStainlessSteel,
    StemMX,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Snow Blue Grey',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#B0C4DE'))), // Assuming blue-grey color for the stem
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
        lower: Material.PC(Color.Transparent('#B0C4DE')),
    },
    force: {
        bottom: Force.GramForce(50, Tolerance.PlusMinus(5)),
        actuation: Force.GramForce(43, Tolerance.PlusMinus(5)),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.5)),
    },
} satisfies Switch;
