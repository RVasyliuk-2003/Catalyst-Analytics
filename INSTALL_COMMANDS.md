# Installation Commands — React + TypeScript

Колекція команд для встановлення бібліотек у React-проєктах.

---

## 1. Routing — маршрутизація

Дозволяє створювати сторінки та переходити між ними без повного перезавантаження сайту.

```bash
# React Router — маршрутизація між сторінками
npm install react-router-dom
```

## 2. Форми та валідація

```bash
# React Hook Form — керування формами
npm install react-hook-form

# Zod — перевірка та валідація даних
npm install zod

# Resolver для інтеграції React Hook Form із Zod
npm install @hookform/resolvers
```

## 3. Слайдери та каруселі

```bash
# Swiper — універсальні слайдери для React
npm install swiper

# Embla Carousel — гнучкі каруселі
npm install embla-carousel-react

# Keen Slider — адаптивні слайдери
npm install keen-slider
```

## 4. Анімації

```bash
# Motion — анімації React-компонентів
npm install motion
```

Приклад імпорту для React:

```tsx
import { motion } from "motion/react";
```

## 5. Іконки

```bash
# Lucide React — набір SVG-іконок
npm install lucide-react
```

Приклад:

```tsx
import { Search, ShoppingCart } from "lucide-react";
```

## 6. Робота з датами

```bash
# date-fns — форматування та обчислення дат
npm install date-fns
```

## 7. Графіки та статистика

```bash
# Recharts — графіки та діаграми для React
npm install recharts
```

## 8. Drag and Drop

```bash
# dnd-kit — перетягування елементів інтерфейсу
npm install @dnd-kit/core @dnd-kit/sortable
```

## 9. Тестування

```bash
# Vitest — тестування коду у Vite-проєкті
npm install -D vitest

# React Testing Library — тестування React-компонентів
npm install -D @testing-library/react @testing-library/dom

# jest-dom — додаткові DOM-асерти
npm install -D @testing-library/jest-dom

# User Event — імітація дій користувача
npm install -D @testing-library/user-event

# jsdom — середовище DOM для тестів
npm install -D jsdom
```

> Після встановлення тестових інструментів потрібно додатково налаштувати Vitest у `vite.config.ts` і додати тестові скрипти в `package.json`.

## 10. Робота з CSS

```bash
# Sass/SCSS — препроцесор CSS
npm install -D sass
```

> CSS Modules уже підтримуються Vite. Sass потрібен лише тоді, коли вирішиш писати стилі на SCSS.

## 11. Робота з класами CSS

```bash
# clsx — умовне формування CSS-класів
npm install clsx
```

---

## Корисні команди npm

```bash
# Встановити залежності проєкту
npm install

# Встановити production-залежність
npm install library-name

# Встановити dev-залежність
npm install -D library-name

# Видалити бібліотеку
npm uninstall library-name

# Переглянути встановлені залежності
npm ls --depth=0

# Перевірити застарілі залежності
npm outdated

# Запустити проєкт
npm run dev

# Перевірити ESLint
npm run lint

# Зібрати production-версію
npm run build
```

---

## Правила використання

1. Не встановлюй усі бібліотеки одразу.
2. Перед встановленням перевір документацію та сумісність версій.
3. Після додавання бібліотеки запускай `npm run lint` і `npm run build`.
4. Якщо бібліотека потрібна майже в кожному проєкті, подумай, чи варто включити її до базового шаблону.
