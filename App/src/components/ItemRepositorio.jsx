import { useState } from "react";

export default function ItemRepositorio(props) {

    const [descrição, setDescrição] = useState('none');
    const [rotate, setRotate] = useState('');

    //python
    const python = "#083796"
    const pythoncor2 = "#e0b51a"

    //js
    const js = "#f5cd05"

    //vue
    const vue = "#1ec26d"


    const nulo = "#1c1c1c"
    const html = "#f55905"

    const php = "#3f7bf3"

    const ts = "#111fe4"

    //fontes
    const black = "#000000"
    const branco = "#fff"


    function backgroundSwitch() {
        switch (props.languages) {

            case 'Python':
                return python;
            case 'JavaScript':
                return js;
            case 'HTML':
                return html;
            case 'PHP':
                return php;
            case 'Vue':
                return vue;
            case 'TypeScript':
                return ts;
            default:
                return nulo;
        }
    }

    function tituloSwitch() {
        switch (props.languages) {

            case 'Python':
                return pythoncor2;
            case 'JavaScript':
                return black;
            case 'HTML':
                return branco;
            case 'PHP':
                return branco;
            case 'Vue':
                return branco;
            case 'TypeScript':
                return branco;
            default:
                return branco;
        }
    }

    function VerDescrição(){
        console.log('aqui');
        if( descrição === 'none'){
            setDescrição('flex');
            setRotate('rotate(-90deg)');
        }
        else{
            setDescrição('none');
            setRotate('');
        }
        
    }

    return (
        <div className="Item">
            <div className='Irepositorio'>
                <div className="repos-titulo">
                    <a href={props.url} target="_blank">
                        <h5 className="rs-titulo">{props.nameProject}</h5>
                    </a>
                </div>
                <div className="repos-linguagem" style={{ backgroundColor: `${backgroundSwitch()}` }}>
                    <div className="rl" style={{ color: `${tituloSwitch()}` }}>
                        <div className="rl-icon">
                            <i class="fa-solid fa-code"></i>
                        </div>
                        <div className="rl-lang-text" style={{ Color: `${tituloSwitch()}` }}>
                            <p>{props.languages}</p>
                        </div>
                    </div>
                </div>
                <div className="repos-seta" onClick={VerDescrição} style={{transform: `${rotate}`}}>
                    <div>
                        <i class="fa-solid fa-angle-right fa-rotate-180" id="seta1"></i>
                    </div>
                </div>
                
            </div>
            <div className="desc" style={{display: `${descrição}`, backgroundColor: '#050505', borderRadius: '10px', position: 'absolute', zIndex: '10', marginTop: '5px'}}>
            <p>{props.descProject? props.descProject:"Sem descrição"}</p>
            </div>
        </div>
    )
}