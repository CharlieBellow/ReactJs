import { useState } from "react";
import Button from "../Button";

const Card = () => {

    const [valor, setValor] = useState(0)
    /* // indice = i
    const [i, setI] = useState(i) */


    
    function Adicionar() {
        setValor(valor + 1)
    }

    function Remover() {
        setValor(valor - 1)
    }
 
    function um() {
        setValor(1)
    }

    function dois() {
        setValor(2)
    }

    function tres() {
        setValor(3)
    }

    function quatro() {
        setValor(4)
    }

    function cinco() {
        setValor(5)
    }

    function seis() {
        setValor(6)
    }

    function sete() {
        setValor(7)
    }

    function oito() {
        setValor(8)
    }

    function nove() {
        setValor(9)
    }
/*
    function soma() {
        setI(i + i)
    }

    function sub() {
        setI(i - i)
    }

    function multi() {
        setI(i * i)
    }

    function divide() {
        setI(i / i)
    } */

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <Button
                    className="btn btn-success"
                    onClick={Adicionar}
                >
                    Adicionar
                </Button>
                <Button
                    className="btn btn-danger"
                    onClick={Remover}
                >
                    Remover
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={um}
                >
                    1
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={dois}
                >
                    2
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={tres}
                >
                    3
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={quatro}
                >
                    4
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={cinco}
                >
                    5
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={seis}
                >
                    6
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={sete}
                >
                    7
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={oito}
                >
                    8
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={nove}
                >
                    9
                </Button>
               
               {/*  <Button
                    className="btn btn-secondary"
                    onClick={soma}
                >
                    +
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={sub}
                >
                    -
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={multi}
                >
                    *
                </Button>
                <Button
                    className="btn btn-secondary"
                    onClick={divide}
                >
                    ÷
                </Button>
                    
                {/*  <Button
                    className="btn btn-secondary"
                    onClick={porcento}
                >
                    %
                </Button>
                 */}
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;