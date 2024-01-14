import React from "react";
import { CiStar } from "react-icons/ci";
import { BiExpand } from "react-icons/bi";
import './styles.header.css'
import motoGrau from '../../../../assets/logos/moto-grau.png';
import { FaRegQuestionCircle } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { RxTextAlignJustify } from "react-icons/rx";

export default function Header(){

    return(
        <>
        <div className="header">
            <h1>Moto Grau <CiStar size={20}/></h1>
            <div>
                <BiExpand size={20} />
            </div>
        </div>

        <div className="header-2">
            <div className="primeiraDIV">
                <img src={motoGrau} alt="logo motograu" />
                <button><FaRegQuestionCircle /> Como jogar ?</button>
            </div>

            <div className="segundaDIV">
                <h2>50.000</h2>
                <h3>BRL</h3>
                <RxDividerVertical size={40} />
                <RxTextAlignJustify id="ultimo-svg" size={30} />
            </div>
        </div>
        </>
    )
}