interface ExperienceItemProps {
    experience: {
        id: number;
        time: string;
        title: string;
        content: string;
    };
}

function ExperienceItem({ experience }: ExperienceItemProps) {

    return (
        <div className="relative pl-8">
            <div className="mb-1 text-sm text-muted-foreground">{experience.time}</div>
            <h3 className="mb-2 text-lg font-medium">{experience.title}</h3>
            <p className="whitespace-pre-line text-sm text-muted-foreground">{experience.content}</p>
        </div>
    );
}

export default ExperienceItem;
