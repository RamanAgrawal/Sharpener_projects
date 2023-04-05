import React from 'react'


const Footer = () => {
    return (
  
        <footer style={{
        bottom:'0',
        position:'relative',
        width:'100%'
        
    }} className="p-3 bg-dark text-white d-flex justify-content-around" >
            <span className="display-4 font-weight-bolder" style={{fontFamily:"serif"}}>My Generics</span>
                    
            <div className="d-flex">
               
                <button type="button" className="btn mx-3">
                    <img src="https://toppng.com/uploads/preview/youtube-play-button-pn-11545514822bk31y8sdg5.png" alt="Youtube" height="30px" />
                </button>
                <button type="button" className="btn mx-3"><img src="https://www.pngplay.com/wp-content/uploads/13/Ig-Icon-PNG-Clipart-Background.png" alt="Instagram" height="30px" /></button>
                <button type="button" className="btn  mx-3"><img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7915717/facebook-icon-md.png" alt="Facebook" height="30px" /></button></div>
                </footer>
               
    )
}

export default Footer