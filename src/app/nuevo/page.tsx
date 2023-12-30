import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Organismo } from "@prisma/client";
import { handleSubmit } from "./actions";
import SelectProvinciaYCiudad from "./select-provincia";
import SubmitButton from "./submit-button.client";

const Page = () => {

  return (
    <>
      <form action={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle> Nuevo Ñoqui </CardTitle>
            <CardDescription>
              Recuerde que su denuncia será anonima en caso de que usted así lo
              desee.
            </CardDescription>
          </CardHeader>
          {/* <FormStatus /> */}
          <CardContent className="grid gap-4 [&>label]:grid [&>label]:gap-2">
            <label>
              Nombre y apellido
              <Input
                name="nombre"
                placeholder="Nombre y Apellido"
                variant={"filled"}
              />
            </label>
            <label>
              Sueldo por mes
              <Input
                name="sueldo"
                placeholder="$"
                variant={"filled"}
                type="number"
              />
            </label>
            <label>
              Dependencia Pública
              <Select name="organismo">
                <SelectTrigger>Elegir...</SelectTrigger>
                <SelectContent>
                  {Object.keys(Organismo).map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <label>
              Años de antiguedad
              <Input name="antiguedadCarg" placeholder="1" variant={"filled"} />
            </label>

            <SelectProvinciaYCiudad />
            <SubmitButton />
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default Page;
