import Text from '../storage/img/Crae-text.png';
import Dogs from "../storage/img/crae-1.png";
import { FaCartShopping } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { TbSquareLetterKFilled } from "react-icons/tb";




function Post (){
    return (
            <div id="inicio" className='flex items-center gap-3'>
                <div className='flex flex-col gap-2'>
                    <img src={Text} alt="text" className='w-auto h-auto' />
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-[RobotoCondensed-Regular] text-4xl'>Somos creatividad, somos Crae</h1>
                        <p className='text-start text-[16px]'>Crae es un juego de cartas inclusivo donde personas videntes, no <br /> videntes y con discapacidad visual pueden participar y disfrutar en <br /> conjunto.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex flex-col items-center'>
                        <img src={Dogs} alt="dogs" className='w-auto h-auto' />
                        <a href="#comprar" className='bg-black flex gap-2 px-5 w-3/5 py-1 mt-[-30px] rounded-full items-center justify-center'>
                            <FaCartShopping className='text-white' />
                            <h1 className='text-white font-[RobotoCondensed-Bold] text-2xl '>Comprar</h1>
                        </a>
                    </div>
                    <div className='flex flex-col mt-50 justify-center items-center '>
                            <a href="#Ig"><RiInstagramFill className='text-[50px]' /></a>
                            <a href="#Fb"><ImFacebook2 className='text-[40px]' /></a>
                            <a href="#Kk"><TbSquareLetterKFilled className='text-[50px]' /></a>
                        </div>
                </div>
               
            </div>
    )
}

export default Post;