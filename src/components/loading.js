export default function Loading(props){
      return (
        <div className={`flex items-center justify-center ${props.className}`}>
        <div className="border-t-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
        </div>
  );
}