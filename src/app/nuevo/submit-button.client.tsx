'use client'
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (<Button disabled={pending} type="submit" variant={"cta"}>
        {pending ? <><Loader2 className="animate-spin" /></> : 'Denunciar'}
    </Button>);
}

export default SubmitButton;