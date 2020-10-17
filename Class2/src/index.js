const App=()=>{ //this function is now a component for a react  // PARENT component
    return(
        <div>
            <Navbar/>
        <div>
            <h1>Hello World</h1>
        </div>
        <Footer/>
            {/* <h1>Hello I am Ayesha</h1>
            <h1>This is my first React class(13-June-2020)</h1> */}
        </div>      
    );
};
const Navbar=()=>{   //component 2
    return(
        <div>
            <h1>NAVBAR</h1>
        </div>
    );
};
const Footer=()=>{ //component 3
    return(
        <div>
            <h1>Footer</h1>
        </div>
    );
};

ReactDOM.render(<App/>,document.getElementById("root"))
//book store
//books k hello world k card bnado