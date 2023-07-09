import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Banner() {
  return (
    <section className="payment_features_area pb-0 bg_background_claro">
      <div className="container-fluid maxw_1400 px-0">
        <div className="d-flex align-items-center justify-content-center flex-column-reverse flex-xl-row flex-wrap">
          <div className="col-xl-6 col-lg-8 px-2">
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
