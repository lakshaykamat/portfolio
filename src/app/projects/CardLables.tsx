const InProgress = 
        <div className="absolute px-2 py-1 rounded outline outline-1 outline-green-500 right-3 top-3">
            <span className="text-sm font-bold text-green-500">In progress</span>
        </div>

const Completed =
        <div className="absolute px-2 py-1 rounded outline outline-1 outline-pink-500 right-3 top-3">
            <span className="text-sm font-bold text-pink-500">Completed</span>
        </div>
        
const Obj = {
    InProgress,Completed
}
export default Obj