import React, { useState } from "react";
import './styled.bets.css';

import { CgAdd } from "react-icons/cg";
import { CgRemove } from "react-icons/cg";

export default function Bets() {

    const [activeButton, setActiveButton] = useState('aposta');

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };
    return (

        <div className="flex-bets">

            <div className="bets-block">
                <div className="bets-header">
                    <button
                        className={activeButton === 'aposta' ? 'active' : ''}
                        onClick={() => handleButtonClick('aposta')}
                    >
                        Aposta
                    </button>
                    <button
                        className={activeButton === 'automatico' ? 'active' : ''}
                        onClick={() => handleButtonClick('automatico')}
                    >
                        Automático
                    </button>
                </div>

                <div className="bets-main">
                    <div className="bets-values">
                        <div className="first-bet-button">
                            <CgAdd />
                            <button> 20.00 </button>
                            <CgRemove />
                        </div>
                        <div className="bets-add">
                            <button>10</button>
                            <button>20</button>
                        </div>

                        <div className="bets-add">
                            <button>50</button>
                            <button>100</button>
                        </div>
                    </div>

                    <div className="bets-bet">
                        <button>
                            <p>APOSTA</p>
                            <p>20 BRL</p>
                        </button>
                    </div>
                </div>
            </div>


            <div className="bets-block">
                <div className="bets-header">
                    <button
                        className={activeButton === 'aposta' ? 'active' : ''}
                        onClick={() => handleButtonClick('aposta')}
                    >
                        Aposta
                    </button>
                    <button
                        className={activeButton === 'automatico' ? 'active' : ''}
                        onClick={() => handleButtonClick('automatico')}
                    >
                        Automático
                    </button>
                </div>

                <div className="bets-main">
                    <div className="bets-values">
                        <div className="first-bet-button">
                            <CgAdd />
                            <button> 20.00 </button>
                            <CgRemove />
                        </div>
                        <div className="bets-add">
                            <button>10</button>
                            <button>20</button>
                        </div>

                        <div className="bets-add">
                            <button>50</button>
                            <button>100</button>
                        </div>
                    </div>

                    <div className="bets-bet">
                        <button>
                            <p>APOSTA</p>
                            <p>20 BRL</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}