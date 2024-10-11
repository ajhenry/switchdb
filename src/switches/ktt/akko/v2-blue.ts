import {
    Material,
    SpringStainlessSteel,
    StemMX,
    Switch,
} from '../../../switch';
import { Color, Force, Tolerance, Travel } from '../../../types';

const COLOR_STEM = '#40A6F7'; // Assuming blue stem color for Blue switch
const COLOR_OTHER = '#272728'; // Assuming black for housing

export default {
    model: 'V2',
    variation: 'Blue',
    profile: 'regular',
    stem: StemMX.Regular(Material.POM(Color.Opaque(COLOR_STEM))),
    type: 'clicky',
    spring: SpringStainlessSteel.Regular(),
    volume: 'loud',
    lifetime: 50,
    lighting: 'none',
    mount: 'both',
    lubrication: 'none',
    datasheet: undefined,
    housing: {
        upper: Material.PC(Color.Opaque(COLOR_OTHER)),
        lower: Material.PC(Color.Opaque(COLOR_OTHER)),
    },
    travel: {
        pre: Travel.Millimeter(1.9, Tolerance.PlusMinus(0.3)),
        total: Travel.Millimeter(4.0, Tolerance.Minus(0.5)),
        pressure: Travel.Millimeter(1.5, Tolerance.PlusMinus(0.3)),
    },
    force: {
        actuation: Force.GramForce(50, Tolerance.PlusMinus(5)),
        tactile: Force.GramForce(60, Tolerance.PlusMinus(5)),
        bottom: undefined, // End Force is not provided in the example
    },
} satisfies Switch;
