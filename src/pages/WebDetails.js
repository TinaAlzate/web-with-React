import { Accordion } from '../components/AccordionItem'
import { Service } from '../components/Service'
import '../styles/web-details.css'
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7 } from '../components/icons/IconsWebDetails'
import ContactForm from '../components/ContactForm'
import { IconScrollDown } from '../components/icons/IconScrollDown'

const WebDetails = () => {
  const items = [
    {
      icon: <Icon1 />,
      title: 'Páginas web',
      content: 'En AC data tech desarrollamos webs adaptadas a las necesidades y proyecto empresarial con el objetivo de ofrecer a nuestros clientes un servicio profesional con la máxima calidad y a un precio competitivo. Ofrecemos un servicio completo según las peticiones de nuestros clientes, poniendo énfasis a las necesidades de pymes y negocios. Trabajamos según estándares de webs dinámicas que permiten ajustarse a los requerimientos de nuestros clientes y ampliar los contenidos web según se desee.Una buena página web es una herramienta muy poderosa para incrementar las ventas. Creamos páginas web amigables y sencillas para el usuario y le ayudamos a encontrar lo que busca.'
    },
    {
      icon: <Icon2 />,
      title: 'Diseño de aplicaciones web',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon3 />,
      title: 'Tiendas online o ecommerce',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon4 />,
      title: 'Integración de servidores web',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon5 />,
      title: 'Servicios web JSON',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon6 />,
      title: 'Bases de datos',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    },
    {
      icon: <Icon7 />,
      title: 'Integraciones API',
      content: 'Realizamos el diseño de páginas webs en siguiendo los más estrictos estándares de calidad y usabilidad de usuario para diseñar webs con una alta probabilidad de conversión y de generar negocio para tu empresa. Usamos tecnologías como AdobeXD, PhotoShop, Figma, Google Fonts, entre otros, para ofrecerte el mejor diseño web.'
    }
  ]

  const titleForm = 'Completa el formulario y te responderemos a la brevedad posible.'

  const subtitleForm = 'En un mundo impulsado por la tecnología, estamos aquí para impulsarte a ti. Cuéntanos en que podemos ayudarte a lograr tus metas mediante nuestras soluciones innovadoras. '

  return (
    <section className="section-web-details">

      <div className='header-development'>

        <div className="container-img">
          <h2>Desarrollo web</h2>
          <a className="btn-scroll" href="#contact">
            <div className="btn-scroll-box"><IconScrollDown /></div>
            <span className="btn-scroll-text">Más información</span>
          </a>
        </div>

        <div className="accordion container-fluid" id="accordionExample">
          <div>
            <Accordion items={items} />
          </div>
        </div>

      </div>

      <ContactForm page='page-services' title={titleForm} subtitle={subtitleForm} />

      <div className="body-development container-fluid">

        <h3 className="title-others-servicies">Otros de nuestros servicios</h3>

        <div className="web-details">
          <Service path="/security" title="Seguridad" />
          <Service path="/maintenance" title="Mantenimiento" />
          <Service path="/cloud" title="Servicios en la nube" />
          <Service path="/business-optimization" title="Optimización de negocio" />
          <Service path="/business-intelligence" title="Inteligencia de negocio" />
        </div>

      </div>

    </section>
  )
}

export default WebDetails
