export interface FaqDataInterface {
    id: number;
    isFrequently: boolean;
    title: string;
    text: string;
}

export const faqData: FaqDataInterface[] = [
    {
        id: 0,
        isFrequently: true,
        title: 'Сколько это стоит',
        text: 'Запустить модель Branded MVNO со своими тарифами и SIM можно с минимальными вложениями. Стоимость запуска моделей от Light MVNO до Full MVNO колеблется в пределах от 5 до 200 миллионов рублей.',
    },
    {
        id: 1,
        isFrequently: true,
        title: 'Как быстро мы получим свои SIM-карты',
        text: 'Если вы хотите оказывать услуги мобильной связи под своим брендом - мы поможем с брендированием и размещением заказа у завода изготовителя. При желании, можно использовать наши стандартные SIM или eSIM, тогда начать распространение получится сразу после подписания договора. Наличие и требуемое количество SIM необходимо подтвердить, связавшись с нашим менеджером.',
    },
    {
        id: 2,
        isFrequently: true,
        title: 'Какие обязательства у нас по выкупу трафика',
        text: 'Если вы выберите схему работы с операторами связи через нас, то у вас не будет дополнительных обязательств перед хост-операторами по выкупу трафика. Но вы так же можете заключить договора с хост-оперторами напрямую, например, если планируете реализовывать схему Full MVNO ',
    },
    {
        id: 3,
        isFrequently: true,
        title: 'Работаете ли вы с eSIM',
        text: 'Да, у нас есть собственная eSIM-платформа, соответствующая всем нормативам криптографии и стандартам GSMA. Если нормативная база в вашей стране позволяет подключать абонентов с помощью технологии eSIM, то вы сможете предлагать своим клиентам в том числе и такое подключение.',
    },
    {
        id: 4,
        isFrequently: false,
        title: 'Какое название сети будет на экране телефона с нашей SIM',
        text: 'На экране мобильного телефона ваш абонент будет видеть название вашего бренда. Вы можете придумать совершенно новое название или использовать название вашей компании, которое уже известно вашим клиентам.',
    },
    {
        id: 5,
        isFrequently: false,
        title: 'Как посмотреть функционал личного кабинета',
        text: 'Для просмотра функционала личного кабинета заполните простую форму регистрации, и мы предоставим вам доступ на просмотр функционала.',
    },
    {
        id: 6,
        isFrequently: false,
        title: 'Можете ли вы разработать мобильное приложение',
        text: 'Мы можем кастомизировать под ваш бренд наше базовое приложение или же разработать новое, которое будет учитывать ваши дополнительные пожелания и специфический функционал.',
    },
];
