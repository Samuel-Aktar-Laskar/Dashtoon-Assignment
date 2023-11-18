export default function ButtonOutline(props){
    return <button onClick={props.onClick}
     className={`border block ${props.className} border-pink-700 text-pink-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-2xl`}>
        {props.text}
        </button>
}