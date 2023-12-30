import Noqui from "@/components/common/noquis/noquis";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import provincias from "@/data/provincias";
import { prisma } from "@/lib/prisma";
import { numberToCurrency, unslugify } from "@/lib/utils";

const Todos = async () => {
  const noquis = await prisma.noqui.findMany({});

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Todos los ñoquis</CardTitle>
      </CardHeader>
      <Table>
        <TableHeader></TableHeader>
        <TableBody>
          {noquis.map((noqui) => (
            <TableRow key={noqui.id}>
              <TableCell>
                <Noqui />
              </TableCell>
              <TableCell>{noqui.nombre}</TableCell>
              <TableCell>
                {noqui.sueldo && numberToCurrency(noqui.sueldo)}
                <br />
                <small>{noqui.antiguedadCarg} años de Antiguedad</small>
              </TableCell>
              <TableCell className="capitalize">
                {noqui.organismo ? unslugify(noqui.organismo?.toLocaleLowerCase()) : ''}
                <br />
                <small>{noqui.provincia}</small>
              </TableCell>
              <TableCell>{noqui.cargo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Todos;
