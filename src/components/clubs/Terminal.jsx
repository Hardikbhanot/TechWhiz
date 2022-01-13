import React,{useState} from 'react'
import './clubs.scss';
import data from '../../data/clubs.json';
const Terminal=()=>{
    var [element,setElement] = useState([])
    const [ky,setKey] = useState(1) 
    const [flag,setFlag] = useState(false) 
    let [content,setContent] = useState()
    
    const  Menu = (prop)=> {
        const chunnu =(event)=>{

          if(event.key==='Enter'){
          let dataE = event.target.value;
          switch(dataE){
              case '1':  
                  setContent(data.coding.content)
                  event.target.disabled = true;
                  setElement()
                  break;
              case '2':
                  setContent(data.game.content);
                  event.target.disabled = true;
                  setElement()
                  break;
              case '3':
                  setContent(data.gd.content);
                  event.target.disabled = true;
                  setElement()
                  break;
              case '4':
                  setContent(data.quiz.content);
                  event.target.disabled = true;
                  setElement()
                  break;
              case '5':
                  setContent(data.webd.content);
                  event.target.disabled = true;
                  setElement()
                  break;
              case '6':
                  setContent(data.webd.content);
                  event.target.disabled = true;
                  setElement()
                  break;
  
              default:
                    setContent("Please Choose a correct Option") 
                    event.target.disabled = true;
                    setFlag(true)
                    setElement()
                  break;
          
      }}

      }
      
      return (
          <>
          <div className='content'>{prop.con}</div>
          <div className='mainApp'>
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
                onKeyDown={(e)=>chunnu(e)}/>
    </div>
    </>
      )
  }

setElement=()=>{
    if(!flag){
        setKey(ky+1)
        element.push(ky) 
    }else{
        element.length=0;
    }

}

return (
      <div className='menuu'><Menu/>{element.map((data)=><Menu con={content} key={data}/>)}</div>
   )
}
export default Terminal
