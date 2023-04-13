
type buttonProps = {
    label: string
    action: () => void
}

const ClassicButton = ({label, action}: buttonProps) => {

    return (
        <>
        <button className="border border-black w-24"
                onClick={action}>
            {label}
        </button>
        </>
    )

}

export default ClassicButton;