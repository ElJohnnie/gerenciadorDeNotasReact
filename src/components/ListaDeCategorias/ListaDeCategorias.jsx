import React, {Component} from 'react'

class ListaDeCategorias extends Component {

    _handleEventoInput(e){
        if(e.key == "Enter"){
            console.log("Adicionar categoria")
        }
    }

    render(){
        return(
            <section>           
                <ul>
                    <li>
                        Categorias
                    </li>
                </ul>
                <input 
                    type="text"
                    className="lista-categorias_input"
                    placeholder="Adicionar categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
            </section>
        );
    }
}

export default ListaDeCategorias;