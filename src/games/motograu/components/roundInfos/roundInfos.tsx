import React, { useState } from "react";
import './styles.roundInfo.css';
import { IoRefreshCircleOutline } from "react-icons/io5";

export default function RoundInfos() {

    const [activeInterface, setActiveInterface] = useState('interface1');

    const showInterface1 = () => {
        setActiveInterface('interface1');
    };

    const showInterface2 = () => {
        setActiveInterface('interface2');
    };

    return (
        <div className="block">
            <div className="header-info">
                <button
                    onClick={showInterface1}
                    className={activeInterface === 'interface1' ? 'active-button' : ''}
                >
                    Todas as apostas
                </button>
                <button
                    onClick={showInterface2}
                    className={activeInterface === 'interface2' ? 'active-button' : ''}
                >
                    Minhas apostas
                </button>
            </div>
            <div className="all-bets">
                <div>
                    <h2>TODAS AS APOSTAS</h2>
                    <p>1786</p>
                </div>

                <button className="mao">
                    <IoRefreshCircleOutline size={19} />
                    <p>Mão anterior</p>
                </button>

            </div>
            <div className={`interface ${activeInterface === 'interface1' ? 'active' : ''}`}>
                <div className="table-container">
                    <table className="tabela-info">
                        <thead className="sticky-thead">
                            <tr>
                                <th>Utilizador</th>
                                <th>Aposta</th>
                                <th>Sacar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="player-info">
                                    <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                                    <h3>Guest0022</h3>
                                </td>
                                <td>R$ 50,00</td>
                                <td>R$ 25,00</td>
                            </tr>
                            <tr>
                                <td className="player-info">
                                    <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                                    <h3>Guest0022</h3>
                                </td>
                                <td>R$ 50,00</td>
                                <td>R$ 25,00</td>
                            </tr>
                            <tr>
                                <td className="player-info">
                                    <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                                    <h3>Guest0022</h3>
                                </td>
                                <td>R$ 50,00</td>
                                <td>R$ 25,00</td>
                            </tr>
                            <tr>
                                <td className="player-info">
                                    <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                                    <h3>Guest0022</h3>
                                </td>
                                <td>R$ 50,00</td>
                                <td>R$ 25,00</td>
                            </tr>
                            <tr>
                                <td className="player-info">
                                    <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                                    <h3>Guest0022</h3>
                                </td>
                                <td>R$ 50,00</td>
                                <td>R$ 25,00</td>
                            </tr>
                            <tr>
                                <td className="player-info">
                                    <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                                    <h3>Guest0022</h3>
                                </td>
                                <td>R$ 50,00</td>
                                <td>R$ 25,00</td>
                            </tr>
                            <tr>
                                <td className="player-info">
                                    <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                                    <h3>Guest0022</h3>
                                </td>
                                <td>R$ 50,00</td>
                                <td>R$ 25,00</td>
                            </tr>
                            <tr>
                                <td className="player-info">
                                    <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                                    <h3>Guest0022</h3>
                                </td>
                                <td>R$ 50,00</td>
                                <td>R$ 25,00</td>
                            </tr>
                            <tr>
                                <td className="player-info">
                                    <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                                    <h3>Guest0022</h3>
                                </td>
                                <td>R$ 50,00</td>
                                <td>R$ 25,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`interface ${activeInterface === 'interface2' ? 'active' : ''}`}>
                {/* Conteúdo da Interface 2 */}
                <p>Conteúdo da Interface 2</p>
            </div>
        </div>
    )
}