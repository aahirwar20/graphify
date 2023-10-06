import '../stylesheets/Unit.css'
import { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { HiSwitchHorizontal } from 'react-icons/hi';
import { properties, units, factors } from "../const/unit";

export default function Unit(){
    const [type, setType] = useState(0);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(1);
    const [output, setOutput] = useState(0);

    function convert() {
       const rate = factors[type][from]/factors[type][to];
        setOutput(input * rate);
    }
    function convertByInput(input) {
        const rate = factors[type][from]/factors[type][to];
         setOutput(input * rate);
     }
 
    // Function to switch between two currency
    function flip() {
        var temp = from;
        setFrom(to);
        setTo(temp);
    }
 
    
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{margin: 'auto' }}>
                        <h3>unit</h3>
                        <Dropdown
                            options={properties.map((property, index) => ({ value: index, label: property.label }))}
                            onChange={(e) => {
                                setType(e.value);
                                setFrom(0);
                                setTo(1);
                                convert()
                            }}
                            value={properties[type].label}
                            placeholder="Select Property"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <h3>Amount</h3>
                        <input
                            type="text"
                            placeholder="Enter the amount"
                            onChange={(e) => {setInput(e.target.value); convertByInput(e.target.value);}}
                        />
                    </div>
                    <div className="col-md-3">
                        <h3>From</h3>
                        <Dropdown
                            options={units[type].map((unit, index) => ({ value: index, label: unit }))}
                            onChange={(e) => {setFrom(e.value); convert();}}
                            value={units[type][from]}
                            placeholder="Select Unit"
                        />
                    </div>
                    <div className="col-md-3 switch-icon">
                        <HiSwitchHorizontal size="30px" onClick={() => {flip(); convert()}} />
                    </div>
                    <div className="col-md-3">
                        <h3>To</h3>
                        <Dropdown
                            options={units[type].map((unit, index) => ({ value: index, label: unit }))}
                            onChange={(e) => {setTo(e.value); convert()}}
                            value={units[type][to]}
                            placeholder="Select Unit"
                        />
                    </div>
                </div>
            </div>
            <div className="result">
                <button onClick={() => convert()}>Convert</button>
                <h2>Converted Amount:</h2>
                <p>{input + " " + units[type][from] + " = " + output.toFixed(2) + " " + units[type][to]}</p>
            </div>

        </>
    )
}