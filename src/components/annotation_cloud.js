export default function AnnotationCloud(props){
    return <div className={`absolute w-[60%]  top-[3%] left-[2%] ${props.className}`}>
        <img src='/bg_cloud.png' className="w-full h-full"/>
        <p className="absolute top-[30%] left-[15%] text-gray-500 w-[75%] text-xs lg:text-sm font-comic">{props.annotation}</p>
    </div>
}