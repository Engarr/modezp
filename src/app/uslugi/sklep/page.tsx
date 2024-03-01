import Image from 'next/image';
import React from 'react';
import LinkSmallCard from '@/components/link-small-card';
import SectionTitle from '@/components/section-header';
import Contact from '@/app/components/contact';
import ScrollDownBtn from '@/ui/scroll-down-btn';
import Link from 'next/link';

const Shop = () => {
  return (
    <div>
      <section
        className={`relative flex lg:py-10 justify-center items-center w-[100%] bg-black bg-opacity-40 min-h-[91vh] mb-10 text-white p-1 xl:p-0`}>
        <div>
          <Image
            src='/background.JPG'
            alt='backgorund'
            sizes='100vw'
            fill
            priority
            className='hidden sm:inline object-cover z-[-3] '
          />
          <Image
            src='/background-mobile.jpg'
            alt='backgorund-mobile'
            sizes='100vw'
            fill
            priority
            className='sm:hidden object-cover z-[-3] '
          />
        </div>
        <div
          className='relative top-[-7vh] container flex flex-col gradiend w-full md:w-3/4 2xl:w-1/2 
		py-3 px-5
		xl:py-5 xl:px-10'>
          <div className='flex flex-col md:flex-row flex-wrap justify-center gap-2 md:gap-4 xl:gap-6 mb-2 xl:mb-5'>
            <LinkSmallCard
              title={'Strona internetowa'}
              link={'/uslugi/strona-internetowa'}
            />

            <LinkSmallCard
              title={'Sklep Internetowy'}
              link={'/uslugi/sklep'}
              active={true}
            />
            <LinkSmallCard title={'Logo'} link={'/uslugi/logo'} />
            <LinkSmallCard
              title={'Projektowanie UI'}
              link={'/uslugi/projektowanie-ui'}
            />
          </div>
          <div className='w-[100%] bg-main-color h-[1px]' />
          <div className='sm:mb-5 py-3'>
            <h1 className='text-left text-md lg:text-xl my-2'>
              Profesjonalne tworzenie{' '}
              <span className='text-main-color font-semibold'>
                sklepów internetowych
              </span>{' '}
              (e-commerce)
            </h1>
            <p className='text-sm lg:text-lg text-start sm:text-justify'>
              Oferujemy profesjonalne usługi tworzenia sklepów internetowych
              opartych na popularnym systemie zarządzania treścią,{' '}
              <Link href='/uslugi/strona-internetowa/word-press'>
                <span className='text-main-color hover:border-b-2 border-main-color'>
                  WordPress{' '}
                </span>
              </Link>
              , w połączeniu z potężnym narzędziem do e-commerce, jakim jest
              WooCommerce.
            </p>
          </div>
        </div>
        <ScrollDownBtn />
      </section>
      <section
        className='relative container mx-auto pb-20 min-h-[65vh]'
        id='second-section'>
        <div className='w-[100%] md:w-[50%] sm:px-5 flex flex-col justify-between text-center sm:text-left'>
          <SectionTitle>sklep internetowy (e-commerce)</SectionTitle>
        </div>
        <div className='mx-5 text-md xl:mx-80 xl:text-lg'>
          <div className='mt-10'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              Rozwój twojego sklepu internetowego
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Rozwój branży e-commerce otwiera przed przedsiębiorcami nowe
              możliwości, a my jesteśmy tutaj, aby pomóc Ci wykorzystać je w
              pełni. Jeśli marzysz o własnym sklepie internetowym, który nie
              tylko przyciąga klientów, ale również zachęca ich do zakupów, to
              nasza oferta jest właśnie dla Ciebie.
            </p>
          </div>
          <div className='mt-10'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              Dostosowane rozwiązania dla każdego biznesu:
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Dobór odpowiedniego rozwiązania do tworzenia małego lub dużego
              sklepu internetowego jest kluczowym krokiem w procesie e-commerce.
              Istnieje wiele czynników, które należy wziąć pod uwagę, aby
              osiągnąć sukces w prowadzeniu sklepu online. Po pierwsze, ważne
              jest zrozumienie swoich potrzeb i celów biznesowych. Małe sklepy
              mogą skorzystać z prostszych, gotowych platform e-commerce, takich
              jak Shopify lub WooCommerce, które oferują wiele gotowych
              rozwiązań i są stosunkowo łatwe w obsłudze. Dla większych sklepów,
              które mają bardziej zaawansowane wymagania, rozważenie
              niestandardowych rozwiązań opartych na systemach takich jak
              Magento lub PrestaShop może być konieczne.
            </p>
            <p className='pb-5 leading-8 text-justify'>
              Należy także rozważyć kwestie budżetowe i koszty utrzymania sklepu
              internetowego. W zależności od wybranej platformy, mogą pojawić
              się koszty licencji, hostingowe oraz opłaty za dodatkowe funkcje.
              Dlatego ważne jest oszacowanie, ile można przeznaczyć na
              rozwijanie i utrzymanie sklepu online.
            </p>
          </div>
          <div className='mt-10'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              Tworzenie doświadczenia użytkownika i zwiększanie sprzedaży
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Tworzenie sklepu internetowego to nie tylko kwestia techniczna. To
              także budowanie doświadczenia użytkownika, które zachęca do
              dłuższego przebywania na stronie i powracania. Zrozumienie i
              spełnienie oczekiwań klientów to klucz do zwiększenia sprzedaży.
              Dlatego oferujemy integrację z zaawansowanymi systemami płatności,
              takimi jak PayU czy PayByLink, które znacznie ułatwiają proces
              zakupowy.
            </p>
          </div>
          <div className='mt-10'>
            <h2 className='text-xl sm:text-2xl pb-5'>
              Wsparcie na każdym etapie Twojej drogi w E-commerce
            </h2>
            <p className='pb-5 leading-8 text-justify'>
              Pamiętaj, że stworzenie sklepu internetowego to dopiero początek
              Twojej drogi w e-commerce. Chętnie będziemy Cię wspierać na każdym
              etapie, pomagając przekształcić odwiedzających w lojalnych
              klientów. Zacznijmy razem tworzyć Twoją przyszłość w świecie
              cyfrowego handlu!
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Shop;
