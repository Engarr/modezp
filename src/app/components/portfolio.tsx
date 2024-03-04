'use client';
import SectionTitle from '@/components/section-header';
import React from 'react';
import PortfolioProject from './portfolio-project';

const Portfolio = () => {
  return (
    <section className='my-5 container mx-auto pb-10 '>
      <div className='container sm:mx-auto sm:px-5'>
        <div className='w-[100%] md:w-[100%] flex flex-col justify-between text-center sm:text-left'>
          <SectionTitle>Nasze realizacje</SectionTitle>
        </div>
      </div>
      <div className='flex flex-wrap justify-between px-5 '>
        <PortfolioProject
          side={'right'}
          link={'https://osk-neocar.pl/'}
          backgroundColor={'bg-transparent'}
          textColor={'text-black'}
          src='/portfolio2.png'
          alt='strone Neocar'
          width={714}
          height={604}
          title={
            'Przyjazne wizualnie środowisko, które wywołuje pozytywne emocje i zachęca przyszłych kursantów do podjęcia decyzji o nauce jazdy właśnie w NeoCar.'
          }
          text={
            'Struktura strony zaprojektowana do łatwego odnalezienia niezbędnych informacji.'
          }
        />
        <PortfolioProject
          side={'left'}
          link={'http://www.adrianpruchnik.pl/'}
          backgroundColor={'bg-transparent'}
          textColor={'text-black'}
          src='/portfolio3.png'
          alt='strona Adriana Pruchnika'
          width={714}
          height={604}
          title={`Wizualnie zachwycająca przestrzeń, inspirująca emocje i pasję, zachęcająca do odkrywania świata fotografii z Adrianem.`}
          text={`Strona stworzona z myślą o łatwym dostępie do kluczowych informacji i galerii. Wyjątkowe kompozycje i estetyka prezentacji prac podkreślają artystyczny charakter i profesjonalizm.`}
        />
        <PortfolioProject
          side={'right'}
          link={'https://transwos.pl/'}
          backgroundColor={'bg-transparent'}
          textColor={'text-black'}
          src='/portfolio1.png'
          alt='Strona pomocy drogowej'
          width={714}
          height={604}
          title={`"Natychmiastowa pomoc drogowa, na którą możesz liczyć"-TRANSWOŚ.`}
          text={`Nasza strona oferuje łatwy dostęp do wyraźnie widocznego numeru telefonu, zapewniając szybki kontakt w sytuacjach awaryjnych. To właśnie tego typu strony powinny cechować się prostotą. `}
        />
        <PortfolioProject
          side={'left'}
          link={'https://credo-psi.vercel.app/'}
          backgroundColor={'bg-transparent'}
          textColor={'text-black'}
          src='/portfolio4.png'
          alt='Strona biura pielgrzymkowo-turystycznego CREDO'
          width={714}
          height={604}
          title={`Zachwycające miejsce, które budzi inspirację i zachęca do odkrywania nowych kierunków podróży z biurem pielgrzymkowo-turystycznym CREDO.`}
          text={`Strona została zaprojektowana z myślą o intuicyjnej nawigacji i bezproblemowym dostępie do najważniejszych informacji oraz oferty wycieczek.`}
        />
        <PortfolioProject
          side={'right'}
          link={'https://wik-land-front.vercel.app/'}
          backgroundColor={'bg-transparent'}
          textColor={'text-black'}
          src='/portfolio5.png'
          alt='Strona sklepu Wikland'
          width={714}
          height={604}
          title={`Strona Wickerland oferuje wyjątkowe wyroby z wikliny, łącząc tradycję z nowoczesnością.`}
          text={`Strona sklepów internetowych projektowane są przede wszystkim z dbałością o intuicyjność korzystania z interfejsu. Użytkownik musi łatwo odnaleźć potrzebne funkcje by chętnie wracała do zakupów`}
        />
      </div>
    </section>
  );
};

export default Portfolio;
