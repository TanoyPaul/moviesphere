import React from 'react';

function MovieCard({data}) {
  return (
    <>   
    <div className='flex flex-col rounded-md gap-3 overflow-hidden max-w-64 w-fit bg-slate-700 cursor-pointer shadow-lg hover:opacity-80 hover:shadow-2xl hover:translate-y-[-8px] transition-all'>
        <div className="img-div h-80 w-64">
        <img className='w-full h-full object-cover object-center' src={data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/400'} alt="" />
        </div>
        <div className='px-2 pb-2 flex flex-col flex-wrap'>
        <p className='opacity-90 tracking-widest uppercase'>{data.Type}</p>
        <h2 className='text-lg w-full'>{data.Title}</h2>
        </div>
    </div>
    </>
  );
}

export default MovieCard;
