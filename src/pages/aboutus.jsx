import React from 'react'

const AboutUs = () => {
    return (
        <div className="h-screen" style={{fontSize: '1.5em'}}>
            <p className="text-left"><u>Das Unternehmen</u></p>
            <p style={{width: '40%'}}>
                <ul>Ziel</ul>
                <ul>Infos darüber, was gemacht wird</ul>
                <ul>ggf. Sonstiges</ul>
            </p>
            <p className="text-right"><u>Das Projekt</u></p>
            <p className="text-right" style={{float: "right", width: '40%'}}>
                <ul>Praktikum und Infos dazu</ul>
                <ul>Infos zur Erarbeitung</ul>
                <ul>ggf. Sonstiges</ul>
            </p>
        </div>
    )
}
 
export default AboutUs