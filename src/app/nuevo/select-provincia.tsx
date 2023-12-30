"use client";

import provincias from "@/data/provincias";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";
const SelectProvinciaYCiudad = () => {
    const [provinciaNombre, setProvinciaNombre] = useState<string>();
    const handleSetProvincia = (id: string) => {
        setProvinciaNombre(id);
    };
    return (
        <>
            <label>
                Provincia {provinciaNombre}
                <Select name="provincia" onValueChange={handleSetProvincia}>
                    <SelectTrigger>{provinciaNombre ?? 'Elegir...'}</SelectTrigger>
                    <SelectContent>
                        {provincias.map((provincia) => (
                            <SelectItem value={provincia.nombre} key={provincia.nombre} >
                                {provincia.nombre}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </label>
            <label>
                Ciudad
                <Select name="ciudad">
                    <SelectTrigger>Elegir...</SelectTrigger>
                    <SelectContent>
                        {provinciaNombre &&
                            provincias
                                .find(({ nombre }) => nombre === provinciaNombre)
                                ?.ciudades.map((ciudad) => (
                                    <SelectItem value={ciudad.nombre} key={ciudad.nombre}>
                                        {ciudad.nombre}
                                    </SelectItem>
                                ))}
                    </SelectContent>
                </Select>
            </label>
        </>
    );
};

export default SelectProvinciaYCiudad;
