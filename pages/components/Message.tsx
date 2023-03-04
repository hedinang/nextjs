export default function Message({ open, close, message }: any) {
    if (!open) return null
    return <div className="popup">
        <span>{message.content}</span>
        <img src='./icon/x.png' onClick={close} />
    </div>
}