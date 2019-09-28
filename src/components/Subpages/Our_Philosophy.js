import React from 'react';
import Reja_header from "../Reja/Reja_header";
import Reja_S8_Contact from "../Reja/Reja_S8_Contact";

class Our_Philosophy extends React.Component{
    render() {
        return (
            <div class="our_philosophy_bg">

                <div className='container-fluid'>
                    <Reja_header/>

                    <div className=" row philosophy_header container_1200 m-auto">

                        <div className="col-12">

                            <div class="col-12 text-center mt-4">
                                <img src='/images/our_philosophy/school.svg' className='subsection_main_icon' />
                            </div>
                            <div class="philosophy_header_wrapper">

                                <h2 class="text-center mb-5"> Filozofia </h2>


                                <p> <strong> Wybór przedszkola to jedna z najważniejszych decyzji w życiu rodzica. </strong> </p>
                                <p>Dlatego Przedszkole Krakowiaczek, wychodząc naprzeciw wyzwaniom przyszłej edukacji szkolnej,
                                    gwarantuje kompleksowe przygotowanie dzieci na 3 plaszczyznach:​</p>


                                <ul>

                                    <div class="philosophy_icon_wrapper text-left">
                                        <img src='/images/our_philosophy/socializing.svg' class="philosophy_icon" /><span><strong> Socjalnej </strong></span>
                                        <p> Budowanie wiezi społecznych i towarzyskich z innymi dziecmi </p>
                                    </div>

                                    <div className="philosophy_icon_wrapper">
                                        <img src='/images/our_philosophy/emotions.svg' class="philosophy_icon" /> <span><strong> Emocjonalnej </strong> </span>
                                        <p> Rozwijanie swiadomosci uczuciowej i podstaw empatii w interakcjach z
                                            rowiesnikami  </p>
                                    </div>

                                    <div className="philosophy_icon_wrapper">
                                        <img src='/images/our_philosophy/intellect.svg' class="philosophy_icon" /> <span> <strong>Intelektualnej </strong> </span>
                                        <p> Nauka poznawania i przyswajania nowych informacji, niezbędnych w dalszym
                                            toku nauczania </p>
                                    </div>
                                </ul>

                                <p> Powyzsze podejście gwarantuje, ze Panstwa dziecko będzie w pełni gotowe na wyzwania, które
                                    czekają na nie w kolejnych etapach edukacji.​ </p>
                            </div>
                        </div>


                        <div class="p-5 d-block d-lg-none">
                            <img src='/images/our_philosophy/Philosophy_crowd_2.jpg' className="img-fluid" />
                        </div>

                        <div class="p-1 d-none d-lg-flex">
                            <img src='/images/our_philosophy/Philosophy_crowd.jpg' className="img-fluid"/>

                        </div>


                    </div>

                    <div className=" row philosophy_body container_1200 m-auto">

                        <div className="col-12">

                            <div class="text-center">
                                <img src='/images/our_philosophy/philosophy.svg' class="philosophy_icon" />
                                <h1> Nasza <strong> Filozofia </strong></h1>
                            </div>

                            <p> Glownym celem działalności Przedszkola Krakowiaczek jest profesjonalne, kompleksowe
                                przygotowanie dzieci do edukacji szkolnej, przy wykorzystaniu przyjaznych dzieciom metod
                                dydaktycznych, uwzgledniajacych elementy zabawy.</p>


                            <p>    Jednoczesnie, misja przedszkola jest kształtowanie u dzieci postaw patriotycznych, budowanie
                                świadomości przynależności do kraju a przede wszystkim miasta w którym mieszkają poprzez
                                aktywne uczestnictwo w zyciu miasta i odkrywanie jego walorow.
                            </p>

                            <p>
                                Nazwa przedszkola „KRAKOWIACZEK” jest punktem wyjścia do programu poznania zabytków miasta,
                                historii, podań i legend. To również poznawanie Krakowa w nowoczesnej formie, tworzenie
                                programów autorskich, udział w zewnętrznych programach edukacyjnych.</p>


                            <div className="text-center">
                                <img src='/images/our_philosophy/shield.svg' className="philosophy_icon"/>
                                <h1> Główne  <strong> Wartości </strong> </h1>
                            </div>
                            <ul>

                                <li> Nauka może i powinna być zabawą, także w szkole.</li>
                                <li> Dzieci powinny czuc się bezpiecznie i komfortowo na terenie Przedszkola, niezależnie od
                                    czynnikow zewnętrznych. To bezpieczna przystan dla każdego dziecka.</li>
                                <li> Szanujemy i wspieramy indywidualne charaktery i osobowości wszystkich naszych
                                    podopiecznych.</li>
                                <li>  Inteligencja emocjonalna (empatia, swiadomosc potrzeb innych i wzajemny szacunek) jest
                                    potrzebna każdemu przyszłemu uczniowi w toku prawidłowego rozwoju wiezi społecznych.</li>
                                <li>  Otwarta wspolpraca pomiędzy rodzicami i kadra pedagogiczna jest gwarantem prawidłowego
                                    rozwoju dziecka. Dlatego doceniamy wszelkie inicjatywy rodzicielskie.
                                </li>

                            </ul>



                        </div>

                    </div>
                    <Reja_S8_Contact/>
                </div>
            </div>



        );
    }
}

export default Our_Philosophy;