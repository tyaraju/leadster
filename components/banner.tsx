import Image from 'next/image'

export default function Banner() {
  return (
    <section className="pt-[160px] pb-[105px] w-full bg-blue-secondary">
      <div className="mx-auto max-w-6xl py-lg-5 px-4 sm:px-5 lg:px-1.5 pb-16 text-center">
        <div className="d-flex  align-items-center justify-content-center grid justify-items-stretch py-lg-2">
          <div className="col-xl-4 col-lg-4 px-2 justify-self-auto flex justify-center gap-x-6">
            <div className="text-blue-primary text-sm border-2 border-blue-primary rounded-r-large rounded-tl-large font-JakartaSansBold justify-items-center py-[5px] px-[18px]">
              <span className='font-JakartaSansExtraBold'>WEBINARS</span> EXCLUSIVOS
            </div>
          </div>
          <div className="col-xl-12 col-lg-12">
            <h2 className="text-[47px] font-JakartaSansMedium pt-[12px]">Menos Conversinha,</h2>
          </div>
          <div className="col-xl-12 col-lg-12 relative">
            <h1 className="text-blue-primary text-[87px] font-JakartaSansBold leading-[5rem]">Mais Conversão</h1>
            <Image
              src="/images/asset-header.png"
              alt="Leadster Asset"
              className="asset-header absolute dark:invert"
              width={49}
              height={32}
            />
            
          </div>
          <div className="col-xl-12 col-lg-12 lg:mx-40">
           <hr className="h-px mt-8 mb-4 bg-[#C8D4DD] border-0 dark:bg-gray-700 lg:mx-10" />
          </div>
          <div className="col-xl-12 col-lg-12 font-JakartaSansMedium text-lg">
            Conheça as estratégias que <span className="font-JakartaSansExtraBold">mudaram o jogo</span> e como aplicá-las no seu negócio
          </div>
    
        </div>
      </div>
      
    </section>
    
  )
}
