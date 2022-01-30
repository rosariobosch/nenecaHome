import { useState } from "react";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './faqs.scss';
const Faqs = () => {

    const [open, setOpen] = useState(false)

    const handleClick = (e) => {
        // setOpen(!open)
        // console.log(e.target)
        // if(e.target.parentElement.ariaExpanded === true) {
        //     e.target.style.transform = 'rotate(225deg)'
        // }
    }

    return(
        <section className="faqs">
            <Accordion allowMultipleExpanded allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading onClick={handleClick}>
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
                    <AccordionItemHeading onClick={handleClick}>
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
                    <AccordionItemHeading onClick={handleClick}>
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
                    <AccordionItemHeading onClick={handleClick}>
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
                    <AccordionItemHeading onClick={handleClick}>
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