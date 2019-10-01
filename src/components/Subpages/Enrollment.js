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



                            <div class="col-12 text-center">
                                <img src='/images/enrollment/school.svg' className='subsection_main_icon mb-3'/>
                            <h3 class="text-center"> Przedszkole Krakowiaczek prowadzi aktualnie nabór do placówek położonych w następujących lokalizacjach:</h3>

                            <ol class="text-center color_blue">
                                <li > I. Placówka przy ul. Mikołaja Reja 13 w Krakowie </li>
                                <li > II. Placówka przy ul. Walerego Radzikowskiego 92 w Krakowie </li>
                            </ol>

                            <p class="text-center"> Serdecznie zapraszamy Państwa do kontaktu oraz odbycia wizyty w naszych placówkach.</p>

                        </div>

                    </div>





                <div class="row mt-5 mb-5">

                    <div class="col-12">

                        <img src='/images/reja_pic.jpg' className="round_icon img-fluid  d-block"/>
                        <h3 className="col-12 text-center">Placówka przy ul. Reja</h3>
                        <table className="table table-striped table-hover">
                            <div class="flex-column-philosophy">
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
                                <td>brak wolnych miejsc</td>
                            </tr>
                            <tr class='open_spot'>
                                <td>Smoczki</td>
                                <td>Dzieci w wieku 3-4 lat</td>
                                <td className="d-none d-sm-block">Aktywna</td>
                                <td>2 wolne miejsca</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="row mt-5 mb-5">

                    <div className="col-12">

                        <img src='/images/radzikowskiego_pic.jpg' className="round_icon img-fluid  d-block"/>
                        <h3 className="col-12 text-center">Placówka przy ul. Radzikowskiego </h3>
                        <table className="table table-striped table-hover">

                            <div className="flex-column-philosophy">
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
                            <tr>
                                <td>Barbakan</td>
                                <td>Dzieci w wieku 5-6 lat</td>
                                <td className="d-none d-sm-block">Aktywna</td>
                                <td>brak wolnych miejsc</td>
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