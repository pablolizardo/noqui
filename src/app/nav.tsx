
import Noqui from "@/components/common/noquis/noquis";
import { Button } from "@/components/ui/button";
import { CircleDot, Plus } from "lucide-react";
import Link from "next/link";

const Nav = () => {
    return (<nav className="flex gap-5 max-w-6xl mx-auto  p-5 justify-between">
        <Button className="uppercase text-lg" asChild variant={'ghost'}>
            <Link href={'/'}>
                <Noqui className="w-10 h-10 mr-2" />
                DENUNCIA UN NOQUI
            </Link>
        </Button>
        <div className="flex gap-4">
            <Button className="uppercase" asChild>
                <Link href={'/nuevo'}>
                    <Plus className="mr-2 w-4 h-4" />
                    Nuevo Ñoqui
                </Link>
            </Button>
            <Button className="uppercase" variant={'outline'} asChild>
                <Link href={'/todos'}>
                    <CircleDot className="mr-2 w-4 h-4" />
                    Ver Plato
                </Link>
            </Button>
        </div>
    </nav>);
}

export default Nav;