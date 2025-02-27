export interface EmptyPostListProps {
    message: string;
}

function EmptyPostList({ message }: EmptyPostListProps): React.JSX.Element {
    return (
        <div className="py-12 text-center">
            <p className="text-slate-600 dark:text-slate-300">{message}</p>
        </div>
    );
}

export default EmptyPostList;
