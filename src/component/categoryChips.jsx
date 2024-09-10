
function CategoryChip({category, isChosen, onClick}) {
    

      

    const  {name} = category 
    return(
        <div  onClick={onClick} className={`${isChosen ? 'bg-purple-400 text-white' : 'bg-white text-black'
        } cursor-pointer px-4 p-2 rounded-md 0 border m-1`}>
            <h1>{name}</h1>
        </div>
    );
}

export default CategoryChip;