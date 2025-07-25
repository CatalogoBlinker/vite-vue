
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

const pdfs = [
  {
    src: "/pdfs/ES01-05-09A.pdf",
    title: "01-05-09A",
  },
  {
    src: "/pdfs/ES03-01-04A.pdf",
    title: "03-01-04A",
  },
  {
    src: "/pdfs/ES03-03-06A.pdf",
    title: "03-03-06A",
  },
  {
    src: "/pdfs/ES04-01-06A.pdf",
    title: "04-01-06A",
  },
  {
    src: "/pdfs/ES04-01-11A.pdf",
    title: "04-01-11A",
  },
  {
    src: "/pdfs/ES04-01-15A.pdf",
    title: "04-01-15A",
  },
  {
    src: "/pdfs/ES04-03-01A.pdf",
    title: "04-03-01A",
  },
  {
    src: "/pdfs/ES05-05-06A.pdf",
    title: "05-05-06A",
  },
  {
    src: "/pdfs/ES05-05-06R.pdf",
    title: "05-05-06R",
  },
  {
    src: "/pdfs/ES08-02-05A1.pdf",
    title: "08-02-05A1",
  },
];

export default function CatalogoBlinker() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? pdfs.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === pdfs.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full flex flex-col items-center p-6 gap-4">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl font-semibold">Catálogo Blinker</h1>
        <a href="/pdfs/catalogo_completo.pdf" download>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" /> Descargar catálogo completo
          </Button>
        </a>
      </div>

      <iframe
        src={pdfs[index].src}
        className="w-full h-[80vh] border rounded-xl"
        title={pdfs[index].title}
      />

      <div className="flex items-center justify-between w-full">
        <Button onClick={prev} variant="secondary" className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Anterior
        </Button>
        <span className="text-muted-foreground text-sm">
          Página {index + 1} de {pdfs.length}: {pdfs[index].title}
        </span>
        <Button onClick={next} variant="secondary" className="gap-2">
          Siguiente <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
