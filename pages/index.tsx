import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Banner from '@/components/banner'
import ContentVideos from '@/components/contentVideos'
import ContentBanner from '@/components/contentBanner'
import { useState } from 'react'
import ModalComponent from '@/components/modal'
import useModal from '@/hooks/useModal'
import Link from 'next/link'

export default function Home() {
  const { isOpen, toggleModal } = useModal();
  const [titleVideo,setTitleVideo] = useState('')
  const [descriptionVideo,setDescriptionVideo] = useState('')
  const [urlVideo,setUrlVideo] = useState('')
  const [spreadsheetVideo,setSpreadsheetVideo] = useState('')
  const [documentVideo,setDocumentVideo] = useState('')
  const [presentationVideo,setPresentationVideo] = useState('')
  const [zipfileVideo,setZipfileVideo] = useState('')
/*
   
  /*function handleOpenModal() {
    setModalIsOpen(true)
  }
  function handleCloseModal() {
    setModalIsOpen(false)
  }
  useEffect(() => {

  }, [handleClose])*/
  function setContentModal(res) {
    setTitleVideo(res.title)
    setDescriptionVideo(res.description)
    setUrlVideo(res.url)
    setSpreadsheetVideo(res.files.spreadsheet)
    setDocumentVideo(res.files.document)
    setPresentationVideo(res.files.presentation)
    setZipfileVideo(res.files.zipfile)

    
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
    > 
    
      <ModalComponent isOpen={isOpen} toggleModal={toggleModal} >
        <div className="titleModal font-JakartaSansBold justify-self-start text-[18px] md:text-[25px] px-[25px] md:px-[70px] pb-[20px]  md:pb-[34px] leading-[28px] text-center text-copy-default">
          <span className='text-blue-primary'>Webinar:</span> {titleVideo}
        </div>
        <div className='videoModal max-w-[600px]'>
          <iframe className="w-full aspect-video" src={`https://www.youtube.com/embed/${urlVideo}`} title={titleVideo} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="footerModal text-copy-default px-[25px]">
          <div className="descrition">
            <div className="titleModal border-b mt-6 pb-[5px] border-[#D5D9DD] dark:bg-gray-700 font-JakartaSansBold text-[16px] ">Descrição</div>
            <div className='py-[5px] leading-[23px] text-[14px] sm:text-lg'>{descriptionVideo}</div>
            <div className="titleModal border-b mt-[13px] pb-[5px] border-[#D5D9DD] dark:bg-gray-700 font-JakartaSansBold text-[16px] ">Downloads</div>
            <div className="mt-[13px] pb-[33px] grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 justify-between">
              {spreadsheetVideo && (
                <Link href={`/videos/files/${spreadsheetVideo}`}>
                  <Image
                    src={`/images/spreadsheet.png`}
                    alt={titleVideo}
                    className="dark:invert text-center mx-auto "
                    width={153}
                    height={32}
                  />
                </Link>
              )}
              {documentVideo && (
                <Link href={`/videos/files/${documentVideo}`}>
                  <Image
                    src={`/images/document.png`}
                    alt={titleVideo}
                    className="dark:invert text-center mx-auto"
                    width={147}
                    height={32}
                  />
                </Link>
              )}
              {presentationVideo && (
                <Link href={`/videos/files/${presentationVideo}`}>
                  <Image
                    src={`/images/presentation.png`}
                    alt={titleVideo}
                    className="dark:invert text-center mx-auto"
                    width={161}
                    height={32}
                  />
                </Link>
              )}
              {zipfileVideo && (
                <Link href={`/videos/files/${zipfileVideo}`}>
                  <Image
                    src={`/images/folder.png`}
                    alt={titleVideo}
                    className="dark:invert text-center mx-auto"
                    width={113}
                    height={32}
                  />
                </Link>
              )}
            </div>

          </div>
        </div>
      </ModalComponent>
    
      <Header />
      <Banner />
      <ContentVideos toggleModal={toggleModal} setContentModal={setContentModal}/>
      
      <ContentBanner />
      <Footer />
    </main>
  )
}
