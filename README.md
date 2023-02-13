Шаблон для разработки мобильных приложений на Next js

---

## Techstack
[![typescript](https://img.shields.io/static/v1?label=typescript&message=4.8.4&color=3178C6&style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![node](https://img.shields.io/static/v1?label=node&message=14.5.0&color=026E00&style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![next](https://img.shields.io/static/v1?label=next&message=13.0.5&color=000000&style=for-the-badge&logo=next&logoColor=white)](https://nextjs.org/)
[![react](https://img.shields.io/static/v1?label=react&message=18.2.0&color=61DBFB&style=for-the-badge&logo=react&logoColor=white)](https://ru.reactjs.org/)
[![redux](https://img.shields.io/static/v1?label=redux&message=4.2.0&color=764ABD&style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![reduxtoolkit](https://img.shields.io/static/v1?label=redux%20toolkit&message=1.9.0&color=764ABD&style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![tailwindcss](https://img.shields.io/static/v1?label=tailwindcss&message=3.2.2&color=38BDF8&style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![sass](https://img.shields.io/static/v1?label=sass&message=7.0.3&color=BF4080&style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)


---

## Работа с шаблоном
паттерны:
- `hooks` - дирректория, которая хранит в себе кастомные хуки и хэперы.

Также, в шаблоне структурированы компоненты по Atomic Design. Компоненты деляться на:

- `/atoms/*` – тут расположены примитивные компоненты: кнопки, заголовки, поля ввода и пр.
- `/molecules/*` – тут расположены связки/группы примитивов: группы кнопок, карточки и пр.
- `/organisms/*` – тут расположены связки/группы молекул. То есть компоненты, которая состоит из молекул, которые состоят из примитивов: шапка, списки карточек, модальные окна и пр.
- `/templates/*` – тут расположены шаблоны страницы

Подробнее можно почитать:

- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
- [Atomic Design in practice](https://blog.ippon.tech/atomic-design-in-practice/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
