import Image from 'next/image'

export default function ContentBanner() {
  return (
    <section className="pt-[49px] w-full bg-blue-secondary">
      <div className="container mx-auto max-w-8xl">
        <div className="flex items-start justify-between content-start flex-row-reverse flex-wrap px-7">
          <div className="col-lg-6 pt-[170px] basis-1/2 pl-[90px]">
            <h2 className="text-[41px] px-1 font-JakartaSansMedium pt-[11px] leading-[2.5rem] color-copy-default">Pronto para triplicar sua</h2>
            <h3 className="text-[42px] px-1 font-JakartaSansBold pt-[8px] leading-[3rem] mb-[11px] color-copy-default">Geração de Leads?</h3>
            <p className="px-1 mb-4 font-JakartaSansMedium text-[23px] color-copy-default">Criação e ativação em <span className="font-JakartaSansExtraBold">4 minutos</span></p>
            <div className="col-xl-12 col-lg-12">
              <hr className="h-0.5 mt-5 mb-6 bg-[#C8D4DD] border-0 dark:bg-gray-700" />
            </div>
            <div className="col-xl-12 col-lg-12 flex items-start content-start justify-start">
              <div className='col-lg-12 mr-[16px]'>
                <a className="button_blue mt-[2px] text-start font-JakartaSansBold text-[17px]" href="https://leadster.com.br/" target="_blank" rel="noopener noreferrer">VER DEMONSTRAÇÃO</a>
              </div>
              <div className='col-lg-12'>
                <Image
                  src="/images/selo_RD.png"
                  alt="RD Logo"
                  className="dark:invert"
                  width={205}
                  height={73}
                />
              </div>
            </div>
            <div className="col-xl-12 col-lg-12 flex pt-2">
              <div className='col-lg-7 mr-[1px] flex items-center content-center'>
                <Image
                  src="/images/no-card-dark.webp"
                  alt="Não é necessário Cartão de Crédito"
                  className="dark:invert align-middle"
                  width={16}
                  height={16}
                />
                <p className="px-1 font-JakartaSansBold text-[15px]"><span className="font-JakartaSansExtraBold">Não</span> é necessário Cartão de Crédito |</p>
              </div>
              <div className='col-lg-5 flex items-center pl-4'>
                <Image
                  src="/images/rating.webp"
                  alt="4.9/5 Estrelas"
                  className="dark:invert align-middle"
                  width={92}
                  height={16}
                />
                <p className="px-1 font-JakartaSansBold text-[15px]"><span className="font-JakartaSansExtraBold">4.9</span>/5 média de satisfação</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center px-0 basis-1/2">
            <Image
              src="/images/comparativo_img_CTA.png"
              alt="Leadster Logo"
              className="dark:invert"
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
