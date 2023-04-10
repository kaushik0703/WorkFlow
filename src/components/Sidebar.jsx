import React, { useEffect, useState } from 'react';


export default () => {
  const [modules, setModules] = useState([]);
  const [page, setPage] = useState(1);
      const updateModules = async (page) => {
        let url = `https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=${page}&limit=5`;
          try {
              const res = await fetch(url);
              const data = await res.json();
              console.log(data);
              setModules(data);
          } catch (e) {
              console.log(e);
          }
      }

      useEffect(() => {
          updateModules(page);
      },[])

      const handlePreviousClick = async () => {

        updateModules(page - 1); //here as setState is not called state is same as previous
        setPage(page - 1);
      }
    
      const handleNextClick = async () => {
          
          updateModules(page + 1);
          setPage(page + 1);
      }

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="mx-6 description text-xl">Modules.</div>
      {
        modules.map((curr) => {
            const {name, id, input_type, output_type} = curr;
            const inputType = input_type.toUpperCase()
            const outputType = output_type.toUpperCase()
            return (
              <div className="flex justify-center border-2 cursor-grab rounded-lg mb-4 border-sky-400 text-center" onDragStart={(event) => onDragStart(event, `${name}`)} draggable key={id}>
                <span className="border-r-sky-400 font-bold border-r-2 pl-2 pr-2 text-[16px]">{inputType}</span>
                <span className="text-[16px] px-2 h-115 bg-blue-100">{name}</span>
                <span className="border-l-sky-400 font-bold border-l-2 pl-2 pr-2 text-[16px]">{outputType}</span>
              </div>
            )
        })
    }
    <div className="flex justify-between">
      <button disabled={page<=1} type="button" className="text-lg hover:text-[20px] rounded-lg" onClick={handlePreviousClick}  >&larr; Previous</button>          
      <button type="button" className="text-lg hover:text-[20px] rounded-lg" onClick={handleNextClick} >Next &rarr;</button>
    </div>
    </aside>
  );
};
