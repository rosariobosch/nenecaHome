import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './faqs.scss';
const Faqs = () => {

    const [open, setOpen] = useState(false)

    return(
        <section className="faqs">
            <Accordion allowMultipleExpanded allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading >
                            <AccordionItemButton>
                                <span>¿Puedo cambiar mis productos?</span>
                                <div className={`arrow-down ${open ? 'open' : ''}`}></div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading >
                            <AccordionItemButton>
                                <span>¿Qué pasa si mi producto tiene una falla?</span>
                                <div className={`arrow-down ${open ? 'open' : ''}`}></div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading >
                            <AccordionItemButton>
                                <span>¿Cómo es el método de envíos?</span>
                                <div className={`arrow-down ${open ? 'open' : ''}`}></div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading >
                            <AccordionItemButton>
                                <span>¿Cuánto tarda en llegar mi pedido?</span>
                                <div className={`arrow-down ${open ? 'open' : ''}`}></div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading >
                            <AccordionItemButton>
                                <span>¿Cuáles son los métodos de pago disponibles?</span>
                                <div className={`arrow-down ${open ? 'open' : ''}`}></div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </section>
    )
}

export default Faqs