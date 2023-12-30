"use server";
import { prisma } from "@/lib/prisma";
import { Noqui } from "@prisma/client";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const handleSubmit = async (formData: FormData) => {
    "use server";
    try {

        const jsonData: { [key: string]: any } = {} as Noqui;
        formData.forEach((value, key) => {
            if (["sueldo", "antiguedadCarg"].includes(key)) {
                jsonData[key] = Number(formData.get(key));
            } else {
                jsonData[key] = formData.get(key) as string;
            }
            if (!value) {
                delete jsonData[key];
            }
        });
        for (var propiedad in jsonData) {
            if (propiedad.startsWith("$")) {
                delete jsonData[propiedad];
            }
        }

        await prisma.noqui.create({ data: jsonData as Noqui });
        return redirect('/')
        // return NextResponse.redirect(new URL('/todos'))
    } catch (error) {
        console.log(error)
    }

};