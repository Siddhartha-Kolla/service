import React from 'react'

const Sale = () => {
    return (
        <div className=" flex flex-col justify-between items h-screen text-center" style={{fontSize: '2em', fontWeight: 'bold'}}>
            <a className="flex flex-col justify-between items-center" style={{backgroundColor: 'lightblue', display: 'inline-block' }}>Hier werden Ihnen bei Rabattaktionen unsere reduzierten Artikel angezeigt</a>
            <p>     </p> <br/>
            <p>     </p> <br/>
            <p>     </p> <br/>
            <p>     </p> <br/>
            <p>     </p> <br/>
            <p>     </p> <br/>
            <a>Im Moment haben wir keine laufenden Rabattaktionen</a>
            <a href="/" className="underline flex flex-col justify-between items h-screen text-center" style={{fontSize: 'small', fontWeight: 'normal'}}>
              Zurück zur Startseite
            </a>
        </div>
    )
}
 
export default Sale