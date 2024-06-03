import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";

function ProductCategory() {
  return (
    <div className="flex flex-col justify-center">

      <Accordion>

        <AccordionItem key="10" aria-label="Accordion 10" title="Categorías">

          <Accordion>
            <AccordionItem key="10.1" aria-label="Accordion 10.1" title="Equipos y Notebooks">
              <h1 className='mb-2'>- Notebooks</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.2" aria-label="Accordion 10.2" title="Kits de actualización">
              <h1 className='mb-2'>- Kits de actualización</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.3" aria-label="Accordion 10.3" title="Procesadores">
              <h1 className='mb-2'>- Procesadores AMD</h1>
              <h1 className='mt-2'>- Procesadores Intel</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.4" aria-label="Accordion 10.4" title="Mothers">
              <h1 className='mb-2'>- Mothers AMD</h1>
              <h1 className='mt-2'>- Mothers Intel</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.5" aria-label="Accordion 10.5" title="Placas de video">
              <h1 className='mb-2'>- Placas de video AMD</h1>
              <h1 className='mt-2'>- Placas de video Nvidia</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.6" aria-label="Accordion 10.6" title="Memorias RAM">
              <h1 className='mb-2'>- Memorias</h1>
              <h1 className='mt-2'>- Memorias Notebook</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.7" aria-label="Accordion 10.7" title="Alamacenamiento">
              <h1 className='mb-2'>- Discos Externos</h1>
              <h1 className='my-2'>- Discos Rígidos</h1>
              <h1 className='my-2'>- Discos Sólidos SSD</h1>
              <h1 className='mt-2'>- Tarjetas de Memoria Micro SD</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.8" aria-label="Accordion 10.8" title="Refrigeración">
              <h1 className='mb-2'>- Coolers Fan</h1>
              <h1 className='my-2'>- Coolers CPU</h1>
              <h1 className='mt-2'>- Pasta Térmica</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.9" aria-label="Accordion 10.9" title="Gabinetes">
              <h1 className='mb-2'>- Gabinetes</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.10" aria-label="Accordion 10.10" title="Fuentes">
              <h1 className='mb-2'>- Fuentes de alimentación</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.11" aria-label="Accordion 10.11" title="Monitores">
              <h1 className='mb-2'>- Monitores y pantallas</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.12" aria-label="Accordion 10.12" title="Periféricos">
              <h1 className='mb-2'>- Auriculares</h1>
              <h1 className='my-2'>- Teclados</h1>
              <h1 className='my-2'>- Mouses</h1>
              <h1 className='my-2'>- Mouse Pads</h1>
              <h1 className='my-2'>- Webcams</h1>
              <h1 className='my-2'>- Joysticks</h1>
              <h1 className='my-2'>- Parlantes</h1>
              <h1 className='my-2'>- Combos perifécos</h1>
              <h1 className='my-2'>- Micrófonos</h1>
              <h1 className='mt-2'>- Volantes y simuladores</h1>
            </AccordionItem>
          </Accordion>

        </AccordionItem>

      </Accordion>

    </div>
  );
}

export default ProductCategory;

