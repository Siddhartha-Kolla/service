import './aboutus.css'
import Container from '@/components/ui/container'

const AboutUs = () => {
    return (
			<div className='px-4'>
				<Container>
					<div className='grid gap-y-52'>
					<div className="w-full">
						<h1 className='mt-10 mb-5 font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white relief'>Das Projekt</h1>
						{/* <div className="grid md:grid-flow-col grid-cols-2">
							<p>Diese Website entstand während eines Schülerpraktikums der 9. Klasse. Sie wurde über zwei Wochen hinweg in Partnerarbeit erstellt, wobei die Schüler*innen fünf Tage die Woche, sechs Stunden gearbeitet haben.
Am ersten Tag des Praktikums gab es die Wahl zwischen fünf verschiedenen Projekten, die sich jedoch alle im Kern sehr ähnlich waren. Die Wahl, eine Seite für einen Getränkeservice zu erstellen, fiel aus keinen bestimmten Grund, sondern aus Zufall.
Von diesem Zeitpunkt aus beginnend, wurde täglich am ausgewählten Projekt gearbeitet. Über den Erstentwurf, der jedoch später wieder verworfen wurde, die Erstellung eines eigenen Logos und die Suche nach passenden Bildern, war alles dabei. Auch ein Tag, an dem leider nicht zusammen im Büro, sondern getrennt von zu Hause aus, gearbeitet werden musste. Dies bereitete jedoch keine weiteren Probleme, sodass am Ende der zwei Wochen nun das hier sichtbare Ergebnis steht.</p>
							<div className='grid justify-items-end'>
								<img className='img-shadow w-[70%] aspect-auto' src="/img/work.jpg" alt="A Table with computers on the desk with this website" />
							</div>
						</div> */}
						<div className='flex flex-col lg:flex-row lg:p-[10px] lg:items-center lg:justify-between mt-10 gap-y-14 text-lg'>
							<div className='w-full lg:w-[45%]'><img className='w-full img-shadow' src="/img/work.jpg" alt="" /></div>
							<div className='w-full lg:w-[45%] p-[10px] pt-0 text-justify'>Diese Website entstand während eines Schülerpraktikums der 9. Klasse. Sie wurde über zwei Wochen hinweg in Partnerarbeit erstellt, wobei die Schüler*innen fünf Tage die Woche, sechs Stunden gearbeitet haben.
Am ersten Tag des Praktikums gab es die Wahl zwischen fünf verschiedenen Projekten, die sich jedoch alle im Kern sehr ähnlich waren. Die Wahl, eine Seite für einen Getränkeservice zu erstellen, fiel aus keinen bestimmten Grund, sondern aus Zufall.
Von diesem Zeitpunkt aus beginnend, wurde täglich am ausgewählten Projekt gearbeitet. Über den Erstentwurf, der jedoch später wieder verworfen wurde, die Erstellung eines eigenen Logos und die Suche nach passenden Bildern, war alles dabei. Auch ein Tag, an dem leider nicht zusammen im Büro, sondern getrennt von zu Hause aus, gearbeitet werden musste. Dies bereitete jedoch keine weiteren Probleme, sodass am Ende der zwei Wochen nun das hier sichtbare Ergebnis steht.</div>
						</div>
					</div>
					<div className="w-full">
						<h1 className='mt-10 mb-5 font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white relief'>Das Unternehmen</h1>
						<div className='flex flex-col lg:flex-row lg:p-[10px] lg:items-center lg:justify-between mt-16 gap-y-6 text-lg'>
							<div className='w-full order-2 lg:order-1 lg:w-[45%] p-[10px] text-justify'>QUIBIQ ist Kompetenzführer für Connectivity-Lösungen auf der Microsoft Plattform im deutschsprachigen Raum. Das Unternehmen hat sich seit seiner Gründung 2000 auf Integration spezialisiert und in mehr als 20 Jahren, schon mehr als 800 Projekte in Deutschland, sowie in Österreich und der Schweiz absolviert.</div>
							<div className='w-full order-1 lg:order-2 lg:w-[45%]'><img className='w-full img-shadow' src="/img/berlin1.png" alt="" /></div>
						</div>
					</div>
					</div>
				</Container>
			</div>
    )
}
 
export default AboutUs