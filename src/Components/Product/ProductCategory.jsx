import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";

function ProductCategory() {
  return (
    <div className="flex flex-col justify-center bg-white border rounded-lg shadow-sm">

      <Accordion className=''>

        <AccordionItem key="10" aria-label="Accordion 10" title="Categorías">

          <Accordion>
            <AccordionItem key="10.1" aria-label="Accordion 10.1" title="Procesadores">
              <h1 className='mb-2'>- Procesadores AMD</h1>
              <h1 className='mt-2'>- Procesadores Intel</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.2" aria-label="Accordion 10.2" title="Mothers">
              <h1 className='mb-2'>- Mothers AMD</h1>
              <h1 className='mt-2'>- Mothers Intel</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.3" aria-label="Accordion 10.3" title="Placas de video">
              <h1 className='mb-2'>- Placas de video AMD</h1>
              <h1 className='mt-2'>- Placas de video Nvidia</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.4" aria-label="Accordion 10.4" title="Memorias">
              <h1 className='mb-2'>- Memorias Ram</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.5" aria-label="Accordion 10.5" title="Alamacenamiento">
              <h1 className='my-2'>- Discos Duros</h1>
              <h1 className='my-2'>- Discos Sólidos SSD</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.6" aria-label="Accordion 10.6" title="Gabinetes">
              <h1 className='mb-2'>- Gabinetes</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.7" aria-label="Accordion 10.7" title="Fuentes">
              <h1 className='mb-2'>- Fuentes de alimentación</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.8" aria-label="Accordion 10.8" title="Monitores">
              <h1 className='mb-2'>- Monitores y pantallas</h1>
            </AccordionItem>
          </Accordion>

          <Accordion>
            <AccordionItem key="10.9" aria-label="Accordion 10.9" title="Periféricos">
              <h1 className='mb-2'>- Auriculares</h1>
              <h1 className='my-2'>- Teclados</h1>
              <h1 className='my-2'>- Mouses</h1>
              <h1 className='my-2'>- Mouse Pads</h1>
            </AccordionItem>
          </Accordion>

        </AccordionItem>

      </Accordion>

    </div>
  );
}

export default ProductCategory;

