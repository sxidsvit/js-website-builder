import image from './assets/censor_news_big3.jpg'
import { TextBlock, TitleBlock, ImageBlock, TextColumnsBlock } from './classes/blocks'

const mainText = [
  `Холодницкий напомнил, что в 2015 году начат процесс создания системы антикоррупционных органов, целью которых была эффективная борьба с коррупцией в Украине.

С этой целью во время открытого конкурса осенью 2015 избран первый в истории Украины руководителя Специализированной антикоррупционной прокуратуры и других руководителей подразделений САП", - отметил онИсточник: https://censor.net.ua/n3215124',
      'По словам Холодницкого, с 2015 по 2020 год САП и НАБУ практически всегда были в "оппозиции" ко всем правоохранительным структурам и представителям политических партий.`,

  `С 2015 года прошло 5 лет.Оглядываясь назад, могу сказать, что это были одновременно одни из самых тяжелых и интересных лет в моей жизни.Судьба предоставила мне возможность возглавить Специализированную антикоррупционную прокуратуру.… Сегодня дерево, которое было посажено пять лет назад дает первые плоды - коррупционеры, которые ранее были кастой неприкасаемых, получают реальные сроки", - подчеркнул онИсточник: https://censor.net.ua/n3215124`,

  `Сегодня могу с уверенностью сказать о том, что Специализированная антикоррупционная прокуратура и Национальное антикоррупционное бюро Украины выполнят свою миссию. Я благодарю свой коллектив за преданность делу, честность и неподкупность - мы достойно выполняем свою работу. В деятельности САП были также взлеты и падения, разочарования ... это естественный процесс ... Однако в самые тяжелые периоды мы оставались единой командой, поэтому я благодарю каждого из вас за поддержку. 14 лет я отдал прокуратуре, из которых 5 лет своей жизни я полностью посвятил САП, о чем не жалею ни дня ... PPS. Продолжение следует...", - подытожил Холодницкий.Источник: https://censor.net.ua/n3215124`
]

export const model = [
  new TitleBlock('Холодницкий уволился из САП', {
    tag: 'h1',
    styles: 'background: blue; color: yellow; text-align: center; padding: 1rem; margin-bottom: 0;'
  }),
  new TextBlock('ДОКУМЕНТ', {
    tag: 'h6',
    styles: 'background: red; color: #fff; text-align: center; padding: 1rem;'
  }),
  new ImageBlock(image, {
    alt: 'Холодницкий уволился из САП',
    styles: 'padding: 2rem 0; display: flex; justify-content: center;',
    imageStyles: 'width: 300px; height: auto;'
  }),
  new TextColumnsBlock(mainText, {
    tag: 'div',
    styles: 'padding: 2rem'
  })
]
