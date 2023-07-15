import Image from 'next/image'

export default function ContentBanner() {
  return (
    <section className="2xl:pt-[49px] xl:pt-0 w-full bg-blue-secondary">
      <div className="container mx-auto ">
        <div className="flex items-start justify-between flex-col-reverse lg:flex-row-reverse flex-wrap px-7 grid-cols-2 content-center ">
          <div className="py-[50px] 2xl:pt-[170px] basis-1/2 2xl:pl-[90px] xl:justify-self-end md:self-center 2xl:self-start">
            <h2 className="text-[41px] px-1 font-JakartaSansMedium pt-[11px] leading-[2.5rem] text-copy-default">Pronto para triplicar sua</h2>
            <h3 className="text-[42px] px-1 font-JakartaSansBold pt-[8px] leading-[3rem] mb-[11px] text-copy-default">Geração de Leads?</h3>
            <p className="px-1 mb-4 font-JakartaSansMedium text-[23px] text-copy-default">Criação e ativação em <span className="font-JakartaSansExtraBold">4 minutos</span></p>
            <div className="">
              <hr className="h-0.5 mt-5 mb-6 bg-[#C8D4DD] border-0 dark:bg-gray-700" />
            </div>
            <div className="flex items-start content-start justify-start">
              <div className='mr-[16px]'>
                <a className="button_blue mt-[2px] text-start font-JakartaSansBold text-[11px] sm:text-[17px]" href="https://leadster.com.br/" target="_blank" rel="noopener noreferrer">VER&nbsp;DEMONSTRAÇÃO</a>
              </div>
              <div className=''>
                <Image
                  src="/images/selo_RD.png"
                  alt="RD Logo"
                  className="invertImage"
                  width={205}
                  height={73}
                />
              </div>
            </div>
            <div className="flex pt-2 xl:flex-row lg:flex-col flex-wrap">
              <div className='mr-[1px] flex items-center content-center  pr-4'>
                <Image
                  src="/images/no-card-dark.webp"
                  alt="Não é necessário Cartão de Crédito"
                  className="align-middle"
                  width={16}
                  height={16}
                />
                <p className="px-1 font-JakartaSansBold text-[15px] text-copy-default"><span className="font-JakartaSansExtraBold">Não</span> é necessário Cartão de Crédito |</p>
              </div>
              <div className='flex items-center'>
                <Image
                  src="/images/rating.webp"
                  alt="4.9/5 Estrelas"
                  className="align-middle"
                  width={92}
                  height={16}
                />
                <p className="px-1 font-JakartaSansBold text-[15px] text-copy-default"><span className="font-JakartaSansExtraBold">4.9</span>/5 média de satisfação</p>
              </div>
            </div>
          </div>
          <div className="lg:pt-[70px] md:pt-[50px] text-center px-0 basis-1/2 ">
            <Image
              src="/images/comparativo_img_CTA.png"
              alt="Leadster Logo"
              className="invertImage"
              width={739}
              height={666}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
    
    
  )
}
