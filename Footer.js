import React,{Component} from 'react';
class Footer extends React.Component{
    render(){
        var i=1;
        var myStyle ={
    
            color:'green',
            fontSize:20

        }
        return(
            <div style={myStyle}>
        
        <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
            
            </div>
        );
        
    }

}
export default Footer;