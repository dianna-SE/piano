import React from 'react';
import './Keyboard.scss';
import '../global/constants.js';

import C4 from '../notes/C3.wav';
import D4 from '../notes/D3.wav';
import E4 from '../notes/E3.wav';
import F4 from '../notes/F3.wav';
import G4 from '../notes/G3.wav';
import A3 from '../notes/A3.wav';
import B4 from '../notes/B2.wav';
import C5 from '../notes/C4.wav';
import kick from '../notes/C4.wav';
import hihat from '../notes/C4.wav';

class Keyboard extends React.Component {


    render() {
        
        return (

            <div class="keyboard keys">

                <div class="display-screen">K.K. Keyboard</div>

                <div className="R1">
                    <div class="key" data-key="65">esc</div>
                    <div class="key" data-key="83">1 !</div>
                    <div class="key" data-key="68">2 @</div>
                    <div class="key" data-key="70">3 #</div>
                    <div class="key" data-key="71">4 $</div>
                    <div class="key" data-key="72">5 %</div>
                    <div class="key" data-key="74">6 ^</div>
                    <div class="key" data-key="65">7 &</div>
                    <div class="key" data-key="83">8 *</div>
                    <div class="key" data-key="68">9 (</div>
                    <div class="key" data-key="70">0 )</div>
                    <div class="key" data-key="71">- _</div>
                    <div class="key" data-key="72">= +</div>
                    <div class="key" data-key="74">backspace</div>
                </div>

                <div className="R2">
                    <div class="tab" data-key="65">tab</div>
                    <div class="key" data-key="65">a</div>
                    <div class="key" data-key="83">s</div>
                    <div class="key" data-key="68">d</div>
                    <div class="key" data-key="70">f</div>
                    <div class="key" data-key="71">g</div>
                    <div class="key" data-key="72">h</div>
                    <div class="key" data-key="74">j</div>
                    <div class="key" data-key="65">a</div>
                    <div class="key" data-key="83">s</div>
                    <div class="key" data-key="68">d</div>
                    <div class="key" data-key="70">f</div>
                    <div class="key" data-key="71">g</div>
                    <div class="key" data-key="72">h</div>
                </div>

                <div className="R3">
                    <div class="key" data-key="65">caps</div>
                    <div class="key" data-key="65">a</div>
                    <div class="key" data-key="83">s</div>
                    <div class="key" data-key="68">d</div>
                    <div class="key" data-key="70">f</div>
                    <div class="key" data-key="71">g</div>
                    <div class="key" data-key="72">h</div>
                    <div class="key" data-key="74">j</div>
                    <div class="key" data-key="75">k</div>
                    <div class="key" data-key="72">l</div>
                    <div class="key" data-key="74">: ;</div>
                    <div class="key" data-key="75">" '</div>
                    <div class="key" data-key="75">shift</div>
                </div>

                <div className="R4"> {/* 13 */}
                    <div class="key" data-key="71">shift</div>
                    <div class="key" data-key="72">h</div>
                    <div class="key" data-key="74">j</div>
                    <div class="key" data-key="75">k</div>
                    <div class="key" data-key="72">l</div>
                    <div class="key" data-key="74">: ;</div>
                    <div class="key" data-key="75">" '</div>
                    <div class="key" data-key="75">shift</div>
                    <div class="key" data-key="71">g</div>
                    <div class="key" data-key="72">h</div>
                    <div class="key" data-key="74">j</div>
                    <div class="key" data-key="75">k</div>
                    <div class="key" data-key="72">l</div>
                </div>


                <div className="R5">
                    <div class="key" data-key="75">k</div>
                    <div class="key" data-key="72">l</div>
                    <div class="key" data-key="74">: ;</div>
                    <div class="key" data-key="75">spacebar</div>
                    <div class="key" data-key="75">shift</div>
                    <div class="key" data-key="71">g</div>
                    <div class="key" data-key="72">h</div>
                    <div class="key" data-key="74">j</div>
                    <div class="key" data-key="75">k</div>
                    <div class="key" data-key="72">l</div>
                </div>

            {/* 
                <div className="R5">
                    <Key note="ctrl"/>
                    <Key note="fn"/>
                    <Key note="alt"/>
                    <Spacebar note="spacebar"/>
                    <Key note="alt"/>
                    <Key note="fn"/>
                    <Key note="ctrl"/>
                    <Key note="left"/>
                    <Key note="down"/>
                    <Key note="right"/>
                </div>
            */}

                <audio data-key="65" src={C4}></audio>
                <audio data-key="83" src={D4}></audio>
                <audio data-key="68" src={E4}></audio>
                <audio data-key="70" src={F4}></audio>
                <audio data-key="71" src={G4}></audio>
                <audio data-key="72" src={A3}></audio>
                <audio data-key="74" src={B4}></audio>
                <audio data-key="75" src={C5}></audio>
            </div>

        
        )
    }
}

export { Keyboard };