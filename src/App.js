import React from 'react';
import "./App.css";

function App() {
    let currDate = new Date();
    currDate = currDate.getHours();

    let greeting = "";

    const cssStyle = {};

    if (currDate >= 1 && currDate < 12) {
        greeting = "Good Morning";
        cssStyle.color = "#02c39a";
    } else if (currDate >= 12 && currDate < 16) {
        greeting = "Good Afternoon";
        cssStyle.color = "#ffba08";
    } else if (currDate >= 16 && currDate < 20) {
        greeting = "Good Evening";
        cssStyle.color = "#e76f51";
    } else {
        greeting = "Good Night";
        cssStyle.color = "#6c757d";
    }

    return (
        <React.Fragment>
            <div>
                <h1>
                    Hello Shashank, <span style={cssStyle}> {greeting} </span>
                </h1>
            </div>
        </React.Fragment>
    )
}

export default App;
