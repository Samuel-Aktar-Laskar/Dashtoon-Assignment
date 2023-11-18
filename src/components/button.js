export default function ButtonOutline(props){
    return <button onClick={props.onClick}
     className={`border flex items-center  ${props.className} border-gray-500 text-gray-600 hover:bg-gray-400 hover:text-white px-4 py-2 rounded-3xl`}>
        {props.icon && <span class="material-symbols-outlined pr-2 text-2xl">
add
</span>}
        {props.text}
        </button>
}