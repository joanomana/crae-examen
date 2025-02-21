import pc from '../storage/img/crae-7.png'
import personl from '../storage/img/crae-8.svg'
import personr from '../storage/img/crae-9.svg'
import { IoMdWater } from "react-icons/io";


function Text (){
    return(
            <div className="flex flex-col gap-20">
                <div className="flex justify-center items-center gap-5">
                    <div id="apoyanos" className="flex flex-col gap-10">
                        <h1 className="font-[RobotoCondensed-Bold] text-4xl">Apóyanos</h1>
                        <div className='flex flex-col text-[20px]'>
                            <p>Por favor, si quieres ayudarnos económicamente, no <br /> dudes en donar en Kickstarter.</p>
                            <p>Así financiarías nuestro proyecto y contribuirías a <br /> cumplir este gran sueño.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <img src={pc} alt="pc" className='' />
                        <a href="#aporte" className='bg-black text-white rounded-lg px-3 py-1'>
                            <h1>Haz tu aporte</h1>
                        </a>
                    </div>

                </div>
                <div className="flex justify-center items-center gap-5">
                    <div id="sobre" className="flex flex-col gap-10">
                        <h1 className="font-[RobotoCondensed-Bold] text-4xl">Sobre nosotros</h1>
                        <div className='flex flex-col gap-3 text-[20px]'>
                            <p>Somos Aqua, un equipo que apuesta por la <br /> inclusión, principalmente por las personas no <br /> videntes o de visibilidad reducida. <br />
                            Creemos que la diversión no debe distinguir <br /> condiciones físicas es por eso que desarrollamos <br /> “CRAE”, el cual busca ser un juego de cartas <br /> inclusivo donde personas videntes o no videntes <br /> pueden participar y disfrutar en conjunto.
                            </p>
                            <p>Puedes encontrarnos en Instagram como @crae.cl o <br /> llamarnos a nuestro número telefónico 9 7889 4758.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex relative'>
                            <img src={personl} alt="person" className='' />
                            <img src={personr} alt="person" className='ml-[-115px]' />
                        </div>
                        <div className='flex items-center'>
                            <p className='font-[RobotoCondensed-Regular] text-5xl'>AQUA</p>
                            <IoMdWater className='text-cyan-400 text-6xl' />

                        </div>

                    </div>
                </div>
            </div>
    )
}

export default Text;