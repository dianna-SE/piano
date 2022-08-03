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
import kick from '../notes/KK_snare.wav';
import hihat from '../notes/KK_hat.wav';

class Keyboard extends React.Component {


    render() {
        
        return (

            <div class="keyboard keys">

                <div class="display-screen">K.K. Keyboard</div>

                <div className="R1">
                    <div class="key" data-key="27">esc</div>
                    <div class="key" data-key="49">1 !</div>
                    <div class="key" data-key="50">2 @</div>
                    <div class="key" data-key="51">3 #</div>
                    <div class="key" data-key="52">4 $</div>
                    <div class="key" data-key="53">5 %</div>
                    <div class="key" data-key="54">6 ^</div>
                    <div class="key" data-key="55">7 &</div>
                    <div class="key" data-key="56">8 *</div>
                    <div class="key" data-key="57">9 (</div>
                    <div class="key" data-key="48">0 )</div>
                    <div class="key" data-key="189">- _</div>
                    <div class="key" data-key="187">= +</div>
                    <div class="key backspace" data-key="8">backspace</div>
                </div>

                <div className="R2">
                    <div class="tab" data-key="9">tab</div>
                    <div class="key" data-key="81">q</div>
                    <div class="key" data-key="87">w</div>
                    <div class="key" data-key="69">e</div>
                    <div class="key" data-key="82">r</div>
                    <div class="key" data-key="84">t</div>
                    <div class="key" data-key="89">y</div>
                    <div class="key" data-key="85">u</div>
                    <div class="key" data-key="73">i</div>
                    <div class="key" data-key="79">o</div>
                    <div class="key" data-key="80">p</div>
                    <div class="key" data-key="219">{'['} {'{'}</div>
                    <div class="key" data-key="221">{']'} {'}'}</div>
                    <div class="key" data-key="220">{'\\'} {'|'}</div>
                </div>

                <div className="R3">
                    <div class="key caps" data-key="20">caps</div>
                    <div class="key" data-key="65">a</div>
                    <div class="key" data-key="83">s</div>
                    <div class="key" data-key="68">d</div>
                    <div class="key" data-key="70">f</div>
                    <div class="key" data-key="71">g</div>
                    <div class="key" data-key="72">h</div>
                    <div class="key" data-key="74">j</div>
                    <div class="key" data-key="75">k</div>
                    <div class="key" data-key="76">l</div>
                    <div class="key" data-key="186">: ;</div>
                    <div class="key" data-key="222">" '</div>
                    <div class="key enter" data-key="13">enter</div>
                </div>

                <div className="R4"> {/* 13 */}
                    <div class="key shift" data-key="16">shift</div>
                    <div class="key" data-key="90">z</div>
                    <div class="key" data-key="88">x</div>
                    <div class="key" data-key="67">c</div>
                    <div class="key" data-key="86">v</div>
                    <div class="key" data-key="66">b</div>
                    <div class="key" data-key="78">n</div>
                    <div class="key" data-key="77">m</div>
                    <div class="key" data-key="188">,</div>
                    <div class="key" data-key="190">.</div>
                    <div class="key" data-key="191">/</div>
                    <div class="key shift" data-key="16">shift</div>
                </div>


                <div className="R5">
                    <div class="skey" data-key="17">ctrl</div>
                    <div class="skey" data-key="">fn</div>
                    <div class="skey" data-key="18">alt</div>
                    <div class="key spacebar" data-key="32">spacebar</div>
                    <div class="skey" data-key="18">alt</div>
                    <div class="skey" data-key="">fn</div>
                    <div class="skey" data-key="17">ctrl</div>
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
                {/* <audio data-key="" src={}></audio> */}
                <audio data-key="65" src={C4}></audio>
                <audio data-key="83" src={D4}></audio>
                <audio data-key="68" src={E4}></audio>
                <audio data-key="70" src={F4}></audio>
                <audio data-key="71" src={G4}></audio>
                <audio data-key="72" src={A3}></audio>
                <audio data-key="74" src={B4}></audio>
                <audio data-key="75" src={C5}></audio>
                <audio data-key="32" src={kick}></audio>
                <audio data-key="16" src={hihat}></audio>
                <audio data-key="" src={C4}></audio>
            </div>

        
        )
    }
}

export { Keyboard };