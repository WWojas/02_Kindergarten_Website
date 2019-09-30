import React from 'react';
import Reja_S8_Contact from "../Reja/Reja_S8_Contact";
import Subpage_header from "./Subpage_header";


class About_Us extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            teachers: [
                {
                    name: 'DOMINIKA',
                    lastname: 'SERWA',
                    position: 'Nauczycielka',
                    img: 'Dominika_Serwa1',
                    desc: 'Magister, absolwentka Pedagogiki Wczesnoszkolnej i Przedszkolnej oraz Edukacji i rehabilitacji dzieci z niepełnosprawnością (oligofrenopedagogikę).\n' +
                        '                                    W pracy z dziećmi dba, aby każdy dzień dziecka w przedszkolu przebiegał w ciepłej i bezpiecznej atmosferze a zdobywanie wiedzy i nowych doświadczeń  odbywało się w formie wesołej zabawy.\n' +
                        '                                    Prywatnie interesuje się literaturą psychologiczną, podróżami oraz fotografią. \n' +
                        '  Jest osobą empatyczną, wesołą, nawiązującą z dziećmi bardzo dobry kontakt. Powierzone jej dzieci traktuje z niezwykła troską i zaangażowaniem'

                },

                { name: 'MONIKA',
                    lastname: 'GARULA',
                    position: 'Nauczycielka',
                    img: 'Monika_Garula1',
                    desc: 'Ukończyła studia licencjackie - Wychowanie Przedszkolne i Edukacja wczesnoszkolna oraz studia magisterskie Pedagogika szkolna z terapią pedagogiczną.\n' +
                        '                                    Ponadto, uzyskała I stopień w państwowej Szkole Muzycznej im.Mieczysława Karłowicza w Krakowie z gry na wiolonczeli.\n' +
                        '                                    W swojej pracy z dziećmi stosuje różnorodne metody i techniki pedagogiczne. Jej zajęcia pełne są dźwięków, kolorów, ruchu, uśmiechu. Wykorzystuje ciekawe pomoce dydaktyczne, pozwalające rozwijać dziecięcą wyobraźnię poprzez bazowanie na konkretach i doświadczanie wielozmysłowe.\n' +
                        '                                    Emanuje spokojem, ciepłem i pozytywnym nastawieniem do świata i ludzi. Interesuje się literaturą, tańcem towarzyskim, muzyką klasyczną i filmową.'
                },

                { name: 'ALICJA',
                    lastname: 'KWAŚNY',
                    position: 'Nauczycielka',
                    img: 'Alicja_Kwasny1',
                    desc: 'Ukończyła studia magisterskie z pedagogiki przedszkolnej i wczesnoszkolnej na Uniwersytecie Pedagogicznym w Krakowie.W swojej pracy z dziećmi stawia na ruch, rytm z muzyką oraz sensorykę i aktywność plastyczną. Wie, że dziecko poznaje świat poprzez zabawę i doświadczenie, toteż nieustannie wzbogaca swój warsztat pracy aby dostarczyć odpowiednich bodźców. Pracuje metodą pozytywnego wzmocnienia, wobec dzieci jest zawsze lojalna, konsekwentna i sprawiedliwa, dlatego cieszy się u nich autorytetem.\n' +
                        '                                    Prywatnie interesuje się behawiorystyką koni,posiada własną klacz.\n' +
                        '                                    Od kilku lat zgłębia kulturę i zwyczaje gruzińskiego ludu Chewsurów oraz prowadzi letnie rajdy konnne w górach Wysokiego Kaukazu.'
                },

                { name: 'DOROTA',
                    lastname: 'SZASTAK',
                    position: 'Nauczycielka',
                    img: 'Dorota_Szastak1',
                    desc: 'Nauczycielka z 16 -letnim stażem.Ukończyła Studium Nauczycielskie w Krakowie.\n' +
                        '                                   Jej praca jest oparta na wiedzy praktycznej ze względu na doświadczenie zawodowe. \n' +
                        '                                   Jest nauczycielką z pasją, z powołania, posiadająca przekonanie, że praca i nauczanie dzieci jest misją, w którą jest wpisana odpowiedzialność za drugiego człowieka. \n' +
                        '                                   We wszystkich działaniach kieruje się dobrem dziecka.Praca z dziećmi przynosi jej wiele radości i satysfakcji.Jest osobą ciepłą, przyjazną ,uśmiechniętą i sprawiedliwą. \n' +
                        '                                   Interesuje się psychologią, pedagogiką, muzyką lubi czytać książki związane z rozwojem dzieci, kocha zwierzęta.'
                },


                { name: 'KINGA',
                    lastname: 'KACZMAREK',
                    position: 'Nauczycielka',
                    img: 'Kinga_Kaczmarek1',
                    desc: 'Ukończyła studia na Uniwersytecie Śląskim o specjalności Edukacja Wczesnoszkolna i Wychowanie Przedszkolne.\n' +
                        '                                    Swoją przygodę z nauczaniem rozpoczęła na Śląsku, poznając specyfikę regionu i gwarę śląską przekazywaną dzieciom przez rodziny, zgodnie z tradycją.\n' +
                        '                                    Od roku pracuje w Krakowie. Jest nauczycielką bardzo sympatyczną,ambitną i kreatywną, nieustannie poszerzającą swój warsztat pracy z dziećmi. Bardzo lubiana i obdarzona autorytetem przez dzieci i rodziców. Szczególna uwagę zwraca na prawidłową postawę u dzieci oraz nawyki żywieniowe, mające wpływ na całe życie.\n' +
                        '                                    Interesuje się sportem - uczęszcza na zajęcia z cross-fitu oraz dietetyką u dorosłych i dzieci. Udziela porad żywieniowych.'
                },




                { name: 'ALEKSANDRA',
                    lastname: 'BROŻYNA',
                    position: 'Nauczycielka',
                    img: 'Aleksandra_Brozyna1',
                    desc: 'Absolwentka Wychowania Przedszkolnego i Edukacji Wczesnoszkolnej na Akademii Ignatianum w Krakowie.\n' +
                        '                                    Pomimo niewielkiego stażu pracy posiada doświadczenie zawodowe zdobyte poprzez liczne praktyki w przedszkolach, szkołach podstawowych i żłobkach.\n' +
                        '                                    Jako nauczyciel  jest konsekwentna ale przy tym ciepła i otwarta na potrzeby najmłodszych. Na co dzień zaraża maluchy uśmiechem i dobrym nastrojem.Przywiązuje ogromna wagę do czynnego udziału dzieci w zajęciach poprzez różnorodne techniki i metody pracy.\n' +
                        '                                    Od kilku lat trenuje sztuki walki (MMA oraz BJJ). Interesuje się muzyką, posiada kolekcję 150 albumów od muzyki klasycznej do współczesnej. Wolny czas spędza na koncertach muzycznych lub wycieczkach górskich.'
                },

                { name: 'JOANNA',
                    lastname: 'WOŹNIAK',
                    position: 'Nauczycielka',
                    img: 'Joanna_Wozniak1',
                    desc: 'Ukończyła studia magisterskie na Uniwersytecie Pedagogicznym w Krakowie na kierunku Pedagogika Społeczno-Opiekuńcza a także studia podyplomowe  z zakresu Pedagogiki Przedszkolnej i Wczesnoszkolnej oraz z Pedagogiki Specjalnej -Edukacji i rehabilitacji osób z niepełnosprawnością intelektualną ( oligofrenopedagogiką).\n' +
                        '                                    Od czasów studenckich jest związana z Polskim Czerwonym Krzyżem, dzięki któremu zdobyła doświadczenie pedagogiczne na koloniach letnich organizowanych dla dzieci i młodzieży.\n' +
                        '                                    W przedszkolu pełni funkcję opiekuna "Klubu Wiewiórka PCK" w ramach którego kształtuje u przedszkolaków empatię, postawę niesienia pomocy oraz nawyki dbania o zdrowie i bezpieczeństwo.\n' +
                        '                                    Lubi podróżować, fotografować, zwiedzać wystawy i muzea, oglądać sztuki teatralne a w wolnym czasie oddaje się lekturze, długim spacerom lub spotkaniom z przyjaciółmi. Miłośniczka zwierząt i muzyki.'

                },

                { name: 'NATALIA',
                    lastname: 'KICZURA',
                    position: 'Nauczycielka',
                    img: 'Natalia_Kiczura1',
                    desc: 'Jest absolwentką Pedagogiki Przedszkolnej i Wczesnoszkolnej na Uniwersytecie Pedagogicznym w Krakowie.\n' +
                        '                                    Tradycje aby zostać nauczycielem wyniosła z domu bowiem jej mama jest również nauczycielem wychowania przedszkolnego i to ona zachęciła Natalię do kształcenia w tym zawodzie.Jest osobą bardzo empatyczną, lubianą przez dzieci i rodziców.\n' +
                        '                                    W pracy poszukuje nowoczesnych technik i metod, które można wykorzystać w zajęciach.\n' +
                        '                                    Prowadzi stronę przedszkola na Facebooku umieszczając na niej ciekawe zajęcia, uroczystości przedszkolne i ważne wydarzenia.\n' +
                        '                                    Jej pasją są podróże, wycieczki piesze i rowerowe'

                },


                { name: 'MARIA',
                    lastname: 'KACZMAREK',
                    position: 'Dyrektor Pedagogiczny',
                    img: 'Maria_Kaczmarek1',
                    desc: 'Nauczyciel dyplomowany, magister pedagogiki, ukończyła Pedagogikę Przedszkolną i Wczesnoszkolną na Uniwersytecie Pedagogiczną.\n' +
                        '                                    Wieloletnia dyrektorka Samorządowego Przedszkola nr.94 w Nowej Hucie.\n' +
                        '                                    W przedszkolu jest dyrektorem d/s pedagogicznych, sprawuje nadzór nad nauczycielkami stażystkami. Jest bardzo doświadczona, posiada ogromną wiedzę merytoryczną, ciekawy warsztat pracy, jest wsparciem dla młodej kadry rozpoczynającej pracę w zawodzie nauczyciela.\n' +
                        '                                    Propagatorka zdrowego odżywiania, medycyny naturalnej, lubi wycieczki piesze. '
                },


                { name: 'VIOLETTA',
                    lastname: 'WOJAS',
                    position: 'Dyrektor',
                    img: 'Violetta_Wojas1',
                    desc: 'Magister pedagogiki, ukończyła studia na Uniwersytecie Pedagogicznym oraz Studium Wychowania Przedszkolnego.\n' +
                        '                                    Dyrektorka placówek przy ul.Mikolaja Reja 13 i przy ul.Radzikowskiego 92. \n' +
                        '                                    Swoją pracę traktuje jak misję, w której najważniejszą wartością jest przygotowanie każdego dziecka do dalszej edukacji.\n' +
                        '                                    Dba o dobór kadry nauczycielskiej, dla której praca jest pasją, miejscem kreowania najważniejszych wartości w życiu człowieka: umiejętność komunikacji,tolerancji, szacunku dla innych. \n' +
                        '                                    Miłośniczka kultury hiszpańskiej, tańczy flamenco w Akademii Fuente de Amapola, ćwiczy jogę, podróżuje, uwielbia czytać.'
                }
            ]


        };
    }


    render() {
        return (
            <div class="about_bg">

                <Subpage_header />


                <div class="container_1200">
                    <div>
                        <div className="col-12 text-center mt-5 mb-5">
                            <img src='/images/teachers/teacher_icon.svg' className='subsection_main_icon'/>
                            <h2> Kadra </h2>
                        </div>


                        <div className="col-12">

                            <p className="text-center mt-5"><strong> Serdecznie zapraszamy Państwa do zapoznania się z naszym zespołem. </strong></p>

                        </div>

                    </div>
                </div>


                <div className="row m-4 m-auto container_1200">

                    {

                        this.state.teachers.slice(0, 4).map(element => {

                            return (


                                <div className="col-md-6 mt-5">
                                    <h1 class="teacher_desc"> {element.name} <strong className="bold_color"> {element.lastname}</strong> </h1>
                                    <p class="teacher_desc"> {element.position} </p>
                                    <div className="teacher_img">
                                        <img src={`/images/teachers/${element.img}.jpg`} className="img-fluid teacher_avatar"/>
                                    </div>

                                    <div className="teacher_desc">
                                        <p> {element.desc}</p>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>

                <div className='row'>

                    <div className='col-12'>

                        <div className="intersection">
                            <div className="row">

                                <div class="col-12 text-center">
                                    <img src='/images/teachers/blocks.svg' className="philosophy_icon"/>
                                </div>

                                <div className="col-md-3 text-center">
                                    <h1> 2 </h1>
                                    <h5>Placówki</h5>
                            </div>

                                <div className="col-md-3 text-center">
                                    <h1>4</h1>
                                    <h5> Sale Zajęć </h5>
                                </div>

                                <div className="col-md-3 text-center">
                                    <h1> 8 </h1>
                                    <h5> Nauczycielek </h5>
                                </div>

                                <div className="col-md-3 text-center">
                                    <h1> 120 </h1>
                                    <h5> Dzieci </h5>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

                <div className="row m-auto m-4 container_1200">

                    {

                        this.state.teachers.slice(4, 8).map(element => {

                            return (


                                <div className="col-md-6  mt-5">
                                    <h1 className="teacher_desc"> {element.name} <strong className="bold_color"> {element.lastname}</strong>
                                    </h1>
                                    <p className="teacher_desc"> {element.position} </p>
                                    <div className="teacher_img">
                                        <img src={`/images/teachers/${element.img}.jpg`}
                                             className="img-fluid teacher_avatar"/>
                                    </div>

                                    <div className="teacher_desc">
                                        <p> {element.desc}</p>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>



                <div className="row m-4 m-auto container_1200">

                    {

                        this.state.teachers.slice(8, 10).map(element => {

                            return (


                                <div className="col-12 mt-5 mb-3">
                                    <h1 className="teacher_desc"> {element.name} <strong className="bold_color"> {element.lastname}</strong>
                                    </h1>
                                    <p className="teacher_desc"> {element.position} </p>
                                    <div className="teacher_img">
                                        <img src={`/images/teachers/${element.img}.jpg`}
                                             className="img-fluid teacher_avatar"/>
                                    </div>

                                    <div className="teacher_desc">
                                        <p> {element.desc}</p>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>


                <Reja_S8_Contact />


            </div>
        );
    }
}

export default About_Us;