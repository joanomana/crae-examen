import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { TbCircleNumber5Filled } from "react-icons/tb";
import Card from '../storage/img/crae-2.svg'
import Card1 from '../storage/img/crae-3.svg'
import Card2 from '../storage/img/crae-4.svg'
import Card3 from '../storage/img/crae-5.svg'
import Card4 from '../storage/img/crae-6.svg'




function Section () {
return (
    <div className="flex flex-col gap-30 mt-5 w-full">
        <div className="flex flex-col gap-4 text-center">
            <h1 className="font-[RobotoCondensed-Bold] text-6xl">¿Cómo jugar?</h1>
            <p className="font-[RobotoCondensed-Regular] text-4xl">Crae posee una modalidad de juego definidas <br /> pero siempre apoyamos la creatividad y que <br /> crees tus propias reglas y modalidades.</p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
            <div className="flex items-center text-start gap-5">
                <TbCircleNumber1Filled className="text-8xl" />
                <p className="font-[RobotoCondensed-Regular] text-2xl">Uno de los jugadores hace de “creativo” en cada uno de los turnos. <br /> Observa sus 6 cartas de la mano y, de una de ellas, debe construir <br /> una frase, palabra o sonido y decirla en voz alta (sin mostrar la <br /> carta a los otros jugadores). La frase puede ser inventada o puede <br /> estar inspirada en la poesía, literatura, cine, etc. 
                </p>
                <img src={Card} alt="1" />
            </div>
            <div className="flex items-center text-start gap-5">
                <TbCircleNumber2Filled className="text-8xl" />
                <p className="font-[RobotoCondensed-Regular] text-2xl">Comenzamos el juego de izquierda a derecha. Selecciona una carta <br /> que inspire tu frase y dila en voz alta. El resto de jugadores <br /> seleccionará de entre sus cartas la que mejor se adapte a la frase <br /> construida por el creativo.
                </p>
                <img src={Card1} alt="1" />
            </div>
            <div className="flex items-center text-start gap-5">
                <TbCircleNumber3Filled className="text-8xl" />
                <p className="font-[RobotoCondensed-Regular] text-2xl">El objetivo de los jugadores es adivinar cuál de las cartas es la que <br /> el creativo usó para construir su frase. Cada jugador vota de forma <br /> secreta la carta que cree que pertenece al creativo. Para ello,<br /> coloca boca abajo frente a él un objeto que hayas escogido <br /> previamente. 
                </p>
                <img src={Card2} alt="1" />
            </div>
            <div className="flex items-center text-start gap-5">
                <TbCircleNumber4Filled className="text-8xl" />
                <p className="font-[RobotoCondensed-Regular] text-2xl">- Si todos los jugadores aciertan la carta del creativo, todos los <br /> jugadores excepto el creativo ganan 2 puntos. <br /> 
                - En cualquier otro caso, tanto el creativo como los jugadores que <br /> hayan acertado, obtienen 3 puntos. <br />
                - Todos los jugadores ganan un punto por cada voto que reciba su <br /> carta. 
                </p>
                <img src={Card3} alt="1" />
            </div>
            <div className="flex items-center text-start gap-5">
                <TbCircleNumber5Filled className="text-8xl" />
                <p className="font-[RobotoCondensed-Regular] text-2xl">Cada jugador roba cartas hasta tener 6 en su mano. El juego <br /> termina cuando se roba la última carta. El jugador que más lejos <br /> haya llegado en la escala de puntuación es el ganador.
                </p>
                <img src={Card4} alt="1" />
            </div>
        </div>
    </div>
)
}   

export default Section;