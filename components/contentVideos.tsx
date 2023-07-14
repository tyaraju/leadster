import useModal from '@/hooks/useModal';
import Image from 'next/image'
import { useState,useEffect, } from 'react'

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
const ContentVideos = (props) => {
  const  [videos, setVideos] = useState([])
  
  useEffect(() => {
    getVideos().then(data => {
      setVideos(data['videos'])
    }, error => {
      console.log(error)
    })    
  },[])

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openSelect, setOpenSelect] = useState(false);
  const resultsPage = 9;
  const firstResult = (currentPage - 1) * resultsPage;
  const finalResult = currentPage * resultsPage;
  const filterData = selectedCategory ? videos.filter((result) => result.type === selectedCategory) : videos;
  const orderArray = ['Data de Publicação', 'Nome', 'Duração'];
  const orderAliasArray = ['publicacao', 'title', 'duration'];
  const [selectedNameOrder, setSelectedNameOrder] = useState(orderArray[0]);
  const [selectedAliasOrder, setSelectedAliasOrder] = useState(orderAliasArray[0]);
  const [showModal, setShowModal] = useState(false);
  
  // Ordenar os dados com base na opção de ordenação selecionada
  const dadosOrdenados = filterData.sort((a, b) => {
    //if(openSelect){
      //console.log(selectedAliasOrder);
      
      if (selectedAliasOrder === 'publicacao') {
        return new Date(a.publicacao) - new Date(b.publicacao);
      } else if (selectedAliasOrder === 'duration') {
        //console.log(a.duration.localeCompare(b.duration));
        
        return a.duration.localeCompare(b.duration);
      } else if (selectedAliasOrder === 'title') {
        return a.title.localeCompare(b.title);
      }
    //}
    return 0;
  });
  
  const pageResults = dadosOrdenados.slice(firstResult, finalResult);
  const totalPages = Math.ceil(dadosOrdenados.length / resultsPage);
  
  
  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };
  const changeOrder = (newOrder) => {    
    setSelectedAliasOrder(newOrder)
    setOpenSelect(false)
    setCurrentPage(1);
  };

  const setOrderSelect = () => {
    const orderSelect = orderAliasArray.map((order,index) => (
      <div 
        className="flex justify-between items-center my-2 px-[8px] py-[5px]" 
        key={index} 
        onClick={() => { 
          changeOrder(order); 
          setSelectedNameOrder(orderArray[index]);
        }}
      >
        <p className="mb-0 font-JakartaSansBold">{orderArray[index]}</p>
      </div>
    ));
    return orderSelect;
  }
  const setCategories = (category: string) => {
    if(selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    setCurrentPage(1);
  };

  const setButtonsPage = () => {
    const buttonsPage = [];
    for (let i = 1; i <= totalPages; i++) {
      buttonsPage.push(
        <div className="button_pages" key={i}>
          <button
            
            onClick={() => changePage(i)}
            disabled={i === currentPage}
            className='font-JakartaSansMedium text-copy-default justify-self-end text-[24px] px-[14px] py-[3px]'
          >
            {i}
          </button>
        </div>
      );
    }
    return buttonsPage;
  };

  const setCategoriesPage = () => {
    const categories = ['Agências', 'Chatbot', 'Marketing Digital', 'Geração de Leads', 'Mídia Paga']; 
    const botoes = categories.map((category,index) => (
      <button
        type='button'
        className={`button_videos mb-2 lg:mb-0 lg:mr-[12px] md:self-center min-w-[187px] lg:min-w-fit  font-JakartaSansBold ${(category === selectedCategory) ? ' active' : ''}`}
        key={index}
        onClick={() => setCategories(category)}
      >
        {category}
      </button>
    ));
    return botoes;
  };
  
  return (
    <section className="pt-[92px] pb-[109px] w-full">
      <div className="mx-auto max-w-6xl py-lg-5 px-4 sm:px-5 lg:px-1.5 pb-[30px] text-center">
        <div className="grid justify-items-stretch py-lg-2">
          <div className='menuVideos'>
            <div className="flex md:flex-row flex-col">
              <div className="lg:grid-cols-8 md:grid-cols-6 lg:basis-2/3 md:basis-1/2 flex justify-start flex-col lg:flex-row md:flex-col">
                {setCategoriesPage()}
              </div>
              <div className="lg:grid-cols-4 md:grid-cols-6 lg:basis-1/3 md:basis-1/2 flex flex-row justify-end ">
                <div className="flex flex-row justify-end">
                  <span className='font-JakartaSansExtraBold py-[6px] justify-self-start text-[15px] pr-[14px]'>Ordernar por</span>
                  <div className="min-w-[190px] ">
                    <div className="buttonSelect border divide-solid border-[#2c3e50] rounded-xl px-[8px] py-[5px]">
                      <div className="flex justify-between items-center">
                        <h3 className="mr-[4px] font-JakartaSansBold" id='selectOrder' onClick={() => {setOpenSelect(true)}}>{selectedNameOrder}</h3>
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 320 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                          <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                        </svg>
                      </div>
                    </div>
                    {openSelect && (
                    <div className='absolute border divide-solid border-[#2c3e50] rounded-xl px-[8px] py-[5px] bg-white z-10'>
                      {setOrderSelect()}
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <hr className="h-0.5 mt-6 mb-8 bg-[#D5D9DD] border-0 dark:bg-gray-700" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl py-lg-5 px-4 sm:px-5 lg:px-1.5 pb-16 text-center">
        <div className="justify-items-center md:justify-between gap-x-4 gap-y-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pageResults.map((resultado, index) => {
            return  <div className="box_video max-w-[360px]" key={index} onClick={()=> {
              props.setContentModal(resultado);
              props.toggleModal()
              }}>
                      
                      <div className="thumb_video rounded-t-[20px] overflow-hidden relative">
                        <div className="overlay absolute w-full h-full z-10 flex justify-center pt-[75px] hidden">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 0 7 7" fill="#ffffff" width="60" height="60">
                              <path d="M 4 2 C 3.994 2.03 3.855 0.979 4.659 1.056 C 5.587 1.025 7.241 2.139 8.014 2.541 C 9.406 3.236 9.437 3.793 8.045 4.535 C 7.458 4.86 5.571 6.051 4.612 6.035 C 3.87 6.097 4 5 4 5 C 4 5 4 2 4 2" stroke-width="2" stroke="#ffffff" />
                            </svg>
                          </div>
                        </div>
                        <Image
                          src={`/videos/thumbs/${resultado.thumb}`}
                          alt={resultado.title}
                          className="dark:invert text-center mx-auto"
                          width={360}
                          height={200}
                        />
                      </div>
                      <div className="title_video text-left font-JakartaSansBold text-[12px] md:text-[17px] leading-5 px-[10px] md:px-[33px] pt-[12px] md:pt-[22px] pb-[15px] md:pb-[25px] rounded-b-lg text-copy-default">
                        {resultado.title}
                      </div>
                    </div>
          })}
        </div>
        <div className="">
          <hr className="h-0.5 mt-[76px] mb-[28px] bg-[#D5D9DD] border-0 dark:bg-gray-700" />
        </div>
        { totalPages > 1 && ( 
        <div className="">
          <div className=" flex flex-row justify-center py-[5px] ">
            <span className='font-JakartaSansBold text-copy-default leading-10 justify-self-end text-[24px] px-[14px]'>Página</span>
            {setButtonsPage()}
          </div>
        </div>
        ) }
      </div>     
    </section>
    
  )
}
export default ContentVideos;
