import Tarefa from '../Tarefa/Tarefa'
function ListaTarefas(){
    let tarefas=["t1","t2","t3"]
    return(
    <>
    <ul>
    {tarefas.map((item,i)=><Tarefa texto={item}/>)}
    </ul>
    </>    
    )
}

export default ListaTarefas