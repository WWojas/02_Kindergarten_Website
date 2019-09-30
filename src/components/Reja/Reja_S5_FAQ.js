import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';


class Reja_S5_FAQ extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }


    render() {
        return (
            <div>
                <div class="row">

                    <div className='col'>
                        <h3> Najczęściej zadawane pytania (FAQ)</h3>
                    </div>

                </div>

                <Button color="info" id="toggler1" style={{ marginBottom: '5px', width: '100%', textAlign: 'left' }}>
                    W jakich godzinach czynne jest przedszkole?
                </Button>
                <UncontrolledCollapse toggler="#toggler1">
                    <Card>
                        <CardBody>
                            Przedszkole  czynne jest od godziny 6.30 rano do godziny 17.30 przez 12 miesięcy w roku
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>


                <Button color="info" id="toggler2" style={{ marginBottom: '5px', width: '100%', textAlign: 'left' }}>
                    Ilu nauczycieli przypada na grupę dzieci?
                </Button>
                <UncontrolledCollapse toggler="#toggler2">
                    <Card>
                        <CardBody>
                            Grupy dzieci licza około 20 dzieci. Każdą grupą opiekuje się dwóch nauczycieli przez cały dzień.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>

                <Button color="info" id="toggler3" style={{ marginBottom: '5px', width: '100%', textAlign: 'left' }}>
                    Jak  wygląda żywienie dzieci w Krakowiaczku?
                </Button>
                <UncontrolledCollapse toggler="#toggler3">
                    <Card>
                        <CardBody>
                            Przedszkole współpracuje z firmą cateringową F.H.U Kario specjalizującą się w zywieniu placówek przedszkolnych i żłobków.
                            <br /> <br />  Jadłospis przygotowywany jest przez dietetyka z uwzględnieniem bilansu kalorycznego oraz wartości odżywczych.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>


                <Button color="info" id="toggler4" style={{ marginBottom: '5px', width: '100%', textAlign: 'left' }}>
                    Czy wyżywienie dzieci uwzględnia potrzeby alergików?
                </Button>
                <UncontrolledCollapse toggler="#toggler4">
                    <Card>
                        <CardBody>
                            Jeżeli Dziecko cierpi na alergię pokarmową, Rodzice zobowiązani są dostarczyć
                            specyfikację lekarską oraz podać szczegółowe informacje na ten temat w Karcie przyjęcia dziecka.
                            <br /> <br />   Sposób żywienia dzieci alergicznych ustalany jest indywidualnie z Rodzicami przy zawarciu Umowy.
                            Na podstawie specyfikacji lekarskiej firma cateringowa dostarcza posiłki z uwzględnieniem specjalnej diety.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>


                <Button color="info" id="toggler5" style={{ marginBottom: '5px', width: '100%', textAlign: 'left' }}>
                    W jaki sposób organizowane są wycieczki lub wyjścia dzieci poza teren placówki?
                </Button>
                <UncontrolledCollapse toggler="#toggler5">
                    <Card>
                        <CardBody>
                            Dzieci uczestniczą w zaplanowanych wycieczkach po uprzedniej konsultacji z rodzicami, za ich pisemną zgodą.
                            <br /> <br />  Codzienne spacery oraz wycieczki krótkodystansowe są organizowane bez konieczności uzyskania tego typu zgody.
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>

                <Button color="info" id="toggler6" style={{ marginBottom: '5px', width: '100%', textAlign: 'left' }}>
                    Czy przedszkole oferuje zajecia dodatkowe?
                </Button>
                <UncontrolledCollapse toggler="#toggler6">
                    <Card>
                        <CardBody>
                            Tak, przedszkole oferuje zajęcia dodatkowe. Pełna lista dostępnych aktywności znajduje się <Link to ="/extended_offer" class='anchor_link'> tutaj </Link>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>


            </div>

        )
    }
}

export default Reja_S5_FAQ;
