export default function StatusRender(props: { color: any, name: any }) {
    return (
        <div className="status" style={{color:props.color, border: `2px solid ${props.color}` }} >
            {props.name}
        </div>
    )
}