import React,{useState} from 'react';
import './clubs.scss';
import data from '../../data/clubs.json';
import ReactDom from 'react';



function Starter() {
    const [content,updateContent] = useState(0);
        
    return(<div className='mainApp'>
    <div className="inpchoices">
         <ol>
             <li>Coding Club</li>
             <li>Gaming Club</li>
             <li>Graphic Designing Club</li>
             <li>Quizzing Club</li>
             <li>Web Development Club</li>
             <li>Exit</li>
         </ol>
              
     </div>
     <label className="input" >Enter your input:</label>
         <input 
             id="input-choice"
             type="text"
             name="choice"
             
             onKeyDown={(e)=>{
                 if(e.key=="Enter"){
                    JaduMenu.chunnu(e.target.value)
                     e.target.disabled = true
                 }
               }}
            
         />
     <div className='content'>{content}</div>
     <div className='tillu'></div>
 </div>
)    
  }
class JaduMenu extends React.Component{
    constructor(props){
        super(props);
    }
    
    
    static chunnu(value){
        
        const content = document.querySelector('.content');
        content.innerHTML = ""; 
        switch(value){
            case '1':
                content.innerHTML = data.coding.content;
                
                break;
            case '2':
                content.innerHTML = data.game.content;
                break;
            case '3':
                content.innerHTML = data.gd.content;
                break;
            case '4':
                content.innerHTML = data.quiz.content;
                break;
            case '5':
                content.innerHTML = data.webd.content;
                break;
            case '6':
                content.innerHTML = data.webd.content;
                break;

            default: content.disabled=true;
                break;
        
    }
    }
    
    render(Component){
        return <Starter/>;
    
    }
        
    
}
export default JaduMenu
