import React from 'react';
import Reja_S8_Contact from "../Reja/Reja_S8_Contact";
import Subpage_header from "./Subpage_header";

class Enrollment extends React.Component{
    render() {
        return (
            <div class="enrollment_bg">
              <Subpage_header />

                <div clas="row">
                    <div class="col-12 container_1200 m-auto">

                        <div>
                            <div>

                                <div class="col-12 text-center mt-4 mb-5">
                                    <div className="col-12 text-center">
                                        <img src='/images/enrollment/calendar_enrollment_icon.svg' className='subsection_main_icon'/>
                                        <h2> Zapisy</h2>
                                    </div>



                                    <div className="col-12 text-center alert_box p-5 mb-5 mt-5">
                                        <p> Szanowni Państwo, </p>
                                        <p> W związku z oficjalnym ogłoszeniem naboru na rok szkolny 2019/2020 serdecznie zapraszamy do
                                            wypełnienia oraz przesłania na nasz adres korespondencyjny poniższego
                                            </p>
                                        <img src='/images/enrollment/form.svg' class="round_icon"/>
                                        <button className="btn"> Formularza Aplikacyjnego </button>
                                    </div>
                            </div>



                            <div class="col-12">

                            <h3 class="text-center"> Przedszkole Krakowiaczek prowadzi aktualnie nabór do placówek położonych w następujących lokalizacjach:</h3>

                            <ol class="text-center color_blue">
                                <li > I. Placówka przy ul. Mikołaja Reja 13 w Krakowie </li>
                                <li > II. Placówka przy ul. Walerego Radzikowskiego 92 w Krakowie </li>
                            </ol>

                            <p class="text-center"> Serdecznie zapraszamy Państwa do kontaktu oraz odbycia wizyty w naszych placówkach.</p>

                        </div>

                    </div>
                        </div>




                <div class="row mt-5 mb-5">

                    <div class="col-12">

                        <table className="table table-striped table-hover">

                            <div class="flex-column-philosophy">
                                <img src='/images/reja_pic.jpg' className="round_icon img-fluid  d-none d-sm-block"/>
                                <h3 className="col-12 text-center">Placówka przy ul. Reja</h3>
                            </div>

                            <thead className="thead-light">
                            <tr>
                                <th scope="col">Nazwa Grupy</th>
                                <th scope="col">Opis Grupy</th>
                                <th scope="col" className="d-none d-sm-block none">Status</th>
                                <th scope="col">Dostępność</th>
                            </tr>
                            </thead>

                            <tbody>

                            <tr>
                                <td>Smoki</td>
                                <td>Dzieci w wieku 5-6 lat</td>
                                <td className="d-none d-sm-block">Aktywna</td>
                                <td>2 wolne miejsca</td>
                            </tr>
                            <tr>
                                <td>Smoczki</td>
                                <td>Dzieci w wieku 3-4 lat</td>
                                <td className="d-none d-sm-block">Aktywna</td>
                                <td>6 wolnych miejsc</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="row mt-5 mb-5">

                    <div className="col-12">

                        <table className="table table-striped table-hover">

                            <div className="flex-column-philosophy">
                                <img src='/images/radzikowskiego_pic.jpg' className="round_icon img-fluid  d-none d-sm-block"/>
                                <h3 className="col-12 text-center">Placówka przy ul. Radzikowskiego </h3>
                            </div>


                            <thead className="thead-light">
                            <tr valign="bottom">
                                <th scope="col">Nazwa Grupy</th>
                                <th scope="col">Opis Grupy</th>
                                <th scope="col" className="d-none d-sm-block ">Status</th>
                                <th scope="col">Dostępność</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Lajkonik</td>
                                <td>Dzieci w wieku 3-4 lat</td>
                                <td className="d-none d-sm-block">Aktywna</td>
                                <td>brak wolnych miejsc</td>
                            </tr>
                            <tr>
                                <td>Wawel</td>
                                <td>Dzieci w wieku 3-4 lat</td>
                                <td className="d-none d-sm-block">Aktywna</td>
                                <td>brak wolnych miejsc</td>
                            </tr>
                            <tr>
                                <td>Dratewka</td>
                                <td>Dzieci w wieku 5-6 lat</td>
                                <td className="d-none d-sm-block">Aktywna</td>
                                <td>brak wolnych miejsc</td>
                            </tr>
                            <tr className="new_group">
                                <td> </td>
                                <td>Dzieci w wieku od 2,5 lat</td>
                                <td className="d-none d-sm-block">W przygotowaniu</td>
                                <td>22 wolne miejsca</td>
                            </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
                </div>


                <Reja_S8_Contact/>
            </div>
        );
    }
}

export default Enrollment;