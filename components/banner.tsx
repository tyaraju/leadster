import Image from 'next/image'

export default function Banner() {
  return (
    <section className="py-[60px] sm:py-[80px] lg:pt-[160px] lg:pb-[105px] w-full bg-blue-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-1.5 pb-4 lg:pb-16 text-center">
        <div className="d-flex  align-items-center justify-content-center grid justify-items-stretch py-lg-2">
          <div className="px-2 justify-self-auto flex justify-center gap-x-6">
            <div className="text-blue-primary text-sm border-2 border-blue-primary rounded-r-large rounded-tl-large font-JakartaSansBold justify-items-center py-[5px] px-[18px]">
              <span className='font-JakartaSansExtraBold'>WEBINARS</span> EXCLUSIVOS
            </div>
          </div>
          <div className="">
            <h2 className="text-[32px] sm:text-[47px] font-JakartaSansMedium pt-[12px] text-copy-default">Menos Conversinha,</h2>
          </div>
          <div className="relative flex justify-center">
            <h1 className="title-banner text-blue-primary relative text-[47px] sm:text-[87px] font-JakartaSansBold leading-[3rem] sm:leading-[5rem]">
              Mais Conversão
              <Image
                src="/images/asset-header.png"
                alt="Leadster Asset"
                className="asset-header absolute invertImage"
                width={49}
                height={32}
              />
            </h1>
            
            
          </div>
          <div className="lg:mx-40">
           <hr className="h-px mt-8 mb-4 bg-[#C8D4DD] border-0 dark:bg-gray-700 lg:mx-10" />
          </div>
          <div className="font-JakartaSansMedium text-base sm:text-lg text-copy-default">
            Conheça as estratégias que <span className="font-JakartaSansExtraBold">mudaram o jogo</span> e como aplicá-las no seu negócio
          </div>
    
        </div>
      </div>
      
    </section>
    
  )
}
