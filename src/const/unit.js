const properties = [
    { value: 0, label: "Acceleration" },
    { value: 1, label: "Area" },
    { value: 2, label: "Torque" },
    { value: 3, label: "Electricity" },
    { value: 4, label: "Energy" },
    { value: 5, label: "Force" },
    { value: 6, label: "Force / Length" },
    { value: 7, label: "Length" },
    { value: 8, label: "Light" },
    { value: 9, label: "Mass" },
    { value: 10, label: "Mass Flow" },
    { value: 11, label: "Density & Mass capacity" },
    { value: 12, label: "Power" },
    { value: 13, label: "Pressure & Stress" },
    { value: 14, label: "Temperature" },
    { value: 15, label: "Time" },
    { value: 16, label: "Velocity & Speed" },
    { value: 17, label: "Viscosity" },
    { value: 18, label: "Volume & Capacity" },
    { value: 19, label: "Volume Flow" }
];


const units = [
    ["Meter/sq.sec (m/sec^2)", "Foot/sq.sec (ft/sec^2)", "G (g)", "Galileo (gal)", "Inch/sq.sec (in/sec^2)"],
    ["Square meter (m^2)", "Acre (acre)", "Are", "Barn (barn)", "Hectare", "Rood", "Square centimeter", "Square kilometer", "Circular mil", "Square foot (ft^2)", "Square inch (in^2)", "Square mile (mi^2)", "Square yard (yd^2)"],
    ["Newton-meter (N m)", "Dyne-centimeter(dy cm)", "Kgrf-meter (kgf m)", "lbf-inch (lbf in)", "lbf-foot (lbf ft)"],
    ["Coulomb (Cb)", "Abcoulomb", "Ampere hour (A hr)", "Faraday (F)", "Statcoulomb", "Millifaraday (mF)", "Microfaraday (mu-F)", "Picofaraday (pF)"],
    ["Joule (J)", "BTU (mean)", "BTU (thermochemical)", "Calorie (SI) (cal)", "Calorie (mean)(cal)", "Calorie (thermo)", "Electron volt (eV)", "Erg (erg)", "Foot-pound force", "Foot-poundal", "Horsepower-hour", "Kilocalorie (SI)(kcal)", "Kilocalorie (mean)(kcal)", "Kilowatt-hour (kW hr)", "Ton of TNT", "Volt-coulomb (V Cb)", "Watt-hour (W hr)", "Watt-second (W sec)"],
    ["Newton (N)", "Dyne (dy)", "Kilogram force (kgf)", "Kilopond force (kpf)", "Kip (k)", "Ounce force (ozf)", "Pound force (lbf)", "Poundal"],
    ["Newton/meter (N/m)", "Pound force/inch (lbf/in)", "Pound force/foot (lbf/ft)"],
    ["Meter (m)", "Angstrom (A')", "Astronomical unit (AU)", "Caliber (cal)", "Centimeter (cm)", "Kilometer (km)", "Ell", "Em", "Fathom", "Furlong", "Fermi (fm)", "Foot (ft)", "Inch (in)", "League (int'l)", "League (UK)", "Light year (LY)", "Micrometer (mu-m)", "Mil", "Millimeter (mm)", "Nanometer (nm)", "Mile (int'l nautical)", "Mile (UK nautical)", "Mile (US nautical)", "Mile (US statute)", "Parsec", "Pica (printer)", "Picometer (pm)", "Point (pt)", "Rod", "Yard (yd)"],
    ["Lumen/sq.meter (Lu/m^2)", "Lumen/sq.centimeter", "Lumen/sq.foot", "Foot-candle (ft-cdl)", "Foot-lambert", "Candela/sq.meter", "Candela/sq.centimeter", "Lux (lux)", "Phot"],
    ["Kilogram (kgr)", "Gram (gr)", "Milligram (mgr)", "Microgram (mu-gr)", "Carat (metric)(ct)", "Hundredweight (long)", "Hundredweight (short)", "Pound mass (lbm)", "Pound mass (troy)", "Ounce mass (ozm)", "Ounce mass (troy)", "Slug", "Ton (assay)", "Ton (long)", "Ton (short)", "Ton (metric)", "Tonne"],
    ["Kilogram/second (kgr/sec)", "Pound mass/sec (lbm/sec)", "Pound mass/min (lbm/min)"],
    ["Kilogram/cub.meter", "Grain/galon", "Grams/cm^3 (gr/cc)", "Pound mass/cubic foot", "Pound mass/cubic-inch", "Ounces/gallon (UK,liq)", "Ounces/gallon (US,liq)", "Ounces (mass)/inch", "Pound mass/gal (UK,liq)", "Pound mass/gal (US,liq)", "Slug/cubic foot", "Tons (long,mass)/cub.yard"],
    ["Watt (W)", "Kilowatt (kW)", "Megawatt (MW)", "Milliwatt (mW)", "BTU (SI)/hour", "BTU (thermo)/second", "BTU (thermo)/minute", "BTU (thermo)/hour", "Calorie (thermo)/second", "Calorie (thermo)/minute", "Erg/second", "Foot-pound force/hour", "Foot-pound force/minute", "Foot-pound force/second", "Horsepower(550 ft lbf/s)", "Horsepower (electric)", "Horsepower (boiler)", "Horsepower (metric)", "Horsepower (UK)", "Kilocalorie (thermo)/min", "Kilocalorie (thermo)/sec"],
    ["Newton/sq.meter", "Atmosphere (normal)", "Atmosphere (techinical)", "Bar", "Centimeter mercury(cmHg)", "Centimeter water (4'C)", "Decibar", "Kgr force/sq.centimeter", "Kgr force/sq.meter", "Kip/square inch", "Millibar", "Millimeter mercury(mmHg)", "Pascal (Pa)", "Kilopascal (kPa)", "Megapascal (Mpa)", "Poundal/sq.foot", "Pound-force/sq.foot", "Pound-force/sq.inch (psi)", "Torr (mmHg,0'C)"],
    ["Degrees Celsius ('C)", "Degrees Fahrenheit ('F)", "Degrees Kelvin ('K)", "Degrees Rankine ('R)"],
    ["Second (sec)", "Day (mean solar)", "Day (sidereal)", "Hour (mean solar)", "Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Month (mean calendar)", "Second (sidereal)", "Year (calendar)", "Year (tropical)", "Year (sidereal)"],
    ["Meter/second (m/sec)", "Foot/minute (ft/min)", "Foot/second (ft/sec)", "Kilometer/hour (kph)", "Knot (int'l)", "Mile (US)/hour (mph)", "Mile (nautical)/hour", "Mile (US)/minute", "Mile (US)/second", "Speed of light (c)", "Mach (STP)(a)"],
    ["Newton-second/meter", "Centipoise", "Centistoke", "Sq.foot/second", "Poise", "Poundal-second/sq.foot", "Pound mass/foot-second", "Pound force-second/sq.foot", "Rhe", "Slug/foot-second", "Stoke"],
    ["Cubic Meter (m^3)", "Cubic centimeter", "Cubic millimeter", "Acre-foot", "Barrel (oil)", "Board foot", "Bushel (US)", "Cup", "Fluid ounce (US)", "Cubic foot", "Gallon (UK)", "Gallon (US,dry)", "Gallon (US,liq)", "Gill (UK)", "Gill (US)", "Cubic inch (in^3)", "Liter (new)", "Liter (old)", "Ounce (UK,fluid)", "Ounce (US,fluid)", "Peck (US)", "Pint (US,dry)", "Pint (US,liq)", "Quart (US,dry)", "Quart (US,liq)", "Stere", "Tablespoon", "Teaspoon", "Ton (register)", "Cubic yard"],
    ["Cubic meter/second", "Cubic foot/second", "Cubic foot/minute", "Cubic inches/minute", "Gallons (US,liq)/minute"]
];

const factors = [
    [1, 0.3048, 9.806650, 0.01, 0.0254],
    [1, 4046.856, 100, 1e-28, 10000, 1011.71413184285, 0.0001, 1000000, 5.067075e-10, 0.09290304, 0.00064516, 2589988, 0.8361274],
    [1, 0.0000001, 9.806650, 0.1129848, 1.355818],
    [1, 10, 3600, 96521.8999999997, 0.000000000333564, 96.5219, 0.0965219, 0.0000965219],
    [1, 1055.87, 1054.35, 4.1868, 4.19002, 4.184, 1.6021E-19, 0.0000001, 1.355818, 0.04214011, 2684077.3, 4186.8, 4190.02, 3600000, 4.2E9, 1, 3600, 1],
    [1, 0.00001, 9.806650, 9.806650, 4448.222, 0.2780139, 0.4535924, 0.138255],
    [1, 175.1268, 14.5939],
    [1, 1E-10, 1.49598E11, 0.000254, 0.01, 1000, 1.143, 4.2323E-03, 1.8288, 201.168, 1E-15, 0.3048, 0.0254, 5556, 5556, 9.46055E+15, 0.000001, 0.0000254, 0.001, 1E-9, 1852, 1853.184, 1852, 1609.344, 3.08374E+16, 0.004217518, 1E-12, 0.0003514598, 0.0050292, 0.9144],
    [1, 10000, 10.76391, 10.76391, 10.76391, 3.14159250538575, 31415.9250538576, 1, 10000],
    [1, 0.001, 1e-6, 0.000000001, 0.0002, 50.80235, 45.35924, 0.4535924, 0.3732417, 0.02834952, 0.03110348, 14.5939, 0.02916667, 1016.047, 907.1847, 2204.623, 35.27396, 32.15073, 1000],
    [1, 1/3600, 1/60],
    [1, 7700, 1000, 62.428, 1728, 6.236, 35.23907, 284.131, 231, 64.79891, 62.43, 3.5364, 264.1721, 1.601, 1.733871, 4.329, 61.02376, 1000, 1000, 35.31466, 8, 2.768866, 34.560, 28.875, 4.808922, 3.785412, 202.8841, 1.42265, 4.928922, 105.996],
    [1, 0.0008107143, 0.01666667, 0.0002777778, 0.0000046296, 0.002777778, 0.1666667, 0.00892857, 0.0002390057, 0.00001666667],
    [1, 101325, 101325, 100000, 1333.2237, 2989.0669, 10000, 98066.5, 98066.5, 6894.76, 6894757, 133.3224, 0.1, 1000, 1000, 0.0000098692, 1, 0.00142233, 0.0001450377],
    [1, 0.55555555555555555555555555555556, 1, 1.8],
    [1, 86400, 86164.09053, 3600, 3661.6189, 60, 61.61616, 2628000, 86164.09053, 31536000, 31556925.9747, 31558118.8316],
    [1, 0.0056823333, 0.0041666667, 0.24104166, 0.22727272, 0.69444444, 0.72916667, 1.0000219, 0.984259, 0.001302083, 0.001038658],
    [1, 54.6807, 88.0, 118.110236220472, 11811.0236, 1728, 268.8025, 8, 128, 0.3519514, 0.16054456, 2150.42, 18.18436, 128, 231, 128, 61.02376, 0.001, 0.001, 35.31466, 1.63871, 16.65348, 34.676, 68.73876, 1, 1.66679, 4.92892, 35.31466],
    [1, 0.00000001, 0.00027778, 0.00057870, 0.00166678],
];

export {
    properties,
    units,
    factors
}
