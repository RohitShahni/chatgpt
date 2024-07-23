import React, {useState} from 'react';

import send from '../src/assets/send.svg';
import user from '../src/assets/user.png';
import loader from '../src/assets/loader.svg';


function App() {
    return (
        <div className={'chatGPT-app'}>
            <section className={'chat-container'}>
                <div className={'layout'}>
                    <div className={'chat-bubble'}>

                    </div>
                </div>
            </section>
            <footer>
                <input
                    className={'composebar'}
                    autoFocus
                    type={'text'}
                    placeholder={'Ask Anything!'}
                    onChange={() => {
                    }}

                />
                <div className={'send-button'}>
                    <img src={send} alt={'sendBtn'}/>
                </div>
            </footer>
        </div>
    );
}

export default App;
