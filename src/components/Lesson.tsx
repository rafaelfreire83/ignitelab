import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from 'date-fns'
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  });

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="block mb-2 text-gray-300">
        {availableDateFormatted}
      </span>
      <div className="p-4 border border-gray-500 rounded mt-2 group-hover:border-green-500">
        <header className="flex justify-between items-center">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="px-2 py-[2px] text-white font-bold border text-xs  border-green-300 rounded">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  )
}