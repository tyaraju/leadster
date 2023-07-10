import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Banner() {
  return (
    <section className="py-[160px] w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center">
        <div className="d-flex align-items-center justify-content-center grid justify-items-stretch">
          <div className="col-xl-4 col-lg-4 px-2 justify-self-auto flex justify-center gap-x-6">
            <div className="buttonWebinars text-blue-primary border-2 border-blue-primary rounded-r-large rounded-tl-large font-JakartaSans font-bold justify-items-center px-[5px] py-[18px]">
              WEBINARS EXCLUSIVOS
            </div>
          </div>
          <div className="col-xl-12 col-lg-12 px-2">
            <h2 className="f_size_28em f_700 color_padrao_textos">
             Menos Conversinha
            </h2>
          </div>
          <div className="col-xl-12 col-lg-12 px-2">
            <h1 className="f_size_28em f_700 color_padrao_textos">
              Mais Conversão
            </h1>
          </div>
          <div className="col-xl-12 col-lg-12 px-2">
            <h1 className="f_size_28em f_700 color_padrao_textos">
              Marketing Conversacional: <span className="span_f_size_sm f_600">O Futuro da Geração de <span className="_home_underlined_blue__peSeb lozad" data-loaded="true">Leads</span></span>
            </h1>
          </div>
          <div className="d-flex align-items-center flex-wrap mt-2 mt-md-4 mb-1">
            <p className="f_size_18 color_padrao_textos">
              Plataforma para Aumentar em 3x sua Captação de Leads <span className="_home_border_14_dias__HMaYI">14 Dias Grátis</span>
            </p>
          </div>
    
        </div>
      </div>
      <Image
            src="/images/logo.png"
            alt="Leadster Logo"
            className="dark:invert"
            width={194}
            height={92}
          />
    </section>
    
  )
}
