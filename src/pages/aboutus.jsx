import React from 'react'
import './aboutus.css'

const AboutUs = () => {
    return (
        <div className="h-screen" style={{fontSize: '1.5em'}}>
            <img src="quibiq-logo.jpg" alt="test" className='firstpic'/>
            <p>   </p><br/>
            <p className="text-left"><u>Das Unternehmen</u></p>
            <p style={{width: '40%'}}>
                QUIBIQ ist Kompetenzführer für Connectivity-Lösungen auf der Microsoft Plattform im deutschsprachigen Raum. Das Unternehmen hat sich seit seiner Gründung 2000
                auf Integration spezialisiert und in mehr als 20 Jahren, schon mehr als 800 Projekte in Deutschland, sowie in Österreich und der Schweiz absolviert.
            </p>
            <p>   </p><br/>
            <p>   </p><br/>
            <p>   </p><br/>
            <p>   </p><br/>
            <img src="unsere_Startseite.jpeg" alt="test" className='secondpic'/>
            <p className="text-right"><u>Das Projekt</u></p>
            <p className="text-right" style={{float: "right", width: '40%', textAlign: 'justify'}}>
                Diese Website entstand während eines Schülerpraktikums der 9. Klasse. Sie wurde über zwei Wochen hinweg in Partnerarbeit erstellt, 
                wobei die Schüler*innen fünf Tage die Woche, sechs Stunden gearbeitet haben.<br/>
                Am ersten Tag des Praktikums gab es die Wahl zwischen fünf verschiedenen Projekten, die sich jedoch alle im Kern sehr ähnlich waren. Die Wahl, 
                eine Seite für einen Getränkeservice zu erstellen, fiel aus keinen bestimmten Grund, sondern aus Zufall.<br/>
                Von diesem Zeitpunkt aus beginnend, wurde täglich am ausgewählten Projekt gearbeitet. Über den Erstentwurf, der jedoch später wieder verworfen wurde, die Erstellung eines 
                eigenen Logos und die Suche nach passenden Bildern, war alles dabei. Auch ein Tag, an dem leider nicht zusammen im Büro, sondern getrennt von zu Hause aus, gearbeitet werden musste.
                Dies bereitete jedoch keine weiteren Probleme, sodass am Ende der zwei Wochen nun das hier sichtbare Ergebnis steht.
            </p>
        </div>
    )
}
 
export default AboutUs