 

export default function contextMenu({contextMenu,setContextMenu,setExpence,Ids, setExpen,expence,setEditingRowId}) {
  if(!contextMenu.left) return
  return (
    <div className='context-menu' style={contextMenu} >
      <div onClick={(e)=> {
        setContextMenu({})
         setExpence((el)=>{
          return el.filter((element)=> element.id !== Ids)
         })
        }} >Delete</div>

      <div onClick={(e)=> {
        const {title ,category , amount} = expence.find((el)=> el.id === Ids)
        setContextMenu({})
        setEditingRowId(Ids)
        setExpen({title ,category , amount})
        }} >Edit</div>
    </div>
  )
}

