import React from 'react';
import Reja_S8_Contact from "../Reja/Reja_S8_Contact";
import Subpage_header from "./Subpage_header";

class Extended_Offer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            KangarooIsVisible: false,
            DancingIsVisible: false,
            ChemistryIsVisible: false,
            BreathingIsVisible: false,
            WorkingHoursIsVisible: false,
            ActivitiesIsVisible: false,
            KrakowIsVisible: false,
            showMore: false,
            showTooltip: false
        }
    }



    showMore =()=> {
        if (this.state.showMore === false ){
            this.setState ({
                showMore: true
            })
        } else {
            this.setState ({
                showMore: false
            })
        }
    };



    tooltipHandler = () => {
        if (this.state.showTooltip === false ) {
            this.setState ({
                showTooltip: true
            })
        } else {
            this.setState ({
                showTooltip: false
            })
        }
    };


    render() {
        return (
            <div class="extended_bg_full">


                <Subpage_header class='mt-4 mb-4'/>



                <div class="col-12 mt-3 container_1200">

                    <div className="col-12 text-center mt-5">
                        <img src='/images/extended_offer/search.svg' className='subsection_main_icon'/>
                    </div>
                    <div className="philosophy_header_wrapper">

                        <h2 className="text-center mb-3"> Oferta </h2>
                        <p class="text-center"> <strong> Poniżej przedstawiamy najważniejsze informacje na temat Przedszkola </strong> </p>
                    </div>

                        {/*Icons*/}
                    <div class="flex row">



                    <div class="col-12 col-sm-6 justify-content-center text-center mt-2 mb-5">
                        <div>
                        <img src='/images/extended_offer/timer_2.svg' class="philosophy_icon"/>
                        </div>

                        <div>
                        <p> Pracujemy w godzinach </p>
                        <p class="offer_p"> 6.30 - 17.30</p>
                        </div>

                        <div className="d-block d-sm-none">
                            <button className="btn mt-0" onClick={() => !this.state.WorkingHoursIsVisible ? this.setState({ WorkingHoursIsVisible: true}) : this.setState({ WorkingHoursIsVisible:false})}> SZCZEGÓŁY </button>


                            {

                                this.state.WorkingHoursIsVisible &&

                                <div class="p-2 mt-0">
                                    <p class="text-left">
                                        Przedszkole Krakowiaczek jest  <strong> czynne w godzinach 6.30 - 17.30 </strong>, przy czym pierwszych 5h (od 8.00 - 13.00)
                                        jest bezpłatnych.
                                    </p>

                                    <p className="text-left">Zgodnie z <strong> Uchwałą Rady Miasta Krakowa </strong> nr XCVII/2509/18 z dnia 14 marca 2018 r.
                                        koszt pobytu dziecka w pozostałym zakresie wynosi <strong> 1zł za każdą kolejną rozpoczętą godzinę. </strong>
                                    </p>

                                </div>

                            }
                        </div>

                        <div className="p-2 mt-0 d-none d-sm-block">
                                <p className="text-left">
                                    Przedszkole Krakowiaczek jest <strong> czynne w godzinach 6.30 - 17.30 </strong>,
                                    przy czym pierwszych 5h (od 8.00 - 13.00)
                                    jest bezpłatnych.
                                </p>

                                <p className="text-left">Zgodnie z <strong> Uchwałą Rady Miasta Krakowa </strong> nr
                                    XCVII/2509/18 z dnia 14 marca 2018 r.
                                    koszt pobytu dziecka w pozostałym zakresie wynosi <strong> 1zł za każdą kolejną
                                        rozpoczętą godzinę. </strong>
                                </p>

                        </div>

                    </div>


                        <div className="col-12 col-sm-6 justify-content-center text-center mt-2 mb-5">
                            <div>
                                <img src='/images/extended_offer/catering_2.svg' className="philosophy_icon"/>
                            </div>

                            <div>
                                <p> Dzienny koszt <br /> wyżywienia wynosi</p>
                                <p className="offer_p"> 11 zł</p>
                            </div>

                            <div className="d-block d-sm-none">
                                <button className="btn"
                                        onClick={() => !this.state.CateringIsVisible ? this.setState({CateringIsVisible: true}) : this.setState({CateringIsVisible: false})}> SZCZEGÓŁY
                                </button>


                                {

                                    this.state.CateringIsVisible &&

                                    <div className="p-2">
                                        <p class="text-left"> Wyżywienie w Przedszkolu zapewnia <strong> firma cateringowa F.H.U.
                                            Kario. </strong>
                                        Jadłospis przygotowywany jest przez dietetyka z uwzględnieniem bilansu kalorycznego oraz wartości odżywczych.
                                        </p>
                                            <p className="text-left">
                                            Koszt pierwszego oraz drugiego śniadania wynosi łącznie 2zł, obiadu 7,50zł, a cena podwieczorków to 1,50zł.
                                        </p>

                                    </div>

                                }
                            </div>

                            <div className="p-2 d-none d-sm-block">
                                <p className="text-left"> Wyżywienie w Przedszkolu zapewnia <strong> firma cateringowa
                                    F.H.U.
                                    Kario. </strong>
                                    Jadłospis przygotowywany jest przez dietetyka z uwzględnieniem bilansu kalorycznego
                                    oraz wartości odżywczych.
                                </p>
                                <p className="text-left">
                                    Koszt pierwszego oraz drugiego śniadania wynosi łącznie 2zł, obiadu 7,50zł, a cena
                                    podwieczorków to 1,50zł.
                                </p>

                            </div>

                        </div>

                    <div className="col-12 col-sm-6 justify-content-center text-center mt-2 mb-5">
                        <div>
                            <img src='/images/extended_offer/activities_2.svg' className="philosophy_icon"/>
                        </div>

                        <div>
                            <p> Prowadzimy zajęcia <br /> z języka angielskiego</p>
                            <p className="offer_p"> bezpłatnie</p>
                        </div>

                        <div className="d-block d-sm-none">
                            <button className="btn"
                                    onClick={() => !this.state.ActivitiesIsVisible ? this.setState({ActivitiesIsVisible: true}) : this.setState({ActivitiesIsVisible: false})}> SZCZEGÓŁY
                            </button>


                            {

                                this.state.ActivitiesIsVisible &&

                                <div className="p-2">
                                    <p className="text-left">
                                        Przedszkole Krakowiaczek oferuje bogaty zakres <strong> bezpłatnych zajęć podstawowych </strong> obejmujących zajęcia rytmiczne,
                                            ogólnorozwojowe, dydaktyczno-wychowawcze, a także lekcje języka angielskiego.
                                    </p>
                                        <p className="text-left">
                                            Zapraszamy również do skorzystania z <strong> oferty zajęć dodatkowych </strong>, przedstawionej w sekcji poniżej.

                                    </p>

                                </div>

                            }
                        </div>

                        <div className="p-2 d-none d-sm-block">
                            <p className="text-left">
                                Przedszkole Krakowiaczek oferuje bogaty zakres <strong> bezpłatnych zajęć podstawowych </strong> obejmujących zajęcia rytmiczne,
                                ogólnorozwojowe, dydaktyczno-wychowawcze, a także lekcje języka angielskiego.
                            </p>
                            <p className="text-left">
                                Zapraszamy również do skorzystania z <strong> oferty zajęć dodatkowych </strong>, przedstawionej w sekcji poniżej.

                            </p>

                        </div>
                    </div>

                    <div className=" col-12 col-sm-6 justify-content-center text-center mt-2 mb-5">
                        <div>
                            <img src='/images/extended_offer/program.svg' className="philosophy_icon"/>
                        </div>

                        <div>
                            <p> Przedszkole realizuje program</p>
                            <p className="offer_p"> "Kraków Moim Miastem"</p>
                        </div>

                        <div className="d-block d-sm-none">
                            <button className="btn"
                                    onClick={() => !this.state.KrakowIsVisible ? this.setState({KrakowIsVisible: true}) : this.setState({KrakowIsVisible: false})}> SZCZEGÓŁY
                            </button>


                            {

                                this.state.KrakowIsVisible &&

                                <div class="p-2">
                                    <p className="text-left">
                                        Ponadto, Przedszkole realizuje <strong> program edukacyjny "Kraków Moim Miastem" </strong>, którego celem
                                        jest zapoznanie dzieci z bogactwem kulturowym miasta.
                                    </p>
                                    <p className="text-left">
                                        Jest on realizowany poprzez liczne wycieczki
                                        po Krakowie, uczestnictwo w zewnętrznych konkursach dotyczących historii Krakowa, organizowaniu
                                        tematycznych wystaw prac dzieci w placówkach a także udział w innych programach edukacyjnych.
                                    </p>

                                </div>

                            }
                        </div>

                        <div className="p-2 d-none d-sm-block">
                            <p className="text-left">
                                Ponadto, Przedszkole realizuje <strong> program edukacyjny "Kraków Moim
                                Miastem" </strong>, którego celem
                                jest zapoznanie dzieci z bogactwem kulturowym miasta.
                            </p>
                            <p className="text-left">
                                Jest on realizowany poprzez liczne wycieczki
                                po Krakowie, uczestnictwo w zewnętrznych konkursach dotyczących historii Krakowa,
                                organizowaniu
                                tematycznych wystaw prac dzieci w placówkach a także udział w innych programach
                                edukacyjnych.
                            </p>

                        </div>
                    </div>
                    </div>

                </div>


                 {/* Additional Activities*/}

                <div class="col-12 container_1200 mb-5">
                <section>
                <div className="row">
                    <div className="col-12 text-center">
                        <img src='/images/extended_offer/pinwheel.svg' className='philosophy_icon'/>

                        <div class="d-block d-sm-flex">
                        <h2 class="special_additional_activities"> Zajęcia Dodatkowe </h2>
                        <button className="tooltip_wrapper" onMouseOver={this.tooltipHandler} onMouseOut={this.tooltipHandler}> ? </button>
                        </div>
                        {
                            this.state.showTooltip &&

                            <h6 class="tooltip_inner">  Zajęcia dodatkowe to pozaprzedszkolne aktywności dla dzieci, oferowane
                            przez profesjonalne podmioty w ramach umów zawieranych indywidualnie z rodzicami </h6>


                        }


                    </div>




                    <div className="col-12 col-sm-6 col-xl-3 text-center img_kangaroo">
                       <img src='/images/extended_offer/kangaroo.svg'  className="philosophy_icon mb-2"/>
                        <h2><strong> Drużyna Kangura </strong></h2>

                        <p>Ruchowe zajęcia fizyczno-ruchowe z piłkami</p>

                        <div className="d-block d-md-none">
                        <button class="btn" onClick={() => !this.state.KangarooIsVisible ? this.setState({ KangarooIsVisible: true}) : this.setState({ KangarooIsVisible:false})}> WIĘCEJ </button>
                    {

                        this.state.KangarooIsVisible &&

                            <div>
                                <ul class="showMoreWrapper text-left">
                                    <li> <strong> Koszt za zajęcia:</strong> 8zł </li>
                                    <li> <strong> Liczba zajęć w semestrze:</strong> 14 </li>
                                    <li> <strong> Podmiot prowadzący:</strong> Przedszkole i piłka S.C.</li>
                                </ul>

                            </div>

                    }
                        </div>
                        <div className="d-none d-md-block">
                            <ul className="showMoreWrapper text-left">
                                <li><strong> Koszt za zajęcia:</strong> 8zł</li>
                                <li><strong> Liczba zajęć w semestrze:</strong> 14</li>
                                <li><strong> Podmiot prowadzący:</strong> Przedszkole i piłka S.C.</li>
                            </ul>

                        </div>
                    </div>




                    <div className="col-12 col-sm-6 col-xl-3 text-center img_dancing">
                        <img src='/images/extended_offer/dancing.svg' className="philosophy_icon mb-2"/>
                        <h2><strong> Zajęcia Taneczne </strong></h2>
                        <p> Nauka tańca, w tym podstaw tańca towarzyskiego w parach</p>

                        <div className="d-block d-md-none">
                        <button class="btn" onClick={() => !this.state.DancingIsVisible ? this.setState({ DancingIsVisible: true}) : this.setState({ DancingIsVisible:false})}> WIĘCEJ </button>

                        {

                            this.state.DancingIsVisible &&

                            <div>
                                <ul class="showMoreWrapper text-left">
                                    <li> <strong> Koszt za zajęcia:</strong> 6zł </li>
                                    <li> <strong> Liczba zajęć w semestrze:</strong> 14 </li>
                                    <li> <strong> Podmiot prowadzący:</strong> Małopolska Akademia Tańca i Rekreacji</li>

                                </ul>
                            </div>
                        }
                        </div>

                        <div class="d-none d-md-block">
                            <ul className="showMoreWrapper text-left">
                                <li><strong> Koszt za zajęcia:</strong> 6zł</li>
                                <li><strong> Liczba zajęć w semestrze:</strong> 14</li>
                                <li><strong> Podmiot prowadzący:</strong> Małopolska Akademia Tańca i Rekreacji</li>

                            </ul>
                        </div>

                    </div>



                    <div className="col-12 col-sm-6 col-xl-3 text-center img_chemistry">
                        <img src='/images/extended_offer/chemistry.svg' className="philosophy_icon mb-2"/>
                        <h2><strong> Eksperymenty Naukowe </strong></h2>
                        <p> Nauka podstaw fizyki i chemii w formie zabawy dla dzieci</p>

                        <div className="d-block d-md-none">
                        <button class="btn" onClick={() => !this.state.ChemistryIsVisible ? this.setState({ ChemistryIsVisible: true}) : this.setState({ ChemistryIsVisible:false})}> WIĘCEJ </button>
                        {

                            this.state.ChemistryIsVisible &&

                            <div>
                                <ul class="showMoreWrapper text-left">
                                    <li> <strong> Koszt za zajęcia:</strong> 10zł </li>
                                    <li> <strong> Liczba zajęć w semestrze:</strong> 14 </li>
                                    <li> <strong> Podmiot prowadzący:</strong> RoboTim </li>
                                </ul>
                            </div>

                        }
                        </div>

                        <div class="d-none d-md-block">
                            <ul className="showMoreWrapper text-left">
                                <li><strong> Koszt za zajęcia:</strong> 10zł</li>
                                <li><strong> Liczba zajęć w semestrze:</strong> 14</li>
                                <li><strong> Podmiot prowadzący:</strong> RoboTim</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 col-xl-3 text-center img_breathing">
                        <img src='/images/extended_offer/breathing.svg' className="philosophy_icon mb-2"/>
                        <h2><strong> Krakowska Jaskinia Solna </strong></h2>
                        <p> Profilaktyka układu oddechowego (jesień/zima)</p>

                        <div class="d-block d-md-none">
                        <button class="btn" onClick={() => !this.state.BreathingIsVisible ? this.setState({ BreathingIsVisible: true}) : this.setState({ BreathingIsVisible:false})}> WIĘCEJ </button>
                        {

                            this.state.BreathingIsVisible &&

                            <div>
                                <ul class="showMoreWrapper text-left">
                                    <li> <strong> Koszt za zajęcia:</strong> 11zł </li>
                                    <li> <strong> Liczba zajęć w semestrze:</strong> 20 </li>
                                    <li> <strong> Podmiot prowadzący:</strong>  Krakowska Jaskinia Solna </li>
                                </ul>

                            </div>

                        }
                        </div>

                        <div class="d-none d-md-block">
                            <ul className="showMoreWrapper text-left">
                                <li><strong> Koszt za zajęcia:</strong> 11zł</li>
                                <li><strong> Liczba zajęć w semestrze:</strong> 20</li>
                                <li><strong> Podmiot prowadzący:</strong> Krakowska Jaskinia Solna</li>
                            </ul>

                        </div>
                    </div>



                </div>
                </section>
                </div>

                <Reja_S8_Contact/>

            </div>
            );
         }
        }

export default Extended_Offer;