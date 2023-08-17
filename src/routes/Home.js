import { Outlet, Link } from "react-router-dom";
import '../stylesheets/Home.css'
import Graph_logo from '../images/graph.png'
import Classic_logo from '../images/classic.png'
import Scientific_logo from '../images/scientific.png'
import Unit_logo from '../images/unit.png'
import Programming_logo from '../images/programming.png'
import Temperature_logo from '../images/temp.png'


const calcs = [{name:"Graph ",data:"xyz" , img: Graph_logo, link: "/Graph"},
{name:"Simple Calculator",data:"xyz", img: Classic_logo,link:"/Simple"},
{name:"Scientific Calculator",data:"xyz", img: Scientific_logo, link:"/Scientific"},
{name:"Programming Calculator",data:"xyz", img: Programming_logo, link:"/Programming"},
{name:"Tempreture Calculator",data:"xyz", img: Temperature_logo, link:"./Tempreture"},
{name:"Unit Calculator",data:"xyz", img: Unit_logo,link:"./Unit"},
];



export default function Home(){
   
return (<>   
        <nav>
        <div class="container">
            <div class="row">
            
               {
                calcs.map((calc)=>{
                    return (
                    <>
                      <div className="col-md-4">
                        <div className="scroll_box">
                            <Link to={calc.link}>
                                <div className="scroll_box_pic">
                                  <img src={calc.img} alt={calc.name} />
                                </div>
                                
                                <h1>{calc.name}</h1>
                            </Link>
                        </div>
                       </div>
                    </>
                    )
                    
                })
               }
               
            </div>
        </div> 
        </nav>
         <Outlet/>
        
</>)

}