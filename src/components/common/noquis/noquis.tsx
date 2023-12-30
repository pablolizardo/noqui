/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import noqui01 from './noqui_01.svg'
import noqui02 from './noqui_02.svg'
import noqui03 from './noqui_03.svg'
import noqui04 from './noqui_04.svg'
import noqui05 from './noqui_05.svg'
import noqui06 from './noqui_06.svg'
import noqui07 from './noqui_07.svg'
import noqui08 from './noqui_08.svg'
import noqui09 from './noqui_09.svg'
import noqui10 from './noqui_10.svg'
import noqui11 from './noqui_11.svg'
import noqui12 from './noqui_12.svg'
import noqui13 from './noqui_13.svg'
import noqui14 from './noqui_14.svg'
import noqui15 from './noqui_15.svg'
const ids = [noqui01, noqui02, noqui03, noqui04, noqui05, noqui06, noqui07, noqui08, noqui09, noqui10, noqui11, noqui12, noqui13, noqui14, noqui15,]
const Noqui = ({ id, className, style }: { id?: number; className?: string; style?: React.CSSProperties }) => {
    return <Image style={style} className={className} src={ids[id || 0]} alt="Noqui 1" />
}

export default Noqui