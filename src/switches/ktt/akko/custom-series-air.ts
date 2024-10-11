import {
    Material,
    SpringStainlessSteel,
    StemMX,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

export default {
    model: 'Custom Series',
    variation: 'Air',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque('#B0E0E6'))), // Assuming pale blue color for the stem (air-like)
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
        lower: Material.PC(Color.Transparent('#B0E0E6')),
    },
    force: {
        bottom: Force.GramForce(58, Tolerance.PlusMinus(5)),
        actuation: Force.GramForce(48, Tolerance.PlusMinus(5)),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(4.0, Tolerance.PlusMinus(0.5)),
    },
} satisfies Switch;
