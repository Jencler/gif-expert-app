import { useState } from 'react';
import { Loading } from "./Loading";
import ReactPaginate from 'react-paginate';
import { GifCard } from '../components/GifCard'
import { GetGifs } from '../helpers/GetGifs.js'

export const GridGif = ({ category }) => {
  const itemsPerPage = 4; // Número de elementos por página
  const { data, isLoading } = GetGifs(category);
  const [currentPage, setCurrentPage] = useState(0);

  if (isLoading) return <Loading />;

  // Calcular los índices de inicio y fin para la página actual
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Obtener los elementos de la página actual
  const currentItems = data.slice(startIndex, endIndex);

  // Función para cambiar de página
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };


  return (
    <>
      <div className='container-grid-gifs' key={category}>
        <h3 className='title-category-grid'>{category}</h3>
        <div className="card-grid">
          {currentItems.map(gif => (
            <GifCard key={gif.id} image={gif.images.downsized_medium.url} title={gif.title} />
          ))}
        </div>

      </div>
      <div className='container-paginate'>
        <ReactPaginate
          pageCount={Math.ceil(data.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          previousLabel="👈" // Puedes utilizar emojis, texto o incluso íconos aquí
          nextLabel="👉"
        />
      </div>
    </>
  );
};
