import { CalendarIcon } from "lucide-react";
import { format, parseISO } from "date-fns";
import { zhTW } from "date-fns/locale";

export interface PostDateProps {
    date: string;
}

function PostDate({ date }: PostDateProps): React.JSX.Element {
    return (
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <CalendarIcon className="mr-1 h-4 w-4" />
            <time dateTime={date}>{date && format(parseISO(date), "yyyy-MM-dd", { locale: zhTW })}</time>
        </div>
    );
}

export default PostDate;
