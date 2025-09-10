import './Loaders.scss';

interface PageProps {
    className?: string;
}

export const Loaders = ({ className }: PageProps) => {
    return (
        <div className={className} data-testid="loaders">
            <span className="loader"></span>
        </div>
    )
}