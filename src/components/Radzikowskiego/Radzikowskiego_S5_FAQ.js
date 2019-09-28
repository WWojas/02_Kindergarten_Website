import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Radzikowskiego_S5_FAQ extends Component {
    render() {
        return (
            <div>
                <div class="row">

                    <div className='col'>
                        <h3> Najczęściej zadawane pytania (FAQ)</h3>
                    </div>

                </div>

                <div class="row">
                    <div class="col">

                    <div id="accordion">

                        <div className="card">
                            <div className="card-header">
                                <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                    W jakich godzinach czynne jest przedszkole?
                                </a>
                            </div>
                            <div id="collapseOne" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Przedszkole  czynne jest od godziny 6.30 rano do godziny 17.30 przez 12 miesięcy w roku.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                    Ilu nauczycieli przypada na grupę dzieci?
                                </a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Grupy dzieci licza około 20 dzieci. Każdą grupą opiekuje się dwóch nauczycieli prze cały dzień.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                    Jak  wygląda żywienie dzieci w Krakowiaczku?
                                </a>
                            </div>
                            <div id="collapseThree" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Przedszkole współpracuje z firmą cateringową F.H.U Kario specjalizującą się w zywieniu placówek przedszkolnych i żłobków.
                                    Jadłospis przygotowywany jest przez dietetyka z uwzględnieniem bilansu kalorycznego oraz wartości odżywczych.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                                    Czy wyżywienie dzieci uwzględnia potrzeby alergików?
                                </a>
                            </div>
                            <div id="collapseFour" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Obowiązkiem rodzica jest podanie wszelkich informacji o alergiach dziecka Takie dane przechowywane są w bazie danych, a na ich podstawie sporządzana jest lista zasad, których opiekunowie muszą przestrzegać w pracy z dzieckiem alergicznym.
                                    Jeżeli Dziecko cierpi na alergię pokarmową, Rodzice zobowiązani są dostarczyć specyfikację lekarską oraz podać szczegółowe informacje na ten temat w Karcie przyjęcia dziecka. Sposób żywienia dzieci alergicznych ustalany jest indywidualnie z Rodzicami przy zawarciu Umowy.
                                    Na podstawie specyfikacji lekarskiej firma cateringowa dostarcza posiłki z uwzględnieniem specjalnej diety.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                                   W jaki sposób organizowane są wycieczki lub wyjścia dzieci poza teren placówki?
                                </a>
                            </div>
                            <div id="collapseFive" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Dzieci będą zabierane na zaplanowane wycieczki tylko po uprzedniej konsultacji z rodzicami i za ich pisemną zgodą.
                                    Codzienne spacery i krótkie wycieczki nie wymagają takiej zgody.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseSix">
                                    Czy przedszkole oferuje zajecia dodatkowe?
                                </a>
                            </div>
                            <div id="collapseSix" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Tak, przedszkole oferuje zajęcia dodatkowe. Pełna lista dostępnych aktywności znajduje się <Link to ="/extended_offer" class='anchor_link'> tutaj </Link>
                                </div>
                            </div>
                        </div>



                    </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Radzikowskiego_S5_FAQ;