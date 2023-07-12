import Image from 'next/image'
import { useState,useEffect, ReactNode, useMemo } from 'react'
import Pagination from './pagination';


async function getVideos() {
  let response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/videos.json`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  })
  let data = await response.json()
  return data;
}
const ContentVideos = () => {
  const  [videos, setVideos] = useState([])
  
  useEffect(() => {
    getVideos().then(data => {
      setVideos(data['videos'])
    }, error => {

    })    
  },[])

  const [paginaAtual, setPaginaAtual] = useState(1);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const resultadosPorPagina = 9;
  const indiceInicial = (paginaAtual - 1) * resultadosPorPagina;
  const indiceFinal = paginaAtual * resultadosPorPagina;
  const dadosFiltrados = categoriaSelecionada ? videos.filter((registro) => registro.type === categoriaSelecionada) : videos;
  const resultadosPaginados = dadosFiltrados.slice(indiceInicial, indiceFinal);
  const numeroDePaginas = Math.ceil(dadosFiltrados.length / resultadosPorPagina);

  const trocarPagina = (novaPagina) => {
    setPaginaAtual(novaPagina);
  };

  const aplicarFiltroCategoria = (categoria: string) => {
    if(categoriaSelecionada === categoria) {
      setCategoriaSelecionada(null);
    } else {
      setCategoriaSelecionada(categoria);
    }
    setPaginaAtual(1);
  };

  const gerarBotoesPagina = () => {
    const botoes = [];
    for (let i = 1; i <= numeroDePaginas; i++) {
      botoes.push(
        <div className="buttonPages">
          <button
            key={i}
            onClick={() => trocarPagina(i)}
            disabled={i === paginaAtual}
            className='font-JakartaSansMedium text-copy-default justify-self-end text-[24px] px-[14px] py-[3px]'
          >
            {i}
          </button>
        </div>
      );
    }
    return botoes;
  };

  const gerarBotoesCategoria = () => {
    const categorias = ['Agências', 'Chatbot', 'Marketing Digital', 'Geração de Leads', 'Mídia Paga']; 
    const botoes = categorias.map((categoria) => (
      <button
        type='button'
        className={`button_videos ${(categoria === categoriaSelecionada) ? ' active' : ''}`}
        key={categoria}
        onClick={() => aplicarFiltroCategoria(categoria)}
      >
        {categoria}
      </button>
    ));
    return botoes;
  };

  
  return (
    <section className="pt-[92px] pb-[109px] w-full">
      <div className="mx-auto max-w-6xl py-lg-5 px-4 sm:px-5 lg:px-1.5 pb-[30px] text-center">
        <div className="grid justify-items-stretch py-lg-2">
          <div className='menuVideos'>
            <div className="flex flex-row">
              <div className="grid-cols-8 basis-2/3 flex justify-start">
                {gerarBotoesCategoria()}
              </div>
              <div className="grid-cols-4 basis-1/3 flex flex-row justify-end">
                <span className='font-JakartaSansExtraBold py-[6px] justify-self-end text-[15px] pr-[14px]'>Ordernar por</span>
                <div className="buttonSelect border divide-solid border-[#2c3e50] rounded-xl px-[8px] py-[5px]">
                  <div className="">
                    <div className="flex justify-between items-center">
                      <h3 className="mr-[4px]">Data de Publicação</h3>
                      <svg stroke="currentColor" fill="currentColor" viewBox="0 0 320 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                        <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className='hidden'>
                    <div className="_style_selector__5Dlrk flex justify-between items-center my-2">
                      <p className="f_size_18 mb-0">Data de Publicação</p>
                    </div>
                    <div className="_style_selector__5Dlrk flex justify-between items-center my-2">
                      <p className="f_size_18 mb-0">Nome</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12 col-lg-12">
          <hr className="h-0.5 mt-6 mb-8 bg-[#D5D9DD] border-0 dark:bg-gray-700" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl py-lg-5 px-4 sm:px-5 lg:px-1.5 pb-16 text-center">
        <div className="flex flex-row flex-wrap justify-between gap-x-4 gap-y-7 grid grid-cols-3">
          {resultadosPaginados.map((resultado, index) => {
            return  <div className="box_video md:max-w-[360px]" key={index}>
                      <div className="thumb_video">
                        <Image
                          src={`/videos/thumbs/${resultado.thumb}`}
                          alt={resultado.title}
                          className="dark:invert text-center mx-auto"
                          width={360}
                          height={200}
                        />
                      </div>
                      <div className="title_video text-left font-JakartaSansBold text-[17px] leading-5 px-[33px] pt-[22px] pb-[25px] rounded-b-lg text-copy-default">
                        {resultado.title}
                      </div>
                    </div>
          })}
        </div>
        <div className="col-xl-12 col-lg-12">
          <hr className="h-0.5 mt-[76px] mb-[28px] bg-[#D5D9DD] border-0 dark:bg-gray-700" />
        </div>
        { numeroDePaginas > 1 && ( 
        <div className="col-xl-12 col-lg-12">
          <div className="col-xl-12 col-lg-12 flex flex-row justify-center py-[5px] ">
            <span className='font-JakartaSansBold text-copy-default leading-10 justify-self-end text-[24px] px-[14px]'>Página</span>
            {gerarBotoesPagina()}
          </div>
        </div>
        ) }
      </div>
      
    </section>
    
  )
}
export default ContentVideos;
