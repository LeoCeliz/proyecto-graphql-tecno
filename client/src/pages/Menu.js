import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import '../css/SidebarVertical.css';
import { Menudata } from '../components/Menudata';

const cookies = new Cookies();



class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

   

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno: '+cookies.get('apellido_materno'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            
                <div className="Sidebar">
                    <ul className="SidebarList">
                        {Menudata.map((val,key)=>{
                            return(
                            <li 
                            key={key} 
                            className="row" 
                            id={window.location.pathname === val.link ? "active" : " "}
                            onClick={()=>{
                                window.location.pathname = val.link;
                                
                                }}
                                >
                                <div id="icon">{val.icon}</div>
                                    <div id="title">
                                        {val.title}
                                    </div>
                            </li>
                            );
                        })}
                            
                    
                    
                     </ul>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <div className="Cerrar"><button className="btn  btn-warning bold" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button></div>
                </div>
                
                
            
            
        );
    }
}

export default Menu;