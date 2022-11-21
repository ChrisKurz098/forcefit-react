

export default function ForceFitContainer({ children, className, id, normalHeight, normalWidth }) {

    const h = window.innerHeight;
    const w = window.innerWidth;

    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: '0px', left: '0px' }}>
            <div className={className} id={id} style={{
                position: 'relative',
                width: `${((w / h) > 1.8) ? 'normalWidthpx' : '200%'}`,
                transformOrigin: 'top left',
                transform: `scale(${((w / h) > 1.8) ? h / 1000 : .5})`, 
                left: `${((w / h) > 1.8) ? (w - (h / normalHeight) * normalWidth) / 2 : 0}px`,
                top: `${(h - (w / normalWidth) * normalHeight) / 2}px`
            }}>
                {children}
            </div>
        </div>

    )
}