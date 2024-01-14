import React, { useContext } from 'react'
import './styles.chat.css'
import { GoDotFill } from "react-icons/go";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineGif } from "react-icons/hi2";


export default function Chat() {


    return (
        <div className="main-chat">
            <div className="header-chat">
                <div className="players-chat"> <GoDotFill /> 2500 </div>
            </div>
            <div className='messages-chat'>
                <div className='userMessage'>
                    <div>
                        <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                        <h3>Guest0022</h3>
                    </div>
                    <p> Eai tropaaaa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut laudantium soluta similique voluptatibus aliquam, ea iure magnam sit, ipsa facilis expedita nam dicta recusandae illum fugiat eum deleniti! Fugiat?</p>

                </div>

                <div className='userMessage'>
                    <div>
                        <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                        <h3>Guest0022</h3>
                    </div>
                    <p> Eai tropaaaa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut laudantium soluta similique voluptatibus aliquam, ea iure magnam sit, ipsa facilis expedita nam dicta recusandae illum fugiat eum deleniti! Fugiat?</p>

                </div>

                <div className='userMessage'>
                    <div>
                        <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                        <h3>Guest0022</h3>
                    </div>
                    <p> Eai tropaaaa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut laudantium soluta similique voluptatibus aliquam, ea iure magnam sit, ipsa facilis expedita nam dicta recusandae illum fugiat eum deleniti! Fugiat?</p>

                </div>

                <div className='userMessage'>
                    <div>
                        <img src="https://apostalegal.com/wp-content/uploads/2021/03/cassino-ao-vivo-live.jpg" alt="foto de perfil" />
                        <h3>Guest0022</h3>
                    </div>
                    <p> Eai tropaaaa, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut laudantium soluta similique voluptatibus aliquam, ea iure magnam sit, ipsa facilis expedita nam dicta recusandae illum fugiat eum deleniti! Fugiat?</p>

                </div>

            </div>
            <div className="footer-chat">
                <input type="text" placeholder='Responder' />
                <div className='input-icons'>
                    <div>
                        <BsEmojiSmile />
                        <HiOutlineGif />
                    </div>

                    <div>
                        <p>160</p>
                    </div>
                </div>
            </div>

        </div>
    )
}