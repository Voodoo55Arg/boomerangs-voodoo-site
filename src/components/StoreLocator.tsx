import { MapPin, Phone } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useState } from 'react';

interface Store {
  name: string;
  address: string;
  phone: string;
  city: string;
}

interface Province {
  name: string;
  stores: Store[];
}

const provinces: Province[] = [
  {
    name: 'CABA',
    stores: [
      { name: 'LOADING HOBBIES', address: 'Av Cabildo 2280 Local 64', phone: '11 30680710', city: 'CABA' },
      { name: 'AVELANDIA', address: 'Araoz 676', phone: '11 35932449', city: 'CABA' },
      { name: 'ROCKSUN', address: 'Av Scalabrini Ortiz 335', phone: '11 58515263', city: 'CABA' },
    ],
  },
  {
    name: 'Provincia de Buenos Aires',
    stores: [
      { name: 'ADVENTURAMA', address: 'Hipólito Yrigoyen 119', phone: '11 47931656', city: 'MARTINEZ' },
      { name: 'ACA TOYS', address: 'Av. Lunghi 729', phone: '2494 498810', city: 'TANDIL' },
      { name: 'AMALU', address: 'Av Villanueva 1043', phone: '11 62713086', city: 'ING MASCHWITZ' },
      { name: 'CALEIDOSCOPIO JUGUETERIA', address: 'Mendoza 1578 - Local 5 - Paseo Mendoza', phone: '11 21610775', city: 'ING MASCHWITZ' },
      { name: 'FLORIDA CAMPING', address: 'Av San Martin 2497', phone: '11 47973209', city: 'VICENTE LOPEZ' },
      { name: 'GAVARRINO CAMPING', address: 'CALLE 59 Nº 1602', phone: '2262 424393', city: 'NECOCHEA' },
      { name: 'LAS TRINCHERAS BEACH', address: 'CALLE 83 Nº 286', phone: '2262 437353', city: 'NECOCHEA' },
      { name: 'BUENA PESCA BOLIVAR', address: 'Moreno 101', phone: '231 4622012', city: 'BOLIVAR' },
    ],
  },
  {
    name: 'Provincia de Córdoba',
    stores: [
      { name: 'COMECHINGONIA STORE', address: 'Belgrano 226', phone: '3544 553449', city: 'VA LAS ROSAS' },
      { name: 'HIMALAYA OUTDOORS', address: 'Av Eden 302', phone: '3548 422373', city: 'LA FALDA' },
      { name: 'TIERRA DE JUGUETES', address: 'Ing. Olmos 272', phone: '351 3142224', city: 'ALTA GRACIA' },
      { name: 'VIVA LA PEPA', address: 'Felipe Erdman 262', phone: '3468 527080', city: 'VILLA DOLORES' },
    ],
  },
  {
    name: 'Provincia de Corrientes',
    stores: [
      { name: 'UNGER OUTDOOR', address: 'Mendoza 1428', phone: '379 4466009', city: 'CORRIENTES' },
    ],
  },
  {
    name: 'Provincia de Chubut',
    stores: [
      { name: 'JUGUETERIA CHANGOS Y CHINITAS', address: 'Av Tehuelches 33 - Km 3', phone: '297 5372028', city: 'COMODORO RIVADAVIA' },
      { name: 'JUGUETERIA CHANGOS Y CHINITAS', address: 'Av. Fragata Sarmiento 1695', phone: '297 154742408', city: 'RADA TILLY' },
    ],
  },
  {
    name: 'Provincia de Entre Ríos',
    stores: [
      { name: 'ARMERIA EL CAZADOR', address: 'Entre Rios 888', phone: '345 4220790', city: 'CONCORDIA' },
      { name: 'SIRIRI AVENTURA', address: 'Blas Parera 384', phone: '343 443052', city: 'PARANA' },
    ],
  },
  {
    name: 'Provincia de Mendoza',
    stores: [
      { name: 'ARMERIA RIZZO', address: 'Entre Rios 57', phone: '261 4204007', city: 'MENDOZA' },
      { name: 'AVENTURA SUR', address: 'Av Libertador Norte 142', phone: '223 5029357', city: 'GENERAL ALVEAR' },
      { name: 'EL PUMA PESCA', address: 'Av Las Heras 575', phone: '261 4259110', city: 'MENDOZA' },
    ],
  },
  {
    name: 'Provincia de Misiones',
    stores: [
      { name: 'KUBISEN TOYS', address: 'San Martin 581', phone: '3755809279', city: 'ARISTOBULO DEL VALLE' },
    ],
  },
  {
    name: 'Provincia de Neuquén',
    stores: [
      { name: 'CASA FERRACIOLI', address: 'Rio Negro 226', phone: '299 4422426', city: 'NEUQUEN' },
      { name: 'AQUILES RENTAL', address: 'Cerro Bayo 69', phone: '2944308348', city: 'VILLA LA ANGOSTURA' },
      { name: 'HARAPOS PATAGONIA', address: 'Av Arrayanes 150', phone: '294 4495757', city: 'VILLA LA ANGOSTURA' },
      { name: 'IMAGINATE DIDACTICOS', address: 'San Martin 195 - Loc 1', phone: '299 6223373', city: 'NEUQUEN' },
      { name: 'PATAGONYKUS', address: 'Mariano Moreno 837', phone: '2972 413886', city: 'SM DE LOS ANDES' },
    ],
  },
  {
    name: 'Provincia de Río Negro',
    stores: [
      { name: 'PATAGONIA ANGLERS', address: 'Francisco Perito Moreno 205', phone: '294 442735', city: 'SC DE BARILOCHE' },
      { name: 'PATAGONIA SHOWROOM', address: 'Palacio 151', phone: '294 4422793', city: 'SC DE BARILOCHE' },
      { name: 'CANTEPRI JUGUETERIA', address: 'Av Bustillo 12453', phone: '294 154509620', city: 'SC DE BARILOCHE' },
      { name: 'TIENDA MINIMA', address: 'Tucuman 461', phone: '298 4788801', city: 'GRAL ROCA' },
    ],
  },
  {
    name: 'Provincia de Salta',
    stores: [
      { name: 'ANAEL PLANETA', address: 'Caseros 665 1er piso Local 115', phone: '387 4422426', city: 'SALTA' },
      { name: 'DE TAL PALO JUGUETERIA', address: 'Av Peron 1 Complejo Alto la Loma', phone: '387 5660468', city: 'SALTA' },
    ],
  },
  {
    name: 'Provincia de San Luis',
    stores: [
      { name: 'MORRISON', address: 'Avenida del sol 785 y Perón 112', phone: '2656 470018', city: 'MERLO' },
    ],
  },
  {
    name: 'Provincia de Santa Fe',
    stores: [
      { name: 'AEROTOYS', address: 'Pedro Lino Funes 946 "b"', phone: '3413 219445', city: 'ROSARIO' },
      { name: 'LEONARDO HOBBIES', address: 'Maipu 2391', phone: '3413 219445', city: 'ROSARIO' },
      { name: 'VINCENT JUGUETERIA', address: 'Remolcador Meteoro 2760', phone: '3424294990', city: 'ROSARIO' },
    ],
  },
  {
    name: 'Provincia de Santiago del Estero',
    stores: [
      { name: 'SHERPAS OUTDOOR', address: 'Francisco Solano 210 y Rivadavia 367', phone: '3858 461816', city: 'TERMAS DE RIO HONDO' },
    ],
  },
  {
    name: 'Provincia de Tucumán',
    stores: [
      { name: 'OSINA TIEMPO LIBRE', address: 'Av Teran 250 - Loc 505 - Shopping de la Terminal', phone: '381 4976568', city: 'TUCUMAN' },
    ],
  },
  {
    name: 'USA',
    stores: [
      { name: 'COLORADO BOOMERANGS', address: '4095 Oceanside Blvd, Ste E, Oceanside', phone: '+1 (760) 295-6456', city: 'CALIFORNIA' },
    ],
  },
  {
    name: 'Chile',
    stores: [
      { name: 'TERRA OUTDOOR', address: 'Padre Alonso de Ovalle 1227', phone: '+56 2 2671 9579', city: 'SANTIAGO' },
      { name: 'TERRA OUTDOOR', address: 'Saturnino Epulef S/N, Cam. Villarrica (Homecenter Villarrica)', phone: '', city: 'VILLARICA' },
      { name: 'TERRA OUTDOOR', address: 'Av. Bernardo O\'Higgins 510 (Local 3)', phone: '', city: 'PUCON' },
    ],
  },
];

export default function StoreLocator() {
  const ref = useReveal();
  const [active, setActive] = useState<string>(provinces[0].name);

  const activeProvince = provinces.find((p) => p.name === active)!;

  return (
    <section id="puntos-de-venta" className="bg-brand-black py-28 md:py-40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="reveal text-brand-sand text-xs tracking-[0.35em] uppercase font-medium mb-4">
            Dónde encontrarnos
          </p>
          <h2 className="reveal reveal-d1 font-display font-extrabold uppercase leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>
            <span className="text-brand-off-white">Puntos</span>
            <span className="text-brand-sand"> de venta</span>
          </h2>
        </div>

        {/* Province tabs + stores */}
        <div className="reveal reveal-d2 grid lg:grid-cols-3 gap-0 border border-white/5">
          {/* Province list */}
          <div className="border-r border-white/5 max-h-96 overflow-y-auto">
            {provinces.map((p) => (
              <button
                key={p.name}
                onClick={() => setActive(p.name)}
                className={`w-full text-left px-6 py-4 border-b border-white/5 flex items-center justify-between transition-all duration-200 text-sm ${
                  active === p.name
                    ? 'bg-brand-sand/10 text-brand-off-white font-semibold'
                    : 'text-brand-sand/50 hover:text-brand-sand/80 hover:bg-white/2'
                }`}
              >
                <span className="tracking-wide uppercase">{p.name}</span>
                <span className="text-xs text-brand-sand/30">{p.stores.length}</span>
              </button>
            ))}
          </div>

          {/* Stores display */}
          <div className="lg:col-span-2 p-6 max-h-96 overflow-y-auto">
            <p className="text-brand-sand/40 text-[10px] tracking-[0.3em] uppercase mb-5 sticky top-0">
              {activeProvince.name} — {activeProvince.stores.length} punto{activeProvince.stores.length !== 1 ? 's' : ''} de venta
            </p>
            <div className="space-y-3">
              {activeProvince.stores.map((store, i) => (
                <div
                  key={`${store.name}-${i}`}
                  className="border border-white/5 hover:border-brand-sand/20 p-4 transition-all duration-200 group"
                >
                  <h4 className="text-brand-off-white font-semibold text-sm mb-2 group-hover:text-brand-sand transition-colors">
                    {store.name}
                  </h4>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-start gap-2 text-brand-sand/50 text-xs">
                        <MapPin size={10} className="mt-0.5 flex-shrink-0" />
                        <span>{store.address}</span>
                      </div>
                      {store.phone && (
                        <div className="flex items-center gap-2 text-brand-sand/50 text-xs">
                          <Phone size={10} className="flex-shrink-0" />
                          <span>{store.phone}</span>
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] tracking-widest uppercase text-brand-sand/30 border border-white/5 px-2.5 py-1 flex-shrink-0 whitespace-nowrap">
                      {store.city}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
