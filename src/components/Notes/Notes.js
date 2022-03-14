import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export function Notes({ style, click, dados }) {

    const [valores, setValores] = useState('');

    const handleChange = (event) => {
        const salvarDados = event.target.value;
        setValores(salvarDados);
        consultar();      
    }
 
    const armazenar = (chave, valor) => {
        localStorage.setItem(chave, valor);
    }

    const consultar = () => {
        const mostrarDados = window.localStorage.getItem('ls_valores');
        setValores(mostrarDados);
    }

    return (
        <div className={style}>
            <div className="part-left">
                <h3>Notes</h3>
                <textarea value={valores} onChange={handleChange} className="text"></textarea>
                <FontAwesomeIcon onClick={() => armazenar('ls_valores',valores)} icon={faSave} className="salvar-textarea"/>
                <h3 className='teste'>{valores}</h3>
            </div>
            <div className="part-right">
                <div className="ajuste-h3">
                    <h3>Historic</h3>
                    <span className="sair" onClick={click}>x</span>
                </div>
                <div className="tabela-historico">
                    <h4>Start time</h4>
                    <h4>End Time</h4>
                </div>
                <ul className="historico">
                    {dados.map((item, index) => <li className="dados-historico" key={index}>
                        {new Date(item.horaInicio).toLocaleTimeString('en-GB',  {hour: '2-digit', minute:'2-digit'})} <span className="distancia">-</span> {item.horaFim ? new Date(item.horaFim).toLocaleTimeString('en-GB',  {hour: '2-digit', minute:'2-digit'}) : 'Executando'}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}