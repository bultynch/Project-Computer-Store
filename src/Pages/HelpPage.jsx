import React from 'react';
import NavBar from '../Components/NavBar';
import SecondNavBar from '../Components/SecondNavBar'
import Footer from '../Components/Footer';
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaLocationDot, FaTruck } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Contact from '../Components/Contact'

function HelpPage() {
  return (
    <div className='bg-violet-50 dark:bg-neutral-700'>
      <NavBar />

      <SecondNavBar />

      <div className='my-10 mx-2 md:mx-10 lg:mx-20 xl:mx-80 2xl:max-w-[976px] 2xl:mx-auto flex flex-col justify-center dark:text-white'>

        <div className='flex flex-col justify-center'>

          <h1 className='mb-2 text-center sm:text-start text-3xl font-bold'>Centro de ayuda</h1>
          <p className='text-center sm:text-start text-md font-normal'>Encontrá la información que necesitás para comprar online, métodos de pago, garantías, envíos, seguimiento de compras y más.</p>

        </div>

        <div className='my-10 flex flex-col justify-center'>

          <h2 className='text-lg font-medium text-center sm:text-start'>Contactate con nosotros mediante:</h2>

          <div className='my-4 flex flex-col 2xl:w-[976px]'>

            <div className='mb-2 sm:my-2 flex items-center justify-between flex-1 min-w-[250px]'>

              <div className='relative p-10 w-full flex items-center rounded-lg shadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-800'>

                <div className="absolute w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full z-10" />
                <IoMdMail className="absolute m-5 w-10 h-10 text-blue z-20 text-violet-900" />

                <div className='flex flex-col items-start justify-center w-full h-full pl-24'>

                  <h1 className='text-start text-lg font-semibold'>Correo electrónico:</h1>
                  <h2 className='text-start'>consultas@pcstore.com</h2>

                </div>

              </div>

            </div>

            <div className='mb-2 sm:my-2 flex items-center justify-between flex-1 min-w-[250px]'>

              <div className='relative p-10 w-full flex items-center rounded-lg shadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-800'>

                <div className="absolute w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full z-10" />
                <FaWhatsapp className="absolute m-5 w-10 h-10 text-blue z-20 text-violet-900" />

                <div className='flex flex-col items-start justify-center w-full h-full pl-24'>

                  <h1 className='text-start text-lg font-semibold'>WhatsApp:</h1>
                  <h2 className='text-start'>+54 9 2050-9358</h2>

                </div>

              </div>

            </div>

            <div className='mb-2 sm:my-2 flex items-center justify-between flex-1 min-w-[250px]'>

              <div className='relative p-10 w-full flex items-center rounded-lg shadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-800'>

                <div className="absolute w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full z-10" />
                <FiPhone className="absolute m-5 w-10 h-10 text-blue z-20 text-violet-900" />

                <div className='flex flex-col items-start justify-center w-full h-full pl-24'>

                  <h1 className='text-start text-lg font-semibold'>Teléfono:</h1>
                  <h2 className='text-start'>0810-444-4530</h2>

                </div>

              </div>

            </div>

          </div>

          <h2 className='my-2 text-lg font-medium text-center sm:text-start'>Recibí, retirá o seguí tu compra:</h2>

          <div className='mt-4 flex flex-wrap flex-col sm:justify-between'>

            <div className='mb-2 sm:my-2 flex items-center justify-between flex-1 min-w-[250px]'>

              <div className='relative p-10 w-full flex items-center rounded-lg shadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-800'>

                <div className="absolute w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full z-10" />
                <FaLocationDot className="absolute m-5 w-10 h-10 text-blue z-20 text-violet-900" />

                <div className='flex flex-col items-start justify-center w-full h-full pl-24'>

                  <h1 className='text-start text-lg font-semibold'>Recibí o retirá tu compra.</h1>

                </div>

              </div>

            </div>

            <div className='mb-2 sm:my-2 flex items-center justify-between flex-1 min-w-[250px]'>

              <div className='relative p-10 w-full flex items-center rounded-lg sshadow-sm border bg-white dark:bg-neutral-800 dark:border-neutral-800'>

                <div className="absolute w-20 h-20 flex items-center justify-center bg-gray-200 rounded-full z-10" />
                <FaTruck className="absolute m-5 w-10 h-10 text-blue z-20 text-violet-900" />

                <div className='flex flex-col items-start justify-center w-full h-full pl-24'>

                  <h1 className='text-start text-lg font-semibold'>Seguimiento de envios.</h1>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className='my-10 flex flex-col justify-start'>

          <h2 className='mb-5 py-5 pr-5 pl-2 text-xl font-semibold text-center sm:text-start bg-gray-200 dark:bg-neutral-800'>Horarios de atención:</h2>

          <div className='flex flex-wrap justify-center items-center sm:justify-between'>

            <div className='flex flex-col justify-center min-w-[300px] m-2 text-center sm:text-start'>

              <h1 className='mb-2 text-lg font-semibold'>TEL. / WhatsApp / Mail</h1>
              <h1 className='text-md'>Lunes a viernes de 8 a 18hs</h1>

            </div>

            <div className='flex flex-col justify-center min-w-[300px] m-2 text-center sm:text-start'>

              <h1 className='mb-2 text-lg font-semibold'>Pickup Point Buenos Aires</h1>
              <h1 className='text-md'>Lunes a Viernes de 10 a 17h</h1>

            </div>

            <div className='flex flex-col justify-center min-w-[300px] m-2 text-center sm:text-start'>

              <h1 className='mb-2 text-lg font-semibold'>Pickup Point Córdoba</h1>
              <h1 className='text-md'>Lunes a Viernes de 10 a 18h.</h1>

            </div>

          </div>

        </div>

        <div className='my-10 flex flex-col justify-center'>

          <h2 className='mb-5 py-5 pr-5 pl-2 text-xl font-semibold text-start bg-gray-200 dark:bg-neutral-800'>Pregunas frecuentes</h2>

          <div>

            <Accordion className='px-0'>

              <AccordionItem key="1" aria-label="Accordion 1" title="Presupuestos-Cómo comprar-Formas de Pago">

                <Accordion>
                  <AccordionItem key="1.1" aria-label="sub-accordion-1" title="- ¿Cómo hago para comprar?" className='font-medium'>
                    <h1>Podés comprar únicamente desde nuestra web www.pcstore.com.ar. Si no sabés como hacerlo te invitamos a ver este tutorial:</h1>
                  </AccordionItem>
                </Accordion>

                <Accordion>
                  <AccordionItem key="1.2" aria-label="sub-accordion-1.2" title="- ¿Cuáles son las formas de pago disponible?" className='font-medium'>
                    <h1 className='font-medium'>Plan cuota simple:</h1>
                    <p className='mb-2'>Solo válido para tarjetas de crédito emitidas por entidades bancarias.</p>
                    <h1 className='font-medium'>Mercado Pago:</h1>
                    <p className='mb-2'>Aboná en cuotas a través de Mercado Pago. Para calcular cuotas con diferentes tarjetas:</p>
                    <h1 className='font-medium'>Transferencia Bancaria:</h1>
                    <p className='mb-2'>Una vez que confirmes tu compra te enviaremos los datos necesarios para realizar la transferencia. Deberás enviar el comprobante de la misma a nuestro Whatsapp. Esta forma de pago puede tener una demora de hasta 48 hs hábiles para verse acreditada e imputada a su pedido.</p>
                  </AccordionItem>
                </Accordion>

                <Accordion>
                  <AccordionItem key="1.3" aria-label="sub-accordion-1.3" title="- ¿Debo enviar el comprobante de pago de mi compra?" className='font-medium'>
                    <h1>Sí, en el caso de que hayas abonado con una solicitud de dinero de Mercado Pago o transferencia bancaria.
                    Debés enviar el comprobante a nuestro Whatsapp  con tu número de pedido. Recordá que tenés 48hs para enviarlo, independientemente de los plazos que informe Mercado pago.
                    Los pedidos que no se registren abonados dentro de este plazo se eliminan.</h1>
                  </AccordionItem>
                </Accordion>

                <Accordion>
                  <AccordionItem key="1.4" aria-label="sub-accordion-1.4" title="- Solicitud de presupuesto para PC ARMADA" className='font-medium'>
                    <h1>Si buscas armar una PC, podemos ayudarte creando un presupuesto ajustado a tu necesidad y gustos. Te recordamos que el precio puede variar sin previo aviso.
                    Si ya sabes con qué productos querés armar tu PC, no es necesario solicitar un presupuesto. Podés chequear precios y stock en nuestra web, recordá que todos los productos que tenemos disponibles se encuentran allí.
                    Si no encontrás lo que buscabas, consultanos para ofrecerte otras opciones disponibles.
                    Para solicitar una PC armada deberás utilizar nuestro configurador de PC y seleccionar los componentes deseados</h1>
                  </AccordionItem>
                </Accordion>

              </AccordionItem>

              <AccordionItem key="2" aria-label="Accordion 2" title="Envíos">

                <Accordion>
                  <AccordionItem key="2.1" aria-label="sub-accordion-2" title="- ¿Cuál es el costo de envío?" className='font-medium'>
                    <h1>Para conocer el costo del envío deberás hacer click en "RECIBÍ TU PRODUCTO" y luego ingresar tu código postal. Podrás observar el costo aproximado del envío a tu domicilio o podrás conocer los puntos de retiro más cercanos.</h1>
                  </AccordionItem>
                </Accordion> 

                <Accordion>
                  <AccordionItem key="2.2" aria-label="sub-accordion-2.2" title="- ¿Puedo elegir en qué horario recibir mi producto?" className='font-medium'>
                    <h1>Los pedidos se despachan vía Andreani una vez acreditado el pago. La demora posterior dependerá del servicio de correo. Por lo regular, el intervalo es de 3 a 10 dias hábiles.</h1>
                  </AccordionItem>
                </Accordion>

                <Accordion>
                  <AccordionItem key="2.3" aria-label="sub-accordion-2.3" title="- ¿Puedo hacer varios pedidos por separado y recibirlos juntos en el mismo envío?" className='font-medium'>
                    <h1>Lamentablemente no, ya que, cada pedido se procesa por separado y en el orden en el que ingresan. Por esto no podemos asegurarte de que los pedidos puedan llegar juntos o el mismo día.</h1>
                  </AccordionItem>
                </Accordion>

                <Accordion>
                  <AccordionItem key="2.4" aria-label="sub-accordion-2.4" title="- ¿Puedo retirar mi compra personalmente?" className='font-medium'>
                    <h1>Si! Podrás retirar personalmente en nuestros pickups points: Buenos Aires: Lunes a Viernes de 10 a 17h. Córdoba: Lunes a Viernes de 10 a 18h. Más info en: https://www.pcstore.com/info</h1>
                  </AccordionItem>
                </Accordion>

              </AccordionItem>

              <AccordionItem key="3" aria-label="Accordion 3" title="Garantías-Cambios-Devoluciones">

                <Accordion>
                  <AccordionItem key="3.1" aria-label="sub-accordion-3" title="- Garantías, cambios y devoluciones" className='font-medium'>
                  </AccordionItem>
                </Accordion>

                <Accordion>
                  <AccordionItem key="3.2" aria-label="sub-accordion-3.2" title="- Si devuelvo o rechazo un producto ¿Cuándo realizan la devolución de lo abonado?" className='font-medium'>
                    <h1>El dinero que abonaste por tu compra será reintegrado una vez que el producto haya vuelto a Venex y se compruebe que esté en las mismas condiciones en las que fue enviado, sin excepciones.</h1>
                  </AccordionItem>
                </Accordion>

                <Accordion>
                  <AccordionItem key="3.3" aria-label="sub-accordion-3.3" title="- ¿Cómo gestionar una garantía, cambio o devolución?" className='font-medium'>
                  </AccordionItem>
                </Accordion>

              </AccordionItem>

              <AccordionItem key="4" aria-label="Accordion 4" title="Varios">

                <Accordion>
                  <AccordionItem key="4.1" aria-label="sub-accordion-4" title="- Intento comprar pero la página presenta errores" className='font-medium'>
                    <h1>Primero te recomendamos abrir la página desde un navegador diferente. En segunda instancia, verificá con tu tarjeta de crédito la autorización de la operación o que tengas fondos disponibles para realizar la compra.
                    Recordá que también podés solicitar tu pedido a nuestro Whatsapp  o por teléfono al 0810-555-8892.</h1>
                  </AccordionItem>
                </Accordion>

              </AccordionItem>

              <AccordionItem key="5" aria-label="Accordion 5" title="Plazos">

                <Accordion>
                  <AccordionItem key="5.1" aria-label="sub-accordion-5" title="- ¿Cómo hago para comprar?" className='font-medium'>
                  </AccordionItem>
                </Accordion>

              </AccordionItem>

            </Accordion>

          </div>

        </div>

      </div>

      <div className='mx-2 md:mx-10 lg:mx-20 xl:mx-80 2xl:max-w-[976px] 2xl:mx-auto bg-violet-50 dark:bg-neutral-800'>

        <h2 className='mt-4 text-2xl font-semibold text-start dark:text-white'>¿No encontraste la respuesta a tu consulta?</h2>
        <div className="divider"></div>

        <div className='my-10 '>
          <Contact />
        </div>
        

      </div>

      <Footer />

    </div>
  );
}

export default HelpPage;
