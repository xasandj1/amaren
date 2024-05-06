import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { BiHeart, BiLayer, BiShoppingBag, BiUser } from 'react-icons/bi'

export const Navigation = () => {
    return (
        <div>
            <div className='shadow-inner z-50 fixed bg-white  bottom-0 left-0 right-0 py-5 px-6'>
                <ul className='flex items-center justify-between'>
                    <li>
                        <Link href={"/profile"}>
                            <BiUser size={30} />
                        </Link>
                    </li>
                    <li className='relative'>
                        <Link href={"/wishlist"}>
                            <BiHeart size={30} />
                            <Badge className='bg-[#FCB700] absolute top-[-15px] right-[-10px] w-[25px] h-[25px] flex items-center justify-center rounded-full' variant="outline">0</Badge>
                        </Link>
                    </li>
                    <li className='relative'>
                        <Link href={"/compare"}><BiLayer size={30} /></Link>
                        <Badge className='bg-[#FCB700] absolute top-[-15px] right-[-10px] w-[25px] h-[25px] flex items-center justify-center rounded-full' variant="outline">0</Badge>
                    </li>
                    <li className='relative'>
                        <Link href={"/cart"}><BiShoppingBag size={30} /></Link>
                        <Badge className='bg-[#FCB700] absolute top-[-15px] right-[-10px] w-[25px] h-[25px] flex items-center justify-center rounded-full' variant="outline">0</Badge>
                    </li>
                </ul>
            </div>
        </div>
    )
}
